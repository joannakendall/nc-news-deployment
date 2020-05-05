import React, { Component } from 'react';
import * as api from '../utils/api'
import CommentForm from './CommentForm';


class ArticleComments extends Component {
    state = {
        comments: [],
    }
    componentDidMount() {
        this.fetchComments()
    }
    fetchComments() {
        const {article_id} = this.props;
        api.getComments(article_id)
            .then(comments => {
            this.setState({ comments, isLoading: false});
        })
    }
    addComment = (newComment) => {
        this.setState(({comments}) => {
            return {
                comments: [newComment, ...comments]
            }
        })
    }
    render() {
        const {comments} = this.state
        const {article_id, user} = this.props
        return (
            <div>
                <p>Comments:</p>
            <CommentForm addComment={this.addComment} article_id={article_id} />
            <ul>
                {comments.map(({comment_id, author, body, votes}) => {
                    return <li key={comment_id}>
                        <p>Author:{author}</p>
                        <p>Votes:{votes}</p>  
                        <p>{body}</p>
                        <button disabled={author !== user}>Delete Comment!</button>
                    </li>
                })}
            </ul>
            </div>
        );
    }
}

export default ArticleComments;

// import React from 'react';

// const ArticleComments = ({comments}) => {
//     return (
//         <div>
            
//         </div>
        
//     );
// };

// export default ArticleComments;