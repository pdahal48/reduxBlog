import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const editIcon = <FontAwesomeIcon icon={faEdit} />

const PostDisplay = ({toggleEdit, deletePost, post}) => {
    const { title, description, body } = post;

    return (
        <div className="container col-9 mt-5">
            <Row>
                <Col className=" col-10 text-start post-title text-secondary">
                    <b>{title}</b>
                </Col>
                <Col className="col-2">
                    <span className="edit-icon text-primary" onClick={toggleEdit}> {editIcon} </span>
                    <span className="text-danger del-icon mx-2" onClick={deletePost}> X </span>
                </Col>
            </Row>
            <Row>
                <Col className="mt-1 text-start post-desc text-secondary">
                    {description}
                </Col>
            </Row>
            <Row>
                <Col className="mt-3 text-start post-body text-secondary">
                    {body}
                </Col>
            </Row>
        </div>
    )
};

export default PostDisplay;