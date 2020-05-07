import React, { Component } from 'react';
import * as api from '../utils/api'

class CommentVoteUpdater extends Component {
    state = {
        voteDifference: 0,
    }
    render() {
        const {votes} = this.props
        const {voteDifference} = this.state
        return (
            <div>
                <button onClick={() => {this.handleVote(1)}} disabled={voteDifference === 1}>Vote Up</button>
                <p>Votes: {votes + voteDifference}</p>
                <button onClick={() => {this.handleVote(-1)}} disabled={voteDifference === -1}>Vote Down</button>
            </div>
        );
    }
    handleVote = (voteChange) => {
        const {comment_id} = this.props;
        this.setState((currentState) => {
            return { voteDifference: currentState.voteDifference + voteChange}
        });
        api.updateCommentVotes(comment_id, voteChange).catch(() => {
            this.setState((currentState) => {
                return { voteDifference: currentState.voteDifference - voteChange}
            })
        })
    }
}

export default CommentVoteUpdater;

