import React from 'react';
import { Container,Row,Col, Card, Button } from 'react-bootstrap';
import './Projects.css';
import one from '../../images/one.png';
import three from '../../images/three.png';
import five from '../../images/five.png'




function Projects() {
    return (
        <Container>
            <Row>
                <Col md={4} className='project '>
                    <Card  className='align'>
                        <Card.Img variant="top" src={one} />
                        <Card.Body>
                            
                          
                            <Button variant="primary" className='task1'><a href='https://anjuseb12.github.io/portfoliyo/' className='taskLink' >Portfolio(HTML5,CSS3,Javascript)</a></Button>
                            <Card.Title></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='project'>
                    <Card  className='marginBottom1'>
                        <Card.Img variant="top" src={five} />
                        <Card.Body>
                            
                          
                            <Button variant="primary" className='task1 marginOne'><a href='#' className='taskLink' >Portfolio(Reactjs)</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className='project'>
                    <Card >
                        <Card.Img variant="top" src={three} />
                        <Card.Body>
                           
                          
                            <Button variant="primary" className='task1 marginThree'>Final Project</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects