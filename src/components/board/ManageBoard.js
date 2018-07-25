import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BoardForm from './BoardForm';
import * as boardActions from '../../actions/boardActions';
import toastr from 'toastr';


export class ManageBoard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            contents: Object.assign({}, props.contents),
            formTitle: props.formTitle,
            lists: [

            ],
            fin: 0,
            tempTask: "",
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        // const newTask=this.state.tempTask; //event.target[0].value
        const newTask=event.target[0].value;
        const lists=this.state.lists;
        // console.log(newTask);
        this.setState({
            lists: [...lists,
            {list: newTask, done: false}
            ],
            len: lists.length+1,
            tempTask: "",
        });
    }

    handleUserInput=(event)=>{
        event.preventDefault();
        const temp=event.target.value;
        this.setState({
            tempTask: temp,
        });
        // console.log("type!");
    }

    handleCheck=(idx)=>{
        const fin=this.state.fin;
        let lists=this.state.lists;
        lists[idx].done=!lists[idx].done;
        this.setState({
            lists: lists,
            fin: (lists[idx].done===true)?fin+1:fin-1,
        });
    }

    updateChangeState(event) {
        const field = event.target.name;
        let contents = this.state.contents;

        contents[field] = event.target.value;
        return this.setState({contents: contents});
    }

    callWrite(event) {
        event.preventDefault();

        this.props.actions.writeBoard(this.state.contents)
        .then(() => this.redirect('saved'))
        .catch(error => {
            console.log(error);
        })
    }

    // redirect(value) {
    //     toastr.options.positionClass = 'toast-bottom-right';
    //     toastr.success(`content ${value}`);
    //     this.context.router.push('/board');
    // }
    
    redirect() {
        this.context.router.push('/board');
    }

    callModify() {
        this.setState({formTitle: 'Update'});
    }

    render() {
        let formTitle = this.state.formTitle,
            contentResult = this.props.contents,
            changeState = this.updateChangeState.bind(this),
            onClickTypes = '',
            buttonName = '',
            isActivate = false;

            switch(formTitle) {
                case 'Content' :
                    buttonName = 'API 신청';
                    isActivate = true;
                break;

                case 'Write' :
                    buttonName = 'API 등록';
                    onClickTypes = this.callWrite.bind(this);
                break;

                default : buttonName = 'unknown';
                break;
            }
        return (
            <div>
                <div>
                    <BoardForm 
                        isActivate = {isActivate}
                        readContent = {contentResult}
                        formTitle = {formTitle}
                        buttonName = {buttonName}
                        onChange={changeState}
                        onSave={onClickTypes} 
                    />
                </div>
            </div>
        );
    }
}

ManageBoard.propTypes = {
    contents: PropTypes.object.isRequired,
    actions : PropTypes.object.isRequired,
    formTitle: PropTypes.string.isRequired,
}

ManageBoard.contextTypes = {
    router: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    let initContent = {},
        formTitle = '',
        paramId = ownProps.params.id;

    if(paramId) {
        formTitle = 'Content';
        initContent = state.contents.filter((content) => content.id === paramId)[0];
    }
    else {
        formTitle = 'Write';
        initContent = {
            id: '',
            title: '',
            content: '',
            author: '',
            date: ''
        }
    }

    return {
        contents: initContent,
        formTitle : formTitle,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(boardActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBoard);