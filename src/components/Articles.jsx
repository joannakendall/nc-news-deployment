import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import { Link } from "@reach/router";
import VoteUpdater from "./VoteUpdater";
import ErrorDisplayer from "./ErrorDisplayer";
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
    console.log(event.target.value)
    this.setState({value: event.target.value})
  }
  
  render() {
    const { articles, isLoading, value, err } = this.state;
    console.log(err, 'in render')
    if (isLoading) return <Loader />;
    if(err) return <ErrorDisplayer err={err}/>
    return (
      <ul>
          <label>Sort Articles By:
          <select value={value} onChange={this.handleSortBy}>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
            <option value="created_at">Date</option>
          </select>
          </label>
        {articles.map(({ article_id, title, votes, comment_count }) => {
          return (
            <li className={styled.li} key={article_id}>
              <Link to={`/articles/${article_id}`}>{title}</Link>
              <p>Comment Count {comment_count}</p>
              <VoteUpdater votes={votes} article_id={article_id} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Articles;
