import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PostForm from './PostForm'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { getPost, editPost, deletePost } from './Redux/postActions'
import { useSelector, useDispatch } from "react-redux";
import Comments from './Comments';
import './BlogPost.css'
import { EDIT_POST } from './Redux/actionTypes'

const editIcon = <FontAwesomeIcon icon={faEdit} />

const BlogPost = () => {

    const { id } = useParams();
    const [editRequested, setEditRequested] = useState(false);
    const post = useSelector(store => store.PostReducer[id]);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(function loadPost() {
        async function getPostFromAPI() {
            dispatch(getPost(id))
        }
        if (!post) {
            getPostFromAPI();
        }

    },[dispatch, id, post])

    const toggleEdit = () => {
        setEditRequested(edit => !edit);
    }

    const save = ({title, description, body}) => {
        dispatch(editPost(id, title, description, body))
        toggleEdit();
    }

    const handleDelete = (e) => {
        dispatch(deletePost(id))
        navigate('/')
    }

    function delComment(e) {
        // dispatch(deleteComment(id, e.target.id));
        console.log('comment delete equested')
        setEditRequested(false)
    }

    if (!post) return <h2 className="text-secondary">Loading</h2>;

    return (
        <div>
            { editRequested ?
            <Container className="col-3 my-3">
            <Row className="newPostForm text-start">
                <h2 className="text-secondary">New Post</h2>
                <PostForm save={save} post={post}/>
            </Row>
            </Container>
            :
            <Container className="container">
                <div className="container col-9 mt-5">
                    <div>
                    <Row>
                        <Col className=" col-10 text-start post-title text-secondary">
                            <b>{post.title}</b>
                        </Col>
                        <Col className="col-2">
                            <span className="edit-icon text-primary" onClick={toggleEdit}> {editIcon} </span>
                            <span className="text-danger del-icon mx-2" onClick={handleDelete}> X </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-1 text-start post-desc text-secondary">
                            {post.description}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-3 text-start post-body text-secondary">
                            {post.body}
                        </Col>
                    </Row>
                    </div>
                    <div className="text-start mt-3">
                        <Comments comments = {post.comments} delComment = {delComment} />
                    </div>
                </div>
            </Container>
        }
        </div>
    )
}

export default BlogPost;