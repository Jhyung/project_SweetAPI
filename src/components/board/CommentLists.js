import React, {Component} from 'react';
import CommentList from './CommentList';

class CommentLists extends Component {
    render(){
        return (this.props.lists.map((e,i)=>(
            <CommentList 
                name={e.list} 
                done={e.done}
                 key={i} 
                 idx={i} 
                 check={this.props.check} 
                 del={this.props.del}
            />
        )));
    }
}

export default CommentLists;