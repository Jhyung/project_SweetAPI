import React, {Component} from 'react';

class CommentList extends Component {
    render(){
        const idx=this.props.idx;
        return (
            <div>
                <input 
                    type="checkbox" 
                    onClick={()=>this.props.check(idx)} 
                    checked={this.props.done}
                />
                <h3>{this.props.name}</h3>
                <input 
                    type="button" 
                    value="삭제" 
                    onClick={()=>this.props.del(idx)}
                />
            </div>
        );
    }
}

export default CommentList;
