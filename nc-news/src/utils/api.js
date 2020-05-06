import axios from 'axios';

export const getTopics = () => {
    return axios.get('https://nc-news-joanna-kendall.herokuapp.com/api/topics')
        .then(({data: {topics}})=> {
            return topics
        })
}

export const getArticles = (topic, value) => {
    return axios.get('https://nc-news-joanna-kendall.herokuapp.com/api/articles', {params: {topic: topic, sort_by: value}, })
    .then(({data: {articles}}) => {
            return articles
        })
}

export const getArticleById = (article_id) => {
    return axios.get(`https://nc-news-joanna-kendall.herokuapp.com/api/articles/${article_id}`)
    .then(({data: {article}}) => {
        return article
    })
}

export const getComments = (article_id) => {
    return axios.get(`https://nc-news-joanna-kendall.herokuapp.com/api/articles/${article_id}/comments`)
        .then(({data: {comments}}) => {
        return comments
    })
}

export const updateVotes = (article_id, voteChange) => {
    return axios.patch(`https://nc-news-joanna-kendall.herokuapp.com/api/articles/${article_id}`, 
    {inc_votes: voteChange})
}

export const updateCommentVotes = (comment_id, voteChange) => {
    return axios.patch(`https://nc-news-joanna-kendall.herokuapp.com/api/comments/${comment_id}`, 
    {inc_votes: voteChange})
}

export const postComment = (article_id, username, body) => {
    return axios.post(`https://nc-news-joanna-kendall.herokuapp.com/api/articles/${article_id}/comments`, {username, body})
    .then(({data: {comment}}) => {
        return comment
    })
}
