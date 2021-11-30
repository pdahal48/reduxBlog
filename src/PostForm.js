import React, {useState} from 'react'
import { Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Validate } from './helpers'
import { v4 as uuid } from 'uuid';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addPost } from './Redux/actions';


const PostForm = ({ INITIAL_STATE, id, edited=false }) => {

    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch();
    const { blogPosts } = useSelector((store) => store, shallowEqual)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = () => {
        if (Validate(formData.title, formData.description, formData.body)) {
            let id = uuid()
            dispatch(addPost({
               id, 
               post: formData
            }))  
    }}

    const handleEditSubmit = () => {
        if (Validate(formData.title, formData.description, formData.body)) {
            blogPosts[id] = {...formData}
        }
    }

    return (
        <Col className="col-12">
            <Form>
                <Form.Group>
                    <Form.Label className="text-start text-secondary">Title:</Form.Label>
                    <Form.Control
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter blog title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-secondary">Description:</Form.Label>
                    <Form.Control
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Describe your blog"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="text-secondary">Body:</Form.Label>
                    <Form.Control
                        type="text"
                        id="body"
                        name="body"
                        placeholder="Enter the blog content"
                        className="body-input"
                        value={formData.body}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Link to="/">
                    <button 
                        className="btn btn-primary" 
                        onClick={
                            edited ?  handleEditSubmit : handleSubmit
                        }
                        >
                        Save
                    </button>                
                </Link>
                <Link to="/">
                    <button className="btn btn-secondary m-2 btn-sm">Cancel</button>
                </Link>
            </Form>
        </Col>
    )
}

export default PostForm;