import React from "react";
import { Card } from "react-bootstrap";

function Project() {
  return (
    <div>
      <div data-aos="fade-down-right">
        <h1 className="text-white py-3">Projects</h1>
        <div className="row mx-2 mt-3">
          <div className="col-12 col-md-4 text-center py-3 transparent">
            <Card>
              <div className="text-center">
                <h5 class="text-center card2" style={{ color: "red" }}>
                  <b> Chemi product</b>
                </h5>
              </div>
              <div className=" text-danger">
                <h5 class="text-center card2" style={{ color: "blue" }}>
                  Html,W3-css,Js
                </h5>
              </div>
              <div className=" text-danger">
                <h5 class="text-center card2" style={{ color: "blue" }}>
                  php,MySql
                </h5>
              </div>
              <div className=" text-danger">
                <a
                  href="https://github.com/vidhyaen/chemiproduct"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary mb-3"
                >
                  {" "}
                  Github
                </a>
              </div>
            </Card>
          </div>
          <div className="col-12 col-md-4 text-center my-3 transparent">
            <Card>
              <div className="text-center">
                <h5 class="text-center card2" style={{ color: "red" }}>
                  <b>Luxury boutique</b>
                </h5>
              </div>
              <div className=" text-danger">
                <h5 class="text-center card2" style={{ color: "blue" }}>
                  Html,CSS,Bootstrap
                </h5>
              </div>
              <div className=" text-danger">
                <h5 class="text-center card2" style={{ color: "blue" }}>
                  Laravel,MySql
                </h5>
              </div>
              <div className=" text-danger mb-3">
                <a
                  href="https://github.com/vidhyaen/luxury-boutique"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  {" "}
                  Github
                </a>
              </div>
            </Card>
          </div>

          <div className="text-center col-12 col-md-4 my-3 transparent">
            <Card>
              <div className="text-center">
                <h5 class="text-center card2" style={{ color: "red" }}>
                  <b>
                    Consumer product preference prediction towards online
                    shopping
                  </b>
                </h5>
              </div>
              <div className=" text-danger">
                <h5 class="text-center card2" style={{ color: "blue" }}>
                  IOP paper Publish
                </h5>
              </div>
              <div className=" text-danger ">
                <a
                  href="https://iopscience.iop.org/article/10.1088/1757-899X/1055/1/012092/meta"
                  className=" text-dark text-white mb-4 btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Paper link
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="mx-2 mt-3 row">
          <div className="text-center my-3 col-12 col-md-4 transparent">
            <Card>
              <div className="text-center">
                <h5 class="text-center card2" style={{ color: "red" }}>
                  <b>Spin wheel game</b>
                </h5>
              </div>
              <div className=" text-danger">
                <h5 class="text-center card2" style={{ color: "blue" }}>
                  Html,CSS,JS
                </h5>
              </div>
              <div className=" text-danger">
                <a
                  href="https://vidhyaenspinwheel.000webhostapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary mb-2"
                >
                  {" "}
                  Project link
                </a>
              </div>
            </Card>
          </div>
          <div className="text-center col-12 col-md-4 my-3 transparent">
            <Card>
              <div className="text-center">
                <h5 class="text-center card2" style={{ color: "red" }}>
                  <b> Pokemon Api</b>
                </h5>
              </div>
              <div className=" text-danger">
                <h5 class="text-center card2" style={{ color: "blue" }}>
                  React js
                </h5>
              </div>
              <div className=" text-danger">
                <a
                  href="https://pokemon-vidhya.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary float-right mb-3"
                >
                  {" "}
                  Project link
                </a>
              </div>
            </Card>
          </div>
      
        </div>
      </div>
    </div>
  );
}
<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
</style>;

export default Project;
