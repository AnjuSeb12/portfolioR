import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Home.css';




function Home() {
  useEffect(() => {

    const ele = document.querySelector('.fourthText');

    const timeText = () => {
      setTimeout(() => {
        ele.textContent = 'Front End Developer(React js)';
      }, 0);
      setTimeout(() => {
        ele.textContent = 'Back End Developer(Express js)';
      }, 4000);
      setTimeout(() => {
       
        ele.textContent = 'Full Stack Web Developer(MERN)';
        
      }, 8000);
    };


    timeText();
    const intervalId = setInterval(timeText, 15000);


    return () => clearInterval(intervalId);
  }, []);
  return (

    <Container>
      <Row>
        <Col className='bottom'>
          <div className='textWrapper'>
            <h4 className='text'>Hello,I'm Anju Sebastian</h4>

            <h4 className='fourthText text'>Full Stack Web Developer in MERN</h4>
            <Button variant="Resume" className="resume margin">Resume</Button>&nbsp;&nbsp;
            <Button variant="Contact" className='resume marginTwo'><a href='\contact'className='underlineHome'>Contact</a></Button>

          </div >
        </Col  >
      </Row >
    </Container>
  )
}

export default Home