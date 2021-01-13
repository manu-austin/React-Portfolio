import React from "react";
import NavTabs from "../NavTabs";
import { Col, Row, Container, Image } from "react-bootstrap";
import photo from "../images/MyPicture.jfif";

function Home() {
  return (




      
    <div className="about-container">

      <Row className="about-Nav" >
        <Col className ="justify-content-center">
          <NavTabs />
        </Col>
      </Row>



      <div id="aboutme">
        

      <Row className="contact-title justify-content-center">
          <Col></Col>
           <Col xs={6} className = "title-wrapper">
            <Row className="justify-content-center">
            <h3 className="display-4">About me</h3>
             </Row>
          </Col>
           <Col></Col>
           </Row>

        <Row>

        <Col md={{ span: 6, offset: 3 }}>
          <Row className="justify-content-center">
          <Col xs={1}>
            <Image className="img" src={photo} alt="Emmanuel Durand" width="100" height="100" roundedCircle />
            </Col>
          </Row>


          <Row className="about-text">
            <Col></Col>
            <Col xs={9}>
              <p>Accomplished Chartered Financial Analyst with over 8 years’ experience supporting business growth for MNC’s through astute financial management with 6 years’ experience leveraging strong business & entrepreneurial acumen to build own successful online retail business</p>
            </Col>
            <Col></Col>
          </Row>

          </Col>
                            

        </Row>
    </div>
    </div >

  );
}

export default Home;