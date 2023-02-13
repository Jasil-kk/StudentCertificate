import React from "react";
import './Dashboard.css'
import { BsArrowRightShort,BsFilePerson } from 'react-icons/bs';
import { ImBoxAdd } from 'react-icons/im';
import { IoDocuments } from 'react-icons/io5'
import Layout from "../Layout/Layout";

function Dashboard() {
  return (
    
    <Layout>
    <div className="dashboard-main">
        <div className="dashboard-content">
        {/* first */}
      <div id="firstcard" className="card">
        <div className="">
            <div className="firsthalf">
            <h6>Welcome Back !</h6>
            <p>It will seem like simplified</p>
            <img src="https://peerless.metahos.com/static/media/profile-img.43b59e59.png" alt="" />
            </div>
            <div className="image">
            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>
            <div className="secondhalf">
                <div className="first">
                    <h6>Jasil</h6>
                    <span>React Developer</span>
                </div>
                <div className="second">
                    <h6>125</h6>
                    <span>Projects</span>
                    <button>View Profile <BsArrowRightShort/></button>
                </div>
                <div className="second">
                    <h6>$1254</h6>
                    <span>Revenue</span>
                </div>
            </div>
        </div>
      </div>

{/* second */}

      <div className="secondcard">
        <div className="groupcards">
            <h6>Available Courses</h6>
            <p>3</p>
            <div className="icon"><ImBoxAdd/></div>
        </div>
        <div className="groupcards">
            <h6>Course Completed Students</h6>
            <p>7</p>
            <div className="icon"><BsFilePerson/></div>
        </div>
        <div className="groupcards">
            <h6>Total Students</h6>
            <p>10</p>
            <div className="icon"><IoDocuments/></div>
        </div>
        <div className="groupcards">
            <h6>Total Students</h6>
            <p>10</p>
            <div className="icon"><IoDocuments/></div>
        </div>
      </div>

      </div>
    </div>
    </Layout>
  );
}

export default Dashboard;
