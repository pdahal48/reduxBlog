import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PostForm from './PostForm'
import { Container} from 'react-bootstrap'
import { getPost, editPost, deletePost, addComment, deleteComment } from './Redux/postActions'
import { useSelector, useDispatch } from "react-redux";
import Comments from './Comments';
import CommentForm from './CommentForm';
import PostDisplay from './PostDisplay'
import './BlogPost.css'

const BlogPost = () => {

    const { id }  = useParams();
    const [editRequested, setEditRequested] = useState(false);
    const post = useSelector(store => store.PostReducer[id]);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(function loadPost() {
        async function getPostFromAPI() {
            dispatch(getPost(id))
        }
        if (!post) {
            getPostFromAPI();
        }

    },[dispatch, id, post])

    const toggleEdit = () => {
        setEditRequested(edit => !edit);
    }

    const save = ({title, description, body}) => {
        dispatch(editPost(id, title, description, body))
        toggleEdit();
    }

    const handleDelete = () => {
        dispatch(deletePost(id))
        navigate('/')
    }

    function delComment(comment_id) {
        dispatch(deleteComment(id, comment_id));
    }

    function SendComment(text) {
        dispatch(addComment(id, text))
    }

    if (!post) return <h2 className="text-secondary">Loading</h2>;

    return (
        <div>
            { editRequested
                ? <PostForm save={save} post={post}/>
                : <PostDisplay post = {post}
                    toggleEdit={toggleEdit}
                    deletePost={handleDelete}
                />
            }
            <Container className="container">
                    <div className="text-start mt-3">
                        <Comments 
                            comments = {post.comments} 
                            delComment = {delComment} 
                        />
                    </div>
                        <CommentForm 
                            sendCommentToAPI = {SendComment}
                        />
            </Container>
        </div>
    )
}

export default BlogPost;