import React from "react";
import NavTabs from "../NavTabs";
import { Col, Row } from "react-bootstrap";
import photo from "../../images/MyPicture.jfif";

function Home() {
  return (
    <div className="about-container">

      <div id="aboutme-wrapper">
        <Row>


          <Row className="about-title jumbotron-4 justify-content-center">
            <h1 className="display-4">About Me</h1>

          </Row>



          <Row className="photo-row justify-content-center">
            <img className="my-img" src={photo} alt="Emmanuel Durand" />
          </Row>


          <Row className="about-text">
            <Col></Col>
            <Col xs={8}>
              <p>Accomplished Chartered Financial Analyst with over 8 years’ experience supporting business growth for MNC’s through astute financial management with 6 years’ experience leveraging strong business & entrepreneurial acumen to build own successful online retail business</p>
            </Col>
            <Col></Col>
          </Row>

          <Row className="about-Nav" >
          <Col></Col>
          <Col xs={3} className ="justify-content-center">
            <NavTabs />
          </Col>
          <Col></Col>
          </Row>
                            

        </Row>
    </div>
    </div >

  );
}

export default Home;