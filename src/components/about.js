import React from "react";

export default function about() {
  return (
    <div className="aboutMain">
      <div class="blue_bg">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="about_text">
                <h3>The standard Lorem Ipsum </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="read_more" href="/">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-md-7">
              <div className="about_img">
                <figure>
                  <img src="/" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
