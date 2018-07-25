import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return(
            <form onSubmit={this.propsonSubmit}>댓글<br/>
                <input 
                    type="text"
                    name="newTask" 
                    className="inputTask"
                    onChange={this.props.onChange}
                    value={this.props.value}
                    autoComplete="off"
                />
                <button type="submit">확인</button>
            </form>
        );
    }
}
export default Comment;