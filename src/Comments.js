import React from 'react'
import Comment from './Comment';
import './Comments.css'

const Comments = ({comments=[], delComment}) => {
    return (
        <div className="comments">
            <h3 className="comments-header">Comments</h3>
            <div>
                {comments.length && comments.map(c => (
                    <Comment 
                        comment = {c.text}
                        key={c.id}
                        comment_id={c.id}
                        delComment = { delComment }
                    />
                ))}
            </div>
        </div>
    )
}

export default Comments;