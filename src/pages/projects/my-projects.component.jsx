import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  CardDeck  from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Tilt from "react-tilt";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Lsurvival from "../../assets/img/projects/survivalgame.png"
import Lsmartcar from "../../assets/img/projects/smartcar.png"
import Lcustomer from "../../assets/img/projects/customersegmentation.png"
import Limage from "../../assets/img/projects/imagecaptioning.png"
import Ltodo from "../../assets/img/projects/todoapp.png"
import LRBT from "../../assets/img/projects/rbtimplementation.png"
import LLeetcode from "../../assets/img/projects/leetcode.png"

import './my-projects.style.css'
const Projects = () => {
    return (
        <div id="project">
         <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
         <Jumbotron className="jumbo-style">
        <CardDeck>
        <Container>
        <Row>
            <Col>
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Smart Car</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={Lsmartcar} alt="smart cab" />
                  
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Show More
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Accordion>
          </Tilt>
          
       
        </Col>
        <Col md>
        
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >To-Do Web App</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={Ltodo} alt="todo app" />
                  
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Show More
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Accordion>
          </Tilt>
          
       

        </Col>

        <Col>
        
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Image Captioning</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={Limage} alt="image caption" />
                  
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Show More
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Accordion>
          </Tilt>
          
       

        </Col>
            </Row>
            <br></br>
            <br></br>

            <Row>
            <Col>
        
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Red Black Tree</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={LRBT} alt="rbt" />
                  
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Show More
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Accordion>
          </Tilt>
          
       

        </Col>
        <Col>
        <Container>
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Customer Segmentation Analysis</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={Lcustomer} alt="customerseg" />
                  
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Show More
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Accordion>
          </Tilt>
          
        </Container>

        </Col>

        <Col>
        <Container>
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Survival Game</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={Lsurvival} alt="survival game" />
                  
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Show More
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Accordion>
          </Tilt>
          
        </Container>

        </Col>
            </Row>
        <br></br>
        <Row>
            <Col md="4"></Col>
            <Col md="4">
            <Container>
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Leet Code</Card.Title>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={LLeetcode} alt="Leetcode logo" />
                  
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Show More
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
            </Accordion>
          </Tilt>
          
        </Container>
            </Col>
        </Row>
        </Container>
        </CardDeck>
            </Jumbotron>


        </div>
    )
}

export default Projects
