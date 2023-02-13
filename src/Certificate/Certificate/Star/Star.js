import React from "react";
import border from "../../Certificate/Certificate/certificateBorder.png";
import "./Star.css";
import ReactStars from "react-rating-stars-component";

function Star() {

const printer = ()=> {
  window.print()
}


  return (
    <div className="star-body">
      <div className="star-content">
        <div className="star" style={{ backgroundImage: `url(${border})` }}>
          <div className="text">
            <h2>Score Card</h2>
            <h5>(Based on Practices and Assessments)</h5>
            <h1>Web Application Developer</h1>
          </div>
          <div className="lists">
            <div className="items">
              <h5>HTML</h5>
              <span className="rating">
                <ReactStars size={42}/>
              </span>
            </div>
            <div className="items">
              <h5>CSS</h5>
              <span className="rating">
                <ReactStars size={42}/>
              </span>
            </div>
            <div className="items">
              <h5>Git & Gitlab</h5>
              <span className="rating">
                <ReactStars size={42}/>
              </span>
            </div>
            <div className="items">
              <h5>JavaScript</h5>
              <span className="rating">
                <ReactStars size={42}/>
              </span>
            </div>
            <div className="items">
              <h5>JQuery</h5>
              <span className="rating">
                <ReactStars size={42}/>
              </span>
            </div>
            <div className="items">
              <h5>Bootstrap</h5>
              <span className="rating">
                <ReactStars size={42}/>
              </span>
            </div>
            <div className="items">
              <h5>SASS</h5>
              <span className="rating">
                <ReactStars size={42}/>
              </span>
            </div>
            <div className="items">
              <h5>React js</h5>
              <span className="rating">
                <ReactStars size={42}/>
              </span>
            </div>
          </div>
          <button onClick={printer} className="cert-btn">Download Certificate</button>
        </div>
      </div>
    </div>
  );
}

export default Star;
