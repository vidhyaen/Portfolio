import React from "react";
import { Card} from "react-bootstrap";
import { useState } from "react";

function Project() {
  const [displayproject, setproject] = useState(false);
  return (
    <div>
      <button
        onClick={() => setproject(!displayproject)}
        className="btn btn-success mt-5"
      >
        My projects
      </button>
      {displayproject && (
        <div className="row" data-aos="fade-down-right">
          <div className="col-12 col-md-2"></div>

          <div className="col-12 col-md-10  text-dark">
            <Card
              style={{ alignItems: "center", backgroundColor: "" }}
              className="mt-5 md sm"
            >
              <h1 className="text-dark">Projects</h1>
              <h5 class="text-center card2" style={{ color: "red" }}>
                <b> Chemi product</b>
              </h5>

              <h5 class="text-center card2" style={{ color: "blue" }}>
                Front end: Html,W3-css,Js
              </h5>
              <h5 class="text-center card2" style={{ color: "blue" }}>
                Back end: php,mysql
              </h5>
              <h5 class="text-center card2" style={{ color: "red" }}>
                <b> Luxury botique website</b>
              </h5>

              <h5 class="text-center card2" style={{ color: "blue" }}>
                Front end: Html,Css
              </h5>

              <h5 class="text-center card2" style={{ color: "blue" }}>
                Front end:bootstrap,Js
              </h5>
              <h5 class="text-center card2" style={{ color: "blue" }}>
                Back end: laravel,MySql
              </h5>
              <h5 class="text-center card2" style={{ color: "red" }}>
                <b> Pokieman Api</b>
              </h5>

              <h5 class="text-center card2" style={{ color: "blue" }}>
                Front end:React js
                <a href="https://pokemon-vidhya.netlify.app/" target="_blank" rel="noreferrer">
                  {" "}
                  click here
                </a>
              </h5>
              <h5 class="text-center card2" style={{ color: "red" }}>
                <b>
                  Consumer product preference prediction towards online shopping
                </b>
              </h5>

              <h5 class="text-center card2" style={{ color: "blue" }}>
                Paper published in Iop conference
                <a
                  href="https://iopscience.iop.org/article/10.1088/1757-899X/1055/1/012092/meta"
                  className=" text-dark mx-3 text-dark mb-3"
                  target="_blank" rel="noreferrer"
                >
                  link
                </a>
              </h5>
              <h5 class="text-center card2" style={{ color: "red" }}>
                <b> Portfolio management</b>
              </h5>

              <h5 class="text-center card2" style={{ color: "blue" }}>
                Front end:React js ,json server
              </h5>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
</style>;

export default Project;
