import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Comment = ({ comment, delComment, id }) => {
    return (
        <div>
            <Row>
                <Col className="col-10 text-secondary">
                    <span 
                        className="del-btn mx-2" 
                        id={id}
                        onClick={delComment}
                    >
                        X
                    </span>
                    <span>{comment}</span>
                </Col>
            </Row>
        </div>
    )
}

export default Comment;