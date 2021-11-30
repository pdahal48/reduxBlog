import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Post from './Post'
import { useSelector, shallowEqual } from "react-redux";
import './Home.css'

const Home = () => {
    const { blogPosts } = useSelector((store) => store, shallowEqual);

    return (
        <div className="text-start">
            <Container className="col-6 my-2">
            <span className="blog-text text-secondary">
                Welcome to <b>Microblog</b>, our innovative site for communicating on the information superhighway. 
            </span>
                <Row className="mt-2">
                    {Object.keys(blogPosts).map((id) => {
                        return (
                            <Post 
                            key= {id}
                            id= {id}
                            title = {blogPosts[id].title}
                            description = {blogPosts[id].description}
                        />
                    )})}
                </Row>
            </Container>
        </div>
    )
}

export default Home;