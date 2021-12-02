import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getPosts } from './Redux/actions'
import Post from './Post'
import './Home.css'

const Home = () => {
    const { titles } = useSelector((store) => store, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <div className="text-start">
            <Container className="col-6 my-2">
            <span className="blog-text text-secondary">
                Welcome to <b>Microblog</b>, our innovative site for communicating on the information superhighway. 
            </span>
                <Row className="mt-2">
                    {titles.map((t) => {
                        return (
                            <Post 
                            key= {t.id}
                            id= {t.id}
                            title = {t.title}
                            description = {t.description}
                        />
                    )})}
                </Row>
            </Container>
        </div>
    )
}

export default Home;