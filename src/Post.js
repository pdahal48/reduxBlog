import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Posts } from './db.json'

const Post = ({ title, description, id }) => {
    return (
        <>
            <Col className="text-start col-3 mx-2 mt-3 post">
                <div className="blog-link text-secondary">
                    <Link to={`/${id}`}>{title}</Link>    
                </div>
                <div className="mt-2 text-secondary">
                    {description}
                </div>
            </Col>
        </>
    )
}

export default Post;