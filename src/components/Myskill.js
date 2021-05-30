import React from "react";
import {Row, Col } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Myrole from "./Myrole";
import Project from "./Project";
function Myskill() {
  return (
    <div data-aos="fade-down">
      <center>
        <h1 className="text-center mt-3">My skills</h1>
        <Row className="container">
          <Col md sm>
            <h6>HTML5</h6>
            <div
              style={{ width: 150, height: 150 }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={80} text="80" />
            </div>
          </Col>
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
            <Myrole data-aos="scroll-down" />
          </div>
          <Col md sm>
            <h6 className="text-center">CSS3</h6>
            <div
              style={{ width: 150, height: 150 }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={60} text="60" />
            </div>
          </Col>

          <Col md sm>
            <h6 className="text-center">BOOTSTRAP</h6>
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={70} text="70" />
            </div>
          </Col>
        </Row>
        <Row className="container mt-5">
          <Col md sm>
            <h6 className="text-center">JAVASCRIPT</h6>
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={60} text="60" />
            </div>
          </Col>
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          >
            <Project />
          </div>
          <Col md sm>
            <h6 className="text-center">REACT JS</h6>
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={50} text="50" />
            </div>
          </Col>
          <Col md sm>
            <h6 className="text-center">LARAVEL</h6>
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={70} text="70" />
            </div>
          </Col>
        </Row>

        <Row className="container mt-5">
          <Col md sm>
            <h6 className="text-center">C</h6>
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={70} text="70" />
            </div>
          </Col>

          <Col md sm>
            <h6 className="text-center">PYTHON</h6>
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={70} text="70" />
            </div>
          </Col>
          <Col md sm>
            <h6 className="text-center">VUE JS</h6>
            <div
              style={{ width: 150, height: 150, fontSize: "20px" }}
              className="d-flex justify-content-center"
            >
              <CircularProgressbar value={60} text="60" />
            </div>
          </Col>
        </Row>
      </center>
    </div>
  );
}

export default Myskill;
