import React from "react";
function Main() {
  return (
    <div className="">
      <center>
      <div class="d-flex justify-content-center mt-5" data-aos="fade-left">
        <img src="vidhu.jpg" width="150" height="150" className="profile" alt="vidhya"/>
      </div>
        
      </center>

      <div className="px-5 py-2 name text-center">
        <b
          className="
         text-white"
        >
          Vidhya E N
        </b>
      </div>
      <div className="px-1 py-2 name text-center">
        <b
          className="
         text-white justify-content-center"
        >
          Front-end developer
        </b>
      </div>

      <div className="px-5 py-3 container text-center">
        <img
          src="https://img.icons8.com/emoji/48/000000/envelope-with-arrow.png"
          alt="email"
          width="30px"
          height="30px"
        />
        <b
          className="
         text-white px-3 py-2"
        >
          envidhya99@gmail.com
        </b>

        <a
          href="https://www.linkedin.com/in/vidhya-e-n-2585131b9/"
          className="text-white btn "
          target="_blank"
          rel="noreferrer"
          text="linkedin"
        >
          <h4
            className="
         text-white"
          >
            <b>Linkedin</b>
          </h4>
        </a>
        <a
          href="https://github.com/vidhyaen"
          className="text-white btn "
          target="_blank"
          rel="noreferrer"
          text="linkedin"
        >
          <h4
            className="
         text-white"
          >
            <b>Github</b>
          </h4>
        </a>

        <div></div>
      </div>
    </div>
  );
}

export default Main;
