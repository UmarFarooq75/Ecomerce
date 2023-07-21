import React from "react";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="inror_box">
                  <h3>INFORMATION </h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="inror_box">
                  <h3>MY ACCOUNT </h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="inror_box">
                  <Link className="nav-link" to="about">
                    <h3>About Us</h3>
                  </Link>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="inror_box">
                  <Link className="nav-link" to="contact">
                    <h3>Contact Us</h3>
                  </Link>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    © 2019 All Rights Reserved. Design by
                    <a href="/"> Umar Farooq</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
