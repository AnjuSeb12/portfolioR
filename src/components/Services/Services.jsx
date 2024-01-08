import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Services.css';
import front from '../../images/front.png';
import back3 from '../../images/back3.png';
import full from '../../images/full.png'


function Services() {
  return (
    <Container>
    <Row>
        <Col md={4} className='project '>
            <Card  className='alignbottom'>
                <Card.Img variant="top" src={front} />
                <Card.Body>
                    
                  
                    <Button variant="primary" className='color marginFirst task1'>FrontEnd Development(React js)</Button>
                    <Card.Title></Card.Title>
                </Card.Body>
            </Card>
        </Col>
        <Col md={4} className='project'>
            <Card  >
                <Card.Img variant="top" src={back3} />
                <Card.Body  >
                   
                  
                    <Button variant="primary" className='color task1'>BackEnd Development(Express js)</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col md={4} className='project'>
            <Card className='alignThird'>
                <Card.Img variant="top" src={full} />
                <Card.Body>
                   
                  
                    <Button variant="primary" className='buttonLevel color task1'>Full Stack Web Development(MERN)</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
  )
}

export default Services