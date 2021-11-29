import React from 'react'
import { Posts } from './db.json'
import { Container, Row } from 'react-bootstrap'
import Post from './Post'
import './Home.css'

const Home = () => {
    return (
        <div className="text-start">
            <Container className="col-6 my-2">
            <span className="blog-text text-secondary">
                Welcome to <b>Microblog</b>, our innovative site for communicating on the information superhighway. 
            </span>
                <Row className="mt-2">
                    {Object.keys(Posts).map((id) => {
                        return (
                            <Post 
                            id = {id}
                            key= {id}
                        />
                    )})}
                </Row>
            </Container>
        </div>
    )
}

export default Home;