import React, { Component } from 'react';
import * as api from '../utils/api'
import ArticleComments from './ArticleComments';
import ErrorDisplayer from './ErrorDisplayer';

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
        this.setState({err: err.response.data.msg})
    })
}

    render(){
        const {article, isLoading, err} = this.state
        const {article_id, title, body, author, created_at} = article
        if(isLoading) return <p>Loading Article...</p>
        if(err) return <ErrorDisplayer err={err}/>
        return (<div>
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>{created_at}</p>
            <p>{body}</p>
            <ArticleComments article_id={article_id} user={this.props.user}/>
        </div>
        )   
    }
}

export default OneArticle;

