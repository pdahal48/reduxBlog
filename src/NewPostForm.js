import React from 'react'
import { Container, Row } from 'react-bootstrap';
import PostForm from './PostForm';
import './NewPostForm.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addPost } from './Redux/postActions';

const NewPostForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function add({ title, description, body }) {
        console.log(`trying to add title ${title} desc ${description} body ${body}`)
        dispatch(addPost(title, description, body))
        navigate('/')
    }

    return (
        <Container className="col-3 my-3">
        <Row className="newPostForm text-start">
            <h2 className="text-secondary">New Post</h2>
            {<PostForm save = {add}/>}
        </Row>
        </Container>
    )
}

export default NewPostForm;