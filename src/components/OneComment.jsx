import React from 'react';
import CommentVoteUpdater from "./CommentVoteUpdater";

const OneComment = ({ comment_id, author, body, votes, user, deleteComment }) => {
    return (
        <ul>
            <li class='slide' key={comment_id}>
                <p>Author:{author}</p>
                <CommentVoteUpdater votes={votes} comment_id={comment_id}/>
                <p>{body}</p>
                <button
                  onClick={() => {
                    deleteComment(comment_id);
                  }}
                  comment_id={comment_id}
                  disabled={author !== user}
                >
                  Delete Comment!
                </button>
              </li>
        </ul>
    );
};

export default OneComment;