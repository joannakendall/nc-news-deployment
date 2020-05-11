import React from 'react';
import {Link} from '@reach/router'
import VoteUpdater from "./VoteUpdater";
import styled from '../css/ArticlesInfo.module.css'
const moment = require('moment');

const ArticleInfo = ({ article_id, title, votes, comment_count, created_at }) => {
    return (
           <li className={styled.li} key={article_id}>
              <Link to={`/articles/${article_id}`}>{title}</Link>
              <p>{moment(created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
              <p>Comment Count {comment_count}</p>
              <VoteUpdater  votes={votes} article_id={article_id}/>
            </li> 
    );
};

export default ArticleInfo;