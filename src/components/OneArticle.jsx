import React, { Component } from 'react';
import * as api from '../utils/api'
import ArticleComments from './ArticleComments';
import ErrorDisplayer from './ErrorDisplayer';
import styled from '../css/OneArticle.module.css'
import VoteUpdater from './VoteUpdater';
import Loader from './Loader';

class OneArticle extends Component {
    state = {
    article: {},
    isLoading: true,
    err: '',
}

componentDidMount() {
    this.fetchArticleById()
}

fetchArticleById() {
    const {article_id} = this.props;
    api.getArticleById(article_id)
        .then((article) => {
        this.setState({article, isLoading: false});
    })
    .catch(err => {
        this.setState({err: err.response.data.msg, isLoading: false})
    })
} 

    render(){
        const {article, isLoading, err} = this.state
        const {article_id, title, body, author, created_at, votes} = article
        if(isLoading) return <Loader/>
        if(err) return <ErrorDisplayer err={err}/>
        return (<div>
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <VoteUpdater votes={votes} article_id={article_id}/>
            <p>{created_at}</p>
            <p className={styled.p}>{body}</p>
            <ArticleComments article_id={article_id} user={this.props.user}/>
        </div>
        )   
    }
}

export default OneArticle;

