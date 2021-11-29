import React from 'react'
import { Container, Row } from 'react-bootstrap';
import PostForm from './PostForm';
import './NewPostForm.css'

const NewPostForm = () => {

    const INITIAL_STATE = {
        title: "",
        description: "",
        body: ""
    }
    
    return (
        <Container className="col-3 my-3">
        <Row className="newPostForm text-start">
            <h2 className="text-secondary">New Post</h2>
            {<PostForm INITIAL_STATE={INITIAL_STATE}/>}
        </Row>
        </Container>
    )
}

export default NewPostForm;