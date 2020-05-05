import React, { Component } from 'react';
import * as api from '../utils/api'
import Loader from './Loader';
import {Link} from '@reach/router';
import VoteUpdater from './VoteUpdater';

class Articles extends Component {
    state = {
        articles: [],
        isLoading: true,
    }
    componentDidMount(){
        this.fetchArticles()
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.topic !== this.props.topic){
            this.fetchArticles()
        }
    }
    fetchArticles() {
        const {topic} = this.props
        api.getArticles(topic).then(articles => {
            this.setState({articles, isLoading: false})
        })
    }
    render() {
        const {articles, isLoading} = this.state
        if(isLoading) return <Loader/>
        return (
            <ul>
            <button>Sort By Votes</button>
            <button>Sort By Comment Count</button>
            <button>Sort By Date</button>
               {articles.map(({article_id, title, votes, comment_count}) => {
                   return<li key={article_id}>
                       <Link to={`/articles/${article_id}`}>{title}</Link>
                       <p>Comment Count {comment_count}</p>
                       <VoteUpdater votes={votes} article_id={article_id}/>
                       </li>
               })}
               
            </ul>
        );
    }
}

export default Articles;
