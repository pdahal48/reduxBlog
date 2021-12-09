import React, { useState } from 'react'
import { Form, Row } from 'react-bootstrap';
import './Comments.css'

const Comments = ({sendCommentToAPI}) => {

    const [text, setText] = useState();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendCommentToAPI(text);
        setText("")
    }

    return (
            <div>
                <Row>
                    <Form className="mt-2" onSubmit={handleSubmit}>
                    <Form.Group>
                        <input
                            id="commentForm-text"
                            name="text"
                            size="50"
                            placeholder="Share your views"
                            value={text}
                            className="form-control"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <button className="btn btn-outline-success"> Add</button>
                    </Form>
                </Row>
        </div>      
    )
}

export default Comments;