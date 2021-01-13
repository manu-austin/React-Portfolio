import React from "react";
import NavTabs from "../../components/NavTabs";
import { Col, Row, Image } from "react-bootstrap";
import Quiz from "../images/Quiz.png";
import Stock_Quotes from "../images/Stock_Quotes.png";
import Password from "../images/Password.png";
import Work_Day_Scheduler from "../images/Work_Day_Scheduler.png";
import Weather from "../images/Weather.png"



function Portfolio() {
    return (
        <div className="port-container">
            <div id="port-wrapper">

                <Row>
                    <Col>
                        <NavTabs />
                    </Col>
                </Row>

                

                <Row className="contact-title jumbotron-4 justify-content-center">
                    <Col></Col>
                    <Col xs={6} className = "title-wrapper">
                    <Row className="justify-content-center">
                        <h3 className="display-4">Portfolio</h3>
                    </Row>
                    </Col>
                    <Col></Col>
                </Row>

                <Col md={{ span: 6, offset: 3 }}>
                    
                    <Row>

                        <h3>Quiz</h3>
                        <h6>Quiz made of 5 questions. Once the questions are answered you get a score and can enter your initial.</h6>
                        <Image
                            className="d-block w-100"
                            src={Quiz}
                            width="100" height="400"
                            alt="Quiz"
                            href="https://manu-austin.github.io/Quiz/index.html" 
                        />
    
                    </Row>


                        <img
                            className="d-block w-100"
                            src={Stock_Quotes}
                            alt="Stock Quotes"
                        />
                            <Row>
                            <Col>
                            <h3>Stock Quotes</h3>
                            </Col>
                            </Row>
                            <Row>
                            <h4>Application using API to get stock quotations, stock informations and last news.</h4>
                            </Row>
                            <a href="https://etorres-revature.github.io/Lucky_Mountaineers/" target="_blank"><i class="fab fa-github"></i></a>

                        <img
                            className="d-block w-100"
                            src={Password}
                            alt="Password Generator"
                        />


                            <h3>Password Generator</h3>
                            <h4>You are prompted 4 questions based on what you want your password contains. Once done it generates a string of characters based on your choices.</h4>
                            <a href="https://manu-austin.github.io/PasswordGenerator/index.html"  target="_blank"><i class="fab fa-github"></i></a>

                        <img
                            className="d-block w-100"
                            src={Work_Day_Scheduler}
                            alt="Work Day Scheduler"
                        />

                            <h3>Work Day Scheduler</h3>
                            <h4>You can put your task on this planner from 9:00am to 5:00PM. You can store each task and it is stored in local storage. Color coding is used for time past, present and future.</h4>
                            <a href="https://manu-austin.github.io/Work_Day_Scheduler/index.html" target="_blank"><i class="fab fa-github"></i></a>

                        <img
                            className="d-block w-100"
                            src={Weather}
                            alt="Weather Dashboard"
                        />

                            <h3>Weather Dashboard</h3>
                            <h4>Through a weather API, this app shows the weather information for the city of our choice. It stores the city for easy future searches.</h4>
                            <a href="https://manu-austin.github.io/Weather-Dashboard/index.html" target="_blank"><i class="fab fa-github"></i></a>

                   
                            </Col>
               
            </div>
        </div >
    );
}

export default Portfolio;