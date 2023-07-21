import React from "react";
import shoes from "./images/shoes.png";
import underwear from "./images/underwear.png";
import pent from "./images/pent.png";
import t_shart from "./images/t_shart.png";
import jakit from "./images/jakit.png";
import helbet from "./images/helbet.png";
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
import fashion from "./images/fashion.jpg";
import ban_img from "./images/ban_img.png";
import Background from "./images/banner.jpg";
export default function home() {
  return (
    <div className="mainhome">
      <section
        className="banner_main"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="text-bg">
                <h1>
                  <span className="blodark"> Romofyi </span> <br />
                  Trands 2022
                </h1>
                <p>A huge fashion collection for ever </p>
                <button className="read_more" href="/">
                  Shop now
                </button>
              </div>
            </div>
            <div className="col-md-2">
              <div className="ban_img">
                <figure>
                  <img src={ban_img} alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="six_box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-sm-4 pa_left">
              <div className="six_probpx yellow_bg">
                <i>
                  <img src={shoes} alt="#" />
                </i>
                <span>Shoes</span>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 pa_left">
              <div className="six_probpx bluedark_bg">
                <i>
                  <img src={underwear} alt="#" />
                </i>
                <span>underwear</span>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 pa_left">
              <div className="six_probpx yellow_bg">
                <i>
                  <img src={pent} alt="#" />
                </i>
                <span>Pante & socks</span>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 pa_left">
              <div className="six_probpx bluedark_bg">
                <i>
                  <img src={t_shart} alt="#" />
                </i>
                <span>T-shirt & tankstop</span>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 pa_left">
              <div className="six_probpx yellow_bg">
                <i>
                  <img src={jakit} alt="#" />
                </i>
                <span>cardigans & jumpers</span>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 pa_left">
              <div className="six_probpx bluedark_bg">
                <i>
                  <img src={helbet} alt="#" />
                </i>
                <span>Top & hat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="project" className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Featured Products</h2>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="product_main">
              <div className="project_box ">
                <div className="dark_white_bg ">
                  <img src={shoes1} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src={shoes2} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={shoes3} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={shoes4} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={shoes5} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src={tisat1} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src={tisat2} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={tisat3} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={tisat4} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={tisat5} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src={mix1} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src={mix2} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={mix3} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={mix4} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
              </div>

              <div className="project_box">
                <div className="dark_white_bg">
                  <img src={mix5} alt="#" />
                </div>
                <a href="/">Short Openwork Cardigan $120.00</a>
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
      <div className="fashion">
        <img src={fashion} alt="#" />
      </div>
    </div>
  );
}
