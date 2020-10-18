import React from 'react'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/Profile.png'
import Button from "react-bootstrap/Button";
import './about.style.css'
const About = () => {
    return (
        <div id='about'>
        <div className="about">
        <h1 className="title text-center">ABOUT ME</h1>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Row>
                    <Image className= "profile justify-content-end" src={Profile} roundedCircle fluid />
                    </Row>

                </Col>
                <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">   
                Hello! I am Udit, a Computer Engineer based in Gainesville, Florida. I am currently pursuing my masters degree in Computer Science
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/uditjaitly" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/udit-jaitly-757222109/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    )
}

export default About
