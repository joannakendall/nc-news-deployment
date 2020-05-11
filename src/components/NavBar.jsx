import React, { Component } from 'react';
import {Link} from '@reach/router';
import * as api from '../utils/api'
import styled from '../css/NavBar.module.css'

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
                <Link className={styled.link} to ='/articles'>all</Link>
                {topics.map(topic => {
                    return <Link className={styled.link}to={`/articles/topics/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
                })}
            </nav>
        );
    }
}

export default NavBar;