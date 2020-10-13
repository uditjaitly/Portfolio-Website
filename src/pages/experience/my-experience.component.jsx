import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Card, CardDeck,Row,Col,Button, Accordion} from "react-bootstrap/";
import L_MICROFOCUS from "../../assets/img/experience/microfocus.png";
import L_OPEXGURU from "../../assets/img/experience/opexguru.png";
import Tilt from "react-tilt";
import "./my-experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="title text-center">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <CardDeck>
            <Row>
            <Col md={6}>
        <Container>
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_MICROFOCUS} alt="MicroFocus logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Intern - Software Development Engineer</Card.Title>
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
        <Col md={6}>
        <Container>
          <Tilt options={{ max: 5 }}>
          <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_OPEXGURU} alt="OpexGuru logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Intern - Data Analyst</Card.Title>
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
        </CardDeck>
      </Jumbotron>
     
    </div>
  );
};

export default Experience;