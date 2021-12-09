import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment';
import { Form, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// import { fetchComments, addComment, deleteComment } from './Redux/actions';
import './Comments.css'

const Comments = ({comments=[], delComment}) => {

    const INITIAL_STATE = {
        text: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]: value}));
    }
    
    // const handleAdd = () => {
    //     dispatch(addComment(id, formData))
    //     setFormData(INITIAL_STATE)
    // }

    // function delComment(e) {
    //     dispatch(deleteComment(id, e.target.id));
    // }
    
    // useEffect(() => {
    //     dispatch(fetchComments(id))
    // }, [dispatch])


    return (
        <div className="comments">
            <h3 className="comments-header">Comments</h3>
            <div>
                {comments !== undefined && comments.map((c) => (
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
                            id="text"
                            name="text"
                            placeholder="Share your views"
                            value={formData.text}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    </Form>
                    </Col>
                    <Col className="col-2 mt-2">
                        <button 
                            className="btn btn-outline-success"
                            // onClick={handleAdd}
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