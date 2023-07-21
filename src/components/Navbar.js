import { Link } from "react-router-dom";
import "../App.css";
import call from "./images/call.png";
import email from "./images/email.png";
import logo from "./images/logo.png";
import shoping from "./images/shopping.png";
//navbar-dark bg-dark

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="header">
          <div className="header_top d_none1">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <ul className="conta_icon">
                    <li>
                      <Link to="/">
                        <img src={call} alt="/" />
                        Call us: 0126 - 922 - 0162
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="social_icon">
                    <li>
                      <Link to="/">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <div className="se_fonr1">
                    <form action="/">
                      <div className="select-box">
                        <label className="label select-box1">
                          <span className="label-desc">English</span>
                        </label>
                        <select className="select">
                          <option value="Choice 1">English</option>
                          <option value="Choice 1">Falkla</option>
                          <option value="Choice 2">Germa</option>
                          <option value="Choice 3">Neverl</option>
                        </select>
                      </div>
                    </form>
                    <span className="time_o"> Open hour: 8.00 - 18.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header_midil">
            <div className="container">
              <div className="row d_flex">
                <div className="col-md-4">
                  <ul className="conta_icon d_none1">
                    <li>
                      <Link to="/">
                        <img src={email} alt="/" /> demo@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <Link className="logo" to="/">
                    <img src={logo} alt="/" />
                  </Link>
                </div>
                <div className="col-md-4">
                  <ul className="right_icon d_none1">
                    <li>
                      <Link to="/">
                        <img src={shoping} alt="/" />
                      </Link>
                    </li>
                    <Link to="/" className="order">
                      Order Now
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarsExample04"
                      aria-controls="navbarsExample04"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarsExample04"
                    >
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                          <Link className="nav-link" to="">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="product">
                            Products
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="about">
                            About Us
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="contact">
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="col-md-4">
                  <div className="search">
                    <form action="/action_page.php">
                      <input
                        className="form_sea"
                        type="text"
                        placeholder="Search"
                        name="search"
                      />
                      <button type="submit" className="seach_icon">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </header>
    </div>
  );
};

export default Navbar;
