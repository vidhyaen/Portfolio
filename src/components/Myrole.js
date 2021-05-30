import React from "react";

import { Card, Row, Col } from "react-bootstrap";
import { useState } from "react";
function Myrole() {
  const [display, setDisplay] = useState(false);
  return (
    <div data-aos="fade-down-right">
      <button
        onClick={() => setDisplay(!display)}
        className="btn btn-success mt-5"
      >
        My role
      </button>
      {display && (
        <div data-aos="fade-down">
          <h1 class="mt-3 text-center text-warning">My Activities</h1>
          <Row sm className="mx-2 mt-3">
            <Col sm className="text-center mt-2">
              <Card sm>
                <div sm className="text-center">
                  <h4>
                    <img src="https://img.icons8.com/plasticine/100/000000/presentation.png" alt="activity" />
                  </h4>
                </div>
                <div sm className=" text-danger">
                  <h4>Cloud Computing</h4>
                </div>
                <div sm className=" text-danger">
                  <h4>Kongu Engineering College,Erode</h4>
                </div>
                <div sm className=" text-danger">
                  <h4>2018-2019</h4>
                </div>
              </Card>
            </Col>

            <Col sm className="text-center mt-2">
              <Card sm>
                <div sm>
                  <h6>
                    <img src="https://img.icons8.com/plasticine/100/000000/presentation.png" alt="activity1"  />
                  </h6>
                </div>
                <div sm className=" text-danger">
                  <h4>Cyber security</h4>
                </div>
                <div sm className="text-danger">
                  <h4>Kumaraguru college of technology,Cbe</h4>
                </div>
                <div sm className=" text-danger">
                  <h4>2018-2019</h4>
                </div>
              </Card>
            </Col>

            <Col sm className="text-center mt-2">
              <Card sm>
                <div sm>
                  <h4>
                    <img src="https://img.icons8.com/plasticine/100/000000/presentation.png" alt="activity2"  />
                  </h4>
                </div>
                <div sm className=" text-danger">
                  <h4>Blue Brain</h4>
                </div>
                <div sm className="text-danger">
                  <h4>SNS college of technology,Cbe</h4>
                </div>
                <div sm className="text-danger">
                  <h4>2018-2019</h4>
                </div>
              </Card>
            </Col>
          </Row>
          <h1 className="mt-3 text-center text-warning">My Responsibilites</h1>
          <Row sm className="mt-3 mx-2">
            <Col sm className="text-center mt-3">
              <Card sm>
                <div sm className="text-center">
                  <h4>
                    <img src="https://img.icons8.com/color/48/000000/courage.png" alt="responsibility" />
                  </h4>
                </div>
                <div sm className=" text-danger">
                  <h4>Leadership</h4>
                </div>
                <div sm className=" text-danger">
                  <h4>Joint Treasurer</h4>
                </div>
                <div sm className=" text-danger">
                  <h4>WDC</h4>
                </div>
                <div sm className=" text-danger">
                  <h4>2020-2021</h4>
                </div>
              </Card>
            </Col>

            <Col sm className="text-center mt-3">
              <Card sm>
                <div sm>
                  <h4>
                    <img src="https://img.icons8.com/color/48/000000/courage.png" alt="responsibility1" />
                  </h4>
                </div>
                <div sm className=" text-danger">
                  <h4>Leadership</h4>
                </div>
                <div sm className="text-danger">
                  <h4>Tamil Mandram</h4>
                </div>
                <div sm className="text-danger">
                  <h4>Executive Member</h4>
                </div>
                <div sm className=" text-danger">
                  <h4>2018-2021</h4>
                </div>
              </Card>
            </Col>
            <Col sm className="text-center mt-3">
              <Card sm>
                <div sm className="">
                  <h4>
                    <img src="https://img.icons8.com/color/48/000000/courage.png" alt="responsibility2" />
                  </h4>
                </div>
                <div sm className=" text-danger">
                  <h4>Leadership</h4>
                </div>
                <div sm className="text-danger">
                  <h4>Treasurer</h4>
                </div>
                <div sm className=" text-danger">
                  <h4>Department of CTPG</h4>
                </div>
                <div sm className="text-danger">
                  <h4>2019-2020</h4>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default Myrole;
