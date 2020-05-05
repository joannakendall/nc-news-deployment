import React, { Component } from 'react';
import * as api from '../utils/api'
import ArticleComments from './ArticleComments';

class OneArticle extends Component {
    state = {
    article: {},
    isLoading: true,

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
        console.dir(err)
    })
}

    render(){
        const {article, isLoading} = this.state
        const {article_id, title, body, author, created_at} = article
        if(isLoading) return <p>Loading Article...</p>
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

