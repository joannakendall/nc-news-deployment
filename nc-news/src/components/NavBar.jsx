import React, { Component } from 'react';
import {Link} from '@reach/router';
import * as api from '../utils/api'


class NavBar extends Component {
    state= {
        topics: [],
    }
    componentDidMount() {
        api.getTopics().then(topics => {
            this.setState({topics})
        })
    }
    
    render() {
        const {topics} = this.state
        return ( 
            <nav className='nav'>
                <Link to ='/articles'>All Articles</Link>
                {topics.map(topic => {
                    return <Link to={`/articles/topics/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
                })}
            </nav>
        );
    }
}

export default NavBar;