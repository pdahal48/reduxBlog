import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment';
import { Form, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchComments } from './Redux/actions';
import './Comments.css'

const Comments = () => {
    const { id } = useParams();
    const { comments } = useSelector((store) => store, shallowEqual);
    const dispatch = useDispatch();

    const INITIAL_STATE = {
        newComment: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    // function getComments() {
    //     const blogComments = Object.keys(postComments).filter((commentId) => (
    //         postComments[commentId]['postId'] === id
    //     ));
    //     setReviews(blogComments)
    // };

    useEffect(() => {
        console.log('in useEffect')
        dispatch(fetchComments(id))
    }, [dispatch, id])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const handleAdd = () => {
        // postComments[uuid()] = {
        //     "postId": id,
        //     "comment": formData.newComment
        // }
        // setFormData(INITIAL_STATE)
        console.log('add requested')
    }

    function delComment(e) {
        console.log('delete requested')
        // delete postComments[e.target.id]
        // getComments()
    }
    
    return (
        <div className="comments">
            <h3 className="comments-header">Comments</h3>
            <div>
                {comments.map((c) => (
                    <Comment 
                        comment = {c.text}
                        key={c.id}
                        id={c.id}
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