import React, { Component } from "react";
import * as api from "../utils/api";
import CommentForm from "./CommentForm";
import CommentVoteUpdater from "./CommentVoteUpdater";


class ArticleComments extends Component {
  state = {
    comments: [],
  };
  componentDidMount() {
    this.fetchComments();
  }
  fetchComments() {
    const { article_id } = this.props;
    api.getComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }
  addComment = (newComment) => {
    this.setState(({ comments }) => {
      return {
        comments: [newComment, ...comments],
      };
    });
  };
  deleteComment = (comment_id) => {
    this.setState((currentState) => {
      const restOfComments = currentState.comments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
      return { comments: restOfComments };
    });
  };
  render() {
    const { comments } = this.state;
    const { article_id, user } = this.props;
    return (
      <div>
        <p>Comments:</p>
        <CommentForm addComment={this.addComment} article_id={article_id} />
        <ul>
          {comments.map(({ comment_id, author, body, votes }) => {
            return (
              <li key={comment_id}>
                <p>Author:{author}</p>
                <CommentVoteUpdater votes={votes} comment_id={comment_id}/>
                <p>{body}</p>
                <button
                  onClick={() => {
                    this.deleteComment(comment_id);
                  }}
                  comment_id={comment_id}
                  disabled={author !== user}
                >
                  Delete Comment!
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleComments;


