import axios from 'axios';

export const getTopics = () => {
    return axios.get('https://nc-news-joanna-kendall.herokuapp.com/api/topics')
        .then(({data: {topics}})=> {
            return topics
        })
}

export const getArticles = (topic, sort_by) => {

    return axios.get('https://nc-news-joanna-kendall.herokuapp.com/api/articles', {params: {topic: topic,
sort_by: 'votes'}, })
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
    {inc_vote: voteChange})
}

export const addComment = (article_id) => {
    return axios.post(`https://nc-news-joanna-kendall.herokuapp.com/api/articles/${article_id}/comments`)
    .then(({data}) => {
        return data;
    })
}
