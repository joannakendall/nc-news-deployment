import React, { Component } from 'react';
import * as api from '../utils/api'

class CommentForm extends Component {
    state = {
        author:'',
        body:'',
    }
    handleSubmitComment = (event) => {
        event.preventDefault();
        const{author, body} =this.state
        const{article_id} = this.props
        api.postComment(article_id, author, body)
        .then((newComment) => {
            this.props.addComment(newComment)
        })
        .catch(err => console.dir(err))

    this.setState({author: '', body: ''})
    }
    handleChange =  (event) => {
        const {value, name} = event.target
        this.setState({ [name] : value})
    }
    
    render() {
        const {author, body} = this.state
        return (
            <form onSubmit={this.handleSubmitComment}>
                <label>Username:<input name='author' onChange={this.handleChange} value={author}/></label>
                <label>Comment:<input name='body' onChange={this.handleChange} value={body}/></label>
                <button>Add Comment!</button>
            </form>
        );
    }
}

export default CommentForm;