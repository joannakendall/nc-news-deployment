import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrorDisplayer from "./ErrorDisplayer";
import DropDownList from "./DropDownList";
import ArticleInfo from "./ArticleInfo";
import styled from '../css/Articles.module.css'

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    value: 'votes',
    err: '',
  };
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
    if(prevState.value !== this.state.value){
        this.fetchArticles()
    }
  }
  fetchArticles=() =>{
    const { topic } = this.props;
    const {value} = this.state
    api.getArticles(topic, value).then((articles) => {
      this.setState({ articles, isLoading: false, err: '' });
    })
    .catch((err) => {
        this.setState({err: err.response.data.msg, isLoading: false})
    })
  }
  handleSortBy=(event)=>{
    this.setState({value: event.target.value})
  }
  
  render() {
    const { articles, isLoading, value, err } = this.state;
    if (isLoading) return <Loader />;
    if(err) return <ErrorDisplayer err={err}/>
    return (
      <>
      <DropDownList value={value} handleSortBy={this.handleSortBy}/>
      <p>Click on an article to read</p>
      <ul className={styled.ul}>
        {articles.map(({ article_id, title, votes, comment_count, created_at }) => {
          return (
            <ArticleInfo article_id={article_id} title={title} votes={votes} comment_count={comment_count}  created_at={created_at}/>
          );
        })}
      </ul>
      </>
    );
  }
}

export default Articles;
