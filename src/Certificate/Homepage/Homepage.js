import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="main-body">
      {/* navbar-section */}

      <ul id="navbar" class="nav">
        <h2>EDISONVALLEY</h2>
        <div className="lists d-flex">
          <li class="nav-item ">
            <a class="nav-link text-white" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white">Team</a>
          </li>
        </div>
        <button type="button" class="btn btn-outline-success px-4">
          Sign in
        </button>
      </ul>

      {/* content-section */}

      <div className="contents">
        <div className="text">
          <h2>
            Maker Your Career <br />
            with EdisonValley
          </h2>
          <p>
            We are a bunch of tech enthuasiasts determined to <br />
            uplift the society utilising the latest technologies around us.
          </p>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>

        <div className="picture">
          <img src="/certificateImage/cretificate-demo.png" alt="" />
        </div>
      </div>

      {/* footer-section */}

      <div className="footer">
        <div className="first-footer">
          <h4>EDISONVALLEY</h4>
          <p>
            2020 © Edisonvalley. Design & Develop by Osperb <br /> We are a
            bunch of tech enthusiasts determined to <br /> uplift the society
            utilising the latest technologies around us
          </p>
        </div>

        <div className="second-footer">
          <div className="items">
            <h5>Resources</h5>
            <label>Privacy Policy</label>
            <label>Terms & Conditions</label>
          </div>

          <div className="items">
            <h5>Company</h5>
            <label>About Us</label>
            <label>Features</label>
          </div>

          <div className="items">
            <h5>Social Links</h5>
            
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-google"></a>
            <a href="#" className="fa fa-twitter"></a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
