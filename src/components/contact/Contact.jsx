import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'





function Contact() {
    const [validated, setValidated] = useState(false);
    const [userFullname, setUserFullname] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userSubject, setUserSubject] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [show, setShow] = useState(false);
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        else {
            const formData = {
                userFullname,
                userEmail,
                userSubject,
                userMessage

            }
            setShow(true);
            toast.success(" Added Successfully!!", {
            position: "top-left",
            theme: "colored",
                
            });

        }



        setValidated(true);
    }
    const handleUserFullname = (e) => {
        setUserFullname(e.target.value);

    }
    const handleUserEmail = (e) => {
        setUserEmail(e.target.value);

    }
    const handleUserSubject = (e) => {
        setUserSubject(e.target.value);
    }
    const handleUserMessage = (e) => {
        setUserMessage(e.target.value);
    }
    return (
        <Container>
            <Row>
                <Col className='topic-color'>Contact Me</Col>
            </Row>
            <Row>
                <Col className='mt-3 mb-3'>
                    <ToastContainer autoClose={5000} />
                    <div className='divheight'>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3">

                            <Form.Control type="text" placeholder="Fullname" onChange={(e) => handleUserFullname(e)} required />
                            <Form.Control.Feedback type='invalid'>Enter Fullname</Form.Control.Feedback>
                            <Form.Control.Feedback type='valid'>Successfully Entered</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">

                            <Form.Control type="email" placeholder="Email" onChange={(e) => handleUserEmail(e)} required />
                            <Form.Control.Feedback type='invalid'>Enter Valid Email</Form.Control.Feedback>
                            <Form.Control.Feedback type='valid'>successfully Entered</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">

                            <Form.Control type="text" placeholder="Subject" onChange={(e) => handleUserSubject(e)} required />
                            <Form.Control.Feedback type='invalid'>Subject</Form.Control.Feedback>
                            <Form.Control.Feedback type='valid'>Successfully Entered</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">

                            <Form.Control type="text" placeholder="Message" onChange={(e) => handleUserMessage(e)} required />
                            <Form.Control.Feedback type='invalid'>Message</Form.Control.Feedback>
                            <Form.Control.Feedback type='valid'>Successfully Entered</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" className='button1'>
                            Submit

                        </Button>
                    </Form>
                    </div>

                   



                </Col>
            </Row>
        </Container>

    )
}

export default Contact