import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <Container>
            <Row className="justify-content-center p-1">
                <Col className="col-9 Navbox">
                <h1 className="display-4">Microblog</h1>
                <p className="lead">Get in the Rythm of blogging!</p>
                <hr className="my-4"/>
                <p className="lead">
                    <Link to="/" className="mx-5">Blog</Link> 
                    <Link to="/new" className="mx-5">Add a new blog</Link>
                </p>                
                </Col>
            </Row>

        </Container>
    )
}
export default Navbar;