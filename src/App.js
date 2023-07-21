import "./App.css";
import Navbar from "./components/Navbar";
import Contactus from "./components/contact";
import About from "./components/about";
import Home from "./components/home";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/product";
const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <div className="navbarcontainer">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home key="home"></Home>}></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/contact"
            element={<Contactus key="contact" />}
          ></Route>

          <Route exact path="/about" element={<About key="about" />}></Route>
          <Route
            exact
            path="/product"
            element={<Product key="product" />}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
