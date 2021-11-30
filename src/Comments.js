import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment';
import { Form, Row, Col } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { useSelector, shallowEqual } from 'react-redux';
import './Comments.css'

const Comments = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const { postComments } = useSelector((store) => store, shallowEqual);

    const INITIAL_STATE = {
        newComment: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    useEffect(() => getComments(), [id, formData])

    function getComments() {
        const blogComments = Object.keys(postComments).filter((commentId) => (
            postComments[commentId]['postId'] === id
        ));
        setReviews(blogComments)
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const handleAdd = () => {
        postComments[uuid()] = {
            "postId": id,
            "comment": formData.newComment
        }
        setFormData(INITIAL_STATE)
    }

    function delComment(e) {
        delete postComments[e.target.id]
        getComments()
    }
    
    return (
        <div className="comments">
            <h3 className="comments-header">Comments</h3>
            <div>
                {reviews.map((r) => (
                    <Comment 
                        comment = {postComments[r]['comment']}
                        key={postComments[r]['id']}
                        id={r}
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