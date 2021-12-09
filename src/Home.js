import React from 'react'
import { Container } from 'react-bootstrap'
import TitleList from './TitleList'
import './Home.css'

const Home = () => {
    return (
        <div className="text-start">
            <Container className="col-6 my-2">
            <span className="blog-text text-secondary">
                Welcome to <b>Microblog</b>, our innovative site for communicating on the information superhighway. 
            </span>
                <TitleList />
            </Container>
        </div>
    )
}

export default Home;