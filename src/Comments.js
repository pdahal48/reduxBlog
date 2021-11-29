import React, { useState, useEffect } from 'react'
import { blogComments } from './db.json';
import { useParams } from 'react-router-dom'
import Comment from './Comment';
import { Form, Row, Col } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import './Comments.css'

const Comments = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    const INITIAL_STATE = {
        newComment: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    useEffect(()=> {
        function getComments() {
            let postComments = Object.keys(blogComments).filter((commentId) => (
                    blogComments[commentId]['postId'] === id
            ));
            setReviews(postComments)
        };
        getComments();

    }, [id, formData])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const handleAdd = () => {
        console.log('comment add requested with', formData.newComment)
        blogComments[uuid()] = {
            "postId": id,
            "comment": formData.newComment
        }
        setFormData(INITIAL_STATE)
    }

    function delComment() {
        console.log('comment delete requested')
    }
    
    return (
        <div className="comments">
            <h3 className="comments-header">Comments</h3>
            <div>
                {reviews.map((r) => (
                    <Comment 
                        comment = {blogComments[r]['comment']}
                        key={blogComments[r]['id']}
                        delComment = {delComment}
                    />
                ))}
            </div>
            <div>
                <Row>
                    <Col className="col-8">
                    <Form className="mt-2">
                    <Form.Group>
                        <Form.Control 
                            type="text"
                            id="newComment"
                            name="newComment"
                            placeholder="Share your views"
                            value={formData.newComment}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    </Form>
                    </Col>
                    <Col className="col-2 mt-2">
                        <button 
                            className="btn btn-outline-success"
                            onClick={handleAdd}
                            >
                            Add
                        </button>
                    </Col>
                </Row>

        </div>      
        </div>
    )
}

export default Comments;