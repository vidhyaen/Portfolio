import React from "react";
import { Row, Col } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// import Myrole from "./Myrole";
import Project from "./Project";
function Myskill() {
  return (
    <div data-aos="fade-down">
      <center>
        <h1 className="text-center mt-3">My skills</h1>
        <h3 className="text-center mt-3">Front end languages</h3>
        <Row className="container">
          <Col className="py-3">
            
            <div
              style={{ width: 150, height: 150 }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={80} text="Html" />
            </div>
          </Col>
          <Col className="py-3">
            <div
              style={{ width: 150, height: 150 }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={60} text="Css" />
            </div>
          </Col>
          <Col className="py-3">
      
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={60} text="JS" />
            </div>
          </Col>
        </Row>
        <h3 className="text-center mt-3">Frameworks</h3>
        <Row className="container">
          <Col className="py-3">
  
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={70} text="BS" />
            </div>
          </Col>
        
          <Col className="py-4">
            
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={50} text="React" />
            </div>
          </Col>
          <Col className="py-4">
            
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={70} text="Laravel" />
            </div>
          </Col>
          <Col className="py-4">
            
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={60} text="Vue" />
            </div>
          </Col>
        </Row>

        <h3 className="text-center py-4">Programming language</h3>
        <Row className="container">
          <Col className="py-1">
    
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={70} text="C" />
            </div>
          </Col>

          <Col className="py-3">
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={70} text="Python" />
            </div>
          </Col>
        </Row>
         
            <Project data-aos="scroll-down"/>
          
        
      </center>
    </div>
  );
}

export default Myskill;
