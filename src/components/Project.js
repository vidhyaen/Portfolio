import React from "react";
import { Card } from "react-bootstrap";

function Project() {
  return (
    <div>
      <div data-aos="fade-down-right">
        <h1 className="text-white py-3">Projects</h1>
        <div className="row mx-2 mt-3">
          <div className="col-12 col-md-4 text-center py-3 transparent">
            <Card className="gradient">
              <div className="text-center py-2">
                <h5 class="text-center card2" style={{ color: "white" }}>
                  <b> Chemi product</b>
                </h5>
              </div>
              <div className=" text-white py-2">
                <h5 class="text-center card2">
                  Chemi product is ecommerce website. purpose of this project is
                  to know the interest of the user and sell the product to the
                  targetable customer's.
                </h5>
              </div>
              <div className=" text-white">
                <a
                  href="https://github.com/vidhyaen/chemiproduct"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img
                    src="https://img.icons8.com/material-sharp/24/000000/github.png"
                    alt="git"
                    width="40px"
                    height="40px"
                    style={{ backgroundColor: "white" }}
                  />
                </a>
              </div>
            </Card>
          </div>
          <div className="col-12 col-md-4 text-center my-3 transparent">
            <Card className="gradient">
              <div className="text-center py-1">
                <h5 class="text-center card2" style={{ color: "white" }}>
                  <b>Luxury boutique</b>
                </h5>
              </div>
              <div className=" text-white">
                <h5 class="text-center card2">
                  The main objective of this project is to predict customer
                  product preference and suggest new optional choices in the
                  portal by tracking their previous choices.
                </h5>
              </div>

              <div className=" text-white ">
                <a
                  href="https://github.com/vidhyaen/luxury-boutique"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://img.icons8.com/material-sharp/24/000000/github.png"
                    alt="git"
                    width="40px"
                    height="40px"
                    style={{ backgroundColor: "white" }}
                  />
                </a>
              </div>
            </Card>
          </div>

          <div className="text-center col-12 col-md-4 my-3 transparent">
            <Card className="gradient">
              <div className="text-center py-1">
                <h5 class="text-center card2" style={{ color: "white" }}>
                  <b>
                    Consumer product preference prediction towards online
                    shopping
                  </b>
                </h5>
              </div>
              <div className="">
                <h5 class="text-center card2">
                  Consumer product peference prediction will tracking the clicks
                  of the customer which product has a high trend and know the
                  customer choices.
                </h5>
              </div>
              <div className=" text-white ">
                <a
                  href="https://iopscience.iop.org/article/10.1088/1757-899X/1055/1/012092/meta"
                  className=" text-dark mb-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/fluent-systems-regular/48/000000/web-globe.png"
                    alt="link"
                    width="40px"
                    height="40px"
                  />
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="mx-2 mt-3 row">
          <div className="text-center my-3 col-12 col-md-4 transparent">
            <Card className="gradient">
              <div className="text-center">
                <h5 class="text-center card2" style={{ color: "white" }}>
                  <b>Spin wheel game</b>
                </h5>
              </div>
              <div className=" text-white">
                <h5 class="text-center card2">
                  It is spinwheel game designed using css and javascript
                  function.It will spilt usig clip path and tranform the degree
                  on the circle while click on the click onclick function will
                  be set by random number
                </h5>
              </div>
              <div className=" text-white">
                <a
                  href="https://vidhyaenspinwheel.000webhostapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-2"
                >
                  <img
                    src="https://img.icons8.com/fluent-systems-regular/48/000000/web-globe.png"
                    alt="link"
                  />
                </a>
              </div>
            </Card>
          </div>
          <div className="text-center col-12 col-md-4 my-3 transparent">
            <Card className="gradient">
              <div className="text-center">
                <h5 class="text-center card2" style={{ color: "white" }}>
                  <b> Pokemon Api</b>
                </h5>
              </div>
              <div className=" text-white">
                <h5 class="text-center card2">
                  In this axios is used it will hit the url of the api key and
                  feteched data using function hooks useState and
                  useEffect.Dynamic images will be load by clicking prev and
                  next button.
                </h5>
              </div>
              <div className=" text-white">
                <a
                  href="https://pokemon-vidhya.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="float-right mb-3"
                >
                  <img
                    src="https://img.icons8.com/fluent-systems-regular/48/000000/web-globe.png"
                    alt="link"
                  />
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
