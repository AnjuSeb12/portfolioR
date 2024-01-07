import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';


function About() {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h4 className='headingAbout'>About Me</h4>
                </Col>
            </Row>
            <Row>
                <Col md={12} >
                    <p className='paragraphAbout'>Aspiring Full Stack Developer in MERN, having
                        completed Full Stack Development in MERN and
                        an MSc in Computer Science. Possessing the
                        ability to design, develop, and implement
                        responsive websites with a focus on user
                        experience. Strong knowledge in HTML5, CSS3,
                        JavaScript, React.js, Node.js, Express.js, and
                        MongoDB. Demonstrating excellent
                        communication skills and a strong aptitude for
                        teamwork.</p>
                        <h4 className='headingAbout'>Education</h4>
                        <p>
                            Full Stack Development in MERN(Entry Elevate)
                        </p>
                        <p>Master of Computer Science(Bharathiyar University)</p>
                        <p>BSC ComputerScience(Calicut University)</p>
                        <h4></h4>
                        <h4 className='headingAbout'>Personal Info</h4>
                        <p>
                           Name:Anju Sebastian
                        </p>
                        <p>Email:<a href='\contact'className='underline'>christeenaanju@gmail.com</a></p>
                        <p>Phone no:+91-8122789470</p>
                        <h4></h4>
                </Col>
            </Row>
        </Container>
    )
}

export default About