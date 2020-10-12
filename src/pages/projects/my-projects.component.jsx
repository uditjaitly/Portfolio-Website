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

import Image from "react-bootstrap/Image";
import Ltensor from "../../assets/icons/tensor.png";
import Lmaya from "../../assets/icons/autodesk.png";
import Laws from "../../assets/icons/aws-2.svg";
import Lc from "../../assets/icons/c.svg"
import Lcss from "../../assets/icons/css-5.svg"
import LUnity from "../../assets/icons/unity.png"
import Ldocker from "../../assets/icons/docker-logo.png"
import Lhtml from "../../assets/icons/html5.svg"
import Ljava from "../../assets/icons/java-4.svg"
import Ljupyter from "../../assets/icons/jupyter.png"
import Lnodejs from "../../assets/icons/nodejs-1.svg"
import Lpython from "../../assets/icons/python-4.svg"
import Lreact from "../../assets/icons/react.svg"
import Lgoogle from "../../assets/icons/google-cloud-1.svg"
import Lkube from "../../assets/icons/kube.png"
import Lcsharp from "../../assets/icons/csharp.png"


import './my-projects.style.css'
const Projects = () => {
    return (
        <div id="project">
         <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
         <Jumbotron className="jumbo-style">
        <CardDeck>


          {/*SMART CAR*/}
        <Container>
        <Row>
            <Col>
            <div className="d-flex justify-content-between flex-column mt-1">
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Smart Car</Card.Title>
              </Card.Header>
              <Card.Body className="text-center style d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={Lsmartcar} alt="smart cab" />
                </div>
                
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle   as={Button} variant="link" eventKey="0">
                    <div className="justify-content-center" > Project Description </div>
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" className="proj-des text-left" >
                    <Card.Body>
                        <strong>Description:</strong> Training an Autonomous Car via Reinforcement Learning
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>2D road grid with automated traffic</li>
                          <li>Agent(Car) responds to the environment </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Lpython}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Ljupyter}
                                alt="Jupyter"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Jupyter
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-center text-center">
                <a href="https://www.linkedin.com/in/udit-jaitly-757222109/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
                 
                
                  
              </div>
              </Card.Body>
            </Card>
            </Accordion>
            
          </Tilt>
          </div> 
       
        </Col>

       {/*TO DO APP*/}
      
       
        <Col>
            <div className="d-flex justify-content-between flex-column mt-1">
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >To-Do</Card.Title>
              </Card.Header>
              <Card.Body className="text-center style d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={Ltodo} alt="smart cab" />
                </div>
                
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle   as={Button} variant="link" eventKey="0">
                    <div className="justify-content-center" > Project Description </div>
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" className="proj-des text-left" >
                    <Card.Body>
                        <strong>Description:</strong> Web based To-Do application
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Full functionality provided to user</li>
                          <li>Backend supports data retrieval </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Lnodejs}
                                alt="Nodejs"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Lhtml}
                                alt="Html"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Lcss}
                                alt="css"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-center text-center">
                <a href="https://www.linkedin.com/in/udit-jaitly-757222109/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
                 
                
                  
              </div>
              </Card.Body>
            </Card>
            </Accordion>
            
          </Tilt>
          </div> 
       
        </Col>


        {/*IMAGE CAPTIONING*/}

        <Col>
            <div className="d-flex justify-content-between flex-column mt-1">
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Image Captioning</Card.Title>
              </Card.Header>
              <Card.Body className="text-center style d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={Limage} alt="imagecap" />
                </div>
                
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle   as={Button} variant="link" eventKey="0">
                    <div className="justify-content-center" > Project Description </div>
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" className="proj-des text-left" >
                    <Card.Body>
                        <strong>Description:</strong> This deep learning based model generates captions/descriptions for images.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Model consists of Encoder, Sequence Processor and Decoder</li>
                          <li>Evaluated the model using BLEU scores </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Lpython}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Ltensor}
                                alt="Tensor"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              TensorFlow
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-center text-center">
                <a href="https://www.linkedin.com/in/udit-jaitly-757222109/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
                 
                
                  
              </div>
              </Card.Body>
            </Card>
            </Accordion>
            
          </Tilt>
          </div> 
       
        </Col>
            </Row>
            <br></br>
            <br></br>

            {/*Red Black Tree*/}

            <Row>
            <Col>
            <div className="d-flex justify-content-between flex-column mt-1">
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Red Black Tree</Card.Title>
              </Card.Header>
              <Card.Body className="text-center style d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={LRBT} alt="RBT" />
                </div>
                
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle   as={Button} variant="link" eventKey="0">
                    <div className="justify-content-center" > Project Description </div>
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" className="proj-des text-left" >
                    <Card.Body>
                        <strong>Description:</strong> Implemented the advanced data structure RBT in C++
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Solved a complex problem using RBT</li>
                          <li>Achieved significant performance increase as compared to basic data structures  </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Lc}
                                alt="C++"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C++
                            </span>
                          </li>
                         
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-center text-center">
                <a href="https://www.linkedin.com/in/udit-jaitly-757222109/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
                 
                
                  
              </div>
              </Card.Body>
            </Card>
            </Accordion>
            
          </Tilt>
          </div> 
       
        </Col>

        {/*Customer Segmentation*/}

        <Col>
            <div className="d-flex justify-content-between flex-column mt-1">
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Customer Segmentation</Card.Title>
              </Card.Header>
              <Card.Body className="text-center style d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={Lcustomer} alt="CustomerSeg" />
                </div>
                
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle   as={Button} variant="link" eventKey="0">
                    <div className="justify-content-center" > Project Description </div>
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" className="proj-des text-left" >
                    <Card.Body>
                        <strong>Description:</strong> Segmented customer into various categories using unsupervised learning techniques
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Performed PCA for dimensionality reduction</li>
                          <li>Found hidden patters in the dataset which distinguishes the customers into separate categories</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Lpython}
                                alt="python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={Ljupyter}
                                alt="jupyter"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Jupyter
                            </span>
                          </li>
                         
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-center text-center">
                <a href="https://www.linkedin.com/in/udit-jaitly-757222109/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
                 
                
                  
              </div>
              </Card.Body>
            </Card>
            </Accordion>
            
          </Tilt>
          </div> 
       
        </Col>


        {/*Survival Game*/}

        <Col>
        <div className="d-flex justify-content-between flex-column mt-1">
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Survival Game</Card.Title>
              </Card.Header>
              <Card.Body className="text-center style d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={Lsurvival} alt="survivalgame" />
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle   as={Button} variant="link" eventKey="0">
                    <div className="justify-content-center" > Project Description </div>
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" className="proj-des text-left" >
                    <Card.Body>
                        <strong>Description:</strong> Developed a first person shooter survival game
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Modelled assets in Maya and implemented the logic in Unity</li>
                          <li>Implemented dynamic elements in the game like animated enemies, day-night cycle etc</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LUnity}
                                alt="Unity"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Unity Engine
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Lmaya}
                                alt="Maya"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Maya
                            </span>
                          </li>
                        
                          <li>
                            <span className="p-2">
                              <Image
                                src={Lcsharp}
                                alt="csharp"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C#
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-center text-center">
                <a href="https://www.linkedin.com/in/udit-jaitly-757222109/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
                </div>
              </Card.Body>
            </Card>
            </Accordion>
          </Tilt>
          </div> 

        </Col>
            </Row>
        <br></br>


        {/*LEETCODE*/}
        <Row>
            <Col md="4"></Col>
            <Col md="4">
            <div className="d-flex justify-content-between flex-column mt-1">
          <Tilt options={{ max: 5 }}>
            <Accordion>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Title className="heading justify-content-center" >Leetcode Problems</Card.Title>
              </Card.Header>
              <Card.Body className="text-center style d-flex justify-content-center flex-column">
                <div>
                <Card.Img variant="top" className="img-resize" src={LLeetcode} alt="leetcode" />
                </div>
                <div>
                  <Card.Text className="text-center style">
                  <Card.Header>
                    <Accordion.Toggle   as={Button} variant="link" eventKey="0">
                    <div className="justify-content-center" > Project Description </div>
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" className="proj-des text-left" >
                    <Card.Body>
                        <strong>Description:</strong> My accepted solutions to leetcode problems
  
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={Lc}
                                alt="C++"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C++
                            </span>
                          </li>
            
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card.Text>
                </div>
                <div className="d-flex justify-content-center text-center">
                <a href="https://www.linkedin.com/in/udit-jaitly-757222109/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
                </div>
              </Card.Body>
            </Card>
            </Accordion>
          </Tilt>
          </div> 

            </Col>
        </Row>
        </Container>
        </CardDeck>
            </Jumbotron>


        </div>
    )
}

export default Projects
