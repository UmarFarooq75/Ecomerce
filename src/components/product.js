import React from "react";

import shoes1 from "./images/shoes1.png";
import shoes2 from "./images/shoes2.png";
import shoes3 from "./images/shoes3.png";
import shoes4 from "./images/shoes4.png";
import shoes5 from "./images/shoes5.png";
import tisat1 from "./images/tisat1.png";
import tisat2 from "./images/tisat2.png";
import tisat3 from "./images/tisat3.png";
import tisat4 from "./images/tisat4.png";
import tisat5 from "./images/tisat5.png";
import mix1 from "./images/mix1.png";
import mix2 from "./images/mix2.png";
import mix3 from "./images/mix3.png";
import mix4 from "./images/mix4.png";
import mix5 from "./images/mix5.png";

export default function product() {
  return (
    <div>
      <div id="project" className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Featured Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product_main">
              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src={shoes1} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src={shoes2} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={shoes3} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={shoes4} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={shoes5} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src={tisat1} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src={tisat2} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={tisat3} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={tisat4} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={tisat5} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src={mix1} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src={mix2} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={mix3} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={mix4} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={mix5} alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="col-md-12">
                <button className="read_more" href="/">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
