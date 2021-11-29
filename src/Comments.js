import React, { useState, useEffect } from 'react'
import { blogComments } from './db.json';
import { useParams } from 'react-router-dom'
import Comment from './Comment';
import './Comments.css'

const Comments = () => {
    console.log('In the comments componenet')
    const { id } = useParams();

    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        function getComments() {
            console.log('useEffect ran')
            let postComments = Object.keys(blogComments).filter((commentId) => (
                    blogComments[commentId]['postId'] === id
            ));
            setReviews(postComments)
        };
        getComments();

    }, [id])

    function delComment() {
        console.log('comment delete requested')
    }
    
    return (
        <div className="comments">
            {    console.log('comments componenet redered')}
            <h3 className="comments-header">Comments</h3>
            <div>
                {reviews.map((r) => (
                    <Comment 
                        comment = {blogComments[reviews]['comment']}
                        key={blogComments[reviews]['id']}
                        delComment = {delComment}
                    />
                ))}
            </div>
        </div>
    )
}

export default Comments;