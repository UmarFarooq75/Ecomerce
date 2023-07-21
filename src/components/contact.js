import React from "react";

export default function contactus() {
  return (
    <div className="contactusMain ">
      <div class="blue_bg">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="con_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <form id="request" className="main_form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Name"
                        type="type"
                        name="Name"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Phone Number"
                        type="type"
                        name="Phone Number"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Email"
                        type="type"
                        name="Email"
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Address"
                        type="type"
                        name="Address"
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="contactusmess"
                        placeholder="Write something.."
                        style={{ height: "200px" }}
                      ></textarea>
                    </div>
                    <div className="col-md-12">
                      <button className="send_btn">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
