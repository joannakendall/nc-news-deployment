import React, { Component } from 'react';
import * as api from '../utils/api'

class VoteUpdater extends Component {
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
        /*
            to make the api request with 1 or -1 (voteChange)
        */
        const {article_id} = this.props;
        // api.updateVotes(article_id, voteChange).then(() => {
            this.setState((currentState) => {
                return { voteDifference: currentState.voteDifference + voteChange}
            })
        // });
        api.updateVotes(article_id, voteChange).catch(() => {
            this.setState((currentState) => {
                return { voteDifference: currentState.voteDifference - voteChange}
            })
        })
    }
}

export default VoteUpdater;