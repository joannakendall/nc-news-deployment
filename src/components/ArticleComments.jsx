import React, { Component } from "react";
import * as api from "../utils/api";
import CommentForm from "./CommentForm";
import OneComment from "./OneComment";
import Loader from "./Loader";


class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true
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
    const { comments, isLoading } = this.state;
    const { article_id, user } = this.props;
    if(isLoading) return <Loader/>
    return (
      <div>
        <p>Comments:</p>
        <CommentForm addComment={this.addComment} article_id={article_id} />
        <ul class='slider'>
          {comments.map(({ comment_id, author, body, votes }) => {
            return (
              <OneComment comment_id={comment_id} author={author} body={body} votes={votes} user={user} deleteComment={this.deleteComment}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleComments;


