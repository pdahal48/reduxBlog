import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import './Post.css'

const upVoteIcon = <FontAwesomeIcon icon={faThumbsUp} />
const downVoteIcon = <FontAwesomeIcon icon={faThumbsDown} />

const Post = ({ title, description, id, vote, voteCount}) => {

    // const upVote = () => {
    //     console.log(`post with an id of ${id} has been voted up`);
    // }
    // const downVote = () => {
    //     console.log(`post with an id of ${id} has been voted down`)
    // }
    return (
        <>
            <Col className="text-start col-4 mx-2 mt-3 post">
                <div className="blog-link text-secondary">
                    <Link to={`/${id}`}>{title}</Link>
                    <small className="mx-2 text-secondary">{voteCount}</small>
                    <span 
                        className="mx-3 text-success"
                        onClick={evt => vote('up', id)}
                        id="upVote"
                    > 
                        {upVoteIcon}
                    </span>
                    <span 
                        className="text-danger"
                        onClick={evt => vote('down', id)}
                        id="downVote"
                    >
                        {downVoteIcon}
                    </span>

                </div>
                <div className="mt-2 text-secondary">
                    {description}
                </div>
            </Col>
        </>
    )
}

export default Post;