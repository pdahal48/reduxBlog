import React, {useState} from 'react'
import { Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Validate } from './helpers'

const PostForm = ({ post, save }) => {

    const [formData, setFormData] = useState({
        title: post.title,
        description: post.description,
        body: post.body
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({...data, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Validate(formData.title, formData.description, formData.body)) {
           save(formData)
        }
    }
    return (
        <Col className="col-12">
            <Form onSubmit={handleSubmit}>
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
                    <textarea
                        type="text"
                        id="body"
                        name="body"
                        placeholder="Enter the blog content"
                        value={formData.body}
                        onChange={handleChange}
                        className="form-control"
                        rows={10}
                    />
                </Form.Group>
                <Link to="/">
                    <button 
                        className="btn btn-primary" 
                        onClick={ handleSubmit }
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

PostForm.defaultProps = {
    post: {
        title: "",
        description: "",
        body: ""
    }
}

export default PostForm;