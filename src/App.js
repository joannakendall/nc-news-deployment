import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import NavBar from './components/NavBar';
import {Router} from '@reach/router'
import Articles from './components/Articles';
import OneArticle from './components/OneArticle';
import ErrorDisplayer from './components/ErrorDisplayer';

class App extends Component {
  state = {
    user: 'happyamy2016'
  }
  render() {
    const {user} = this.state
    return (
      <div className="App">
        <Header user={this.state.user}/>
        <NavBar/>
        <Router>
          <Articles path='/articles'/>
          <Articles path='/articles/topics/:topic'/>
          <OneArticle path='/articles/:article_id' user={user}/>
          <ErrorDisplayer default/>
        </Router>
      </div>
    );
  }
}

export default App;
