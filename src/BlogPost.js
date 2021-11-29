import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Posts } from './db.json'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import PostForm from './PostForm'
import Comments from './Comments'
import './BlogPost.css'

const editIcon = <FontAwesomeIcon icon={faEdit} />

const BlogPost = () => {

    const { id } = useParams();
    const [editRequested, setEditRequested] = useState(false);

   const navigate = useNavigate(); 
    let post = Posts[id]

    const INITIAL_STATE = {
        title: post.title,
        description: post.description,
        body: post.body
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setEditRequested(true);
    }

    const handleDelete = (e) => {
        delete Posts[id];
        navigate('/')
    }
    
    return (
        <div>
            {editRequested ?
            <Container className="col-3 my-3">
            <Row className="newPostForm text-start">
                <h2 className="text-secondary">New Post</h2>
                <PostForm INITIAL_STATE={INITIAL_STATE} edited={true} id={id}/>
            </Row>
            </Container>
            : 
            <Container className="container">
                {post ?
                <div className="container col-9 mt-5">
                    <div>
                    <Row>
                        <Col className=" col-10 text-start post-title text-secondary">
                            <b>{post.title}</b>
                        </Col>
                        <Col className="col-2">
                            <span className="edit-icon text-primary" onClick={handleEdit}> {editIcon} </span>
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
                        <Comments />
                    </div>
                </div>
                : 
                <div>
                    <h3 className="text-secondary">No Post with that Id</h3>
                </div>
                }
            </Container>
        }
        </div>
    )
}

export default BlogPost;