import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Comment = ({ comment, delComment }) => {
    return (
        <div>
            <Row>
                <Col className="col-10 text-secondary">
                    <span className="del-btn mx-2" onClick={delComment}>X</span>
                    {comment}
                </Col>
            </Row>
        </div>
    )
}

export default Comment;