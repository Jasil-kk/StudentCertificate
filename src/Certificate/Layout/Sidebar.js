import React, { useState } from "react";
import "./Sidebar.css";
import { BiHomeCircle, BiStore } from "react-icons/bi";
import { BsPersonCircle, BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpene, setIsOpene] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
 

  return (
  
      <div className="sidebar">
        <div className="first-list">
          <span>
            <BiHomeCircle />
          </span>
          <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
            <h6>Dashboard</h6>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)}>
          <span>
            <BsPersonCircle />
          </span>
          Students
          <span className="downIcon">
            <IoMdArrowDropdown />
          </span>
        </button>
        {isOpen && (
          <ul>
            <Link to={"/students"} style={{ textDecoration: "none" }}>
              <li>All Students</li>
            </Link>
            <Link to={"/createstudent"} style={{ textDecoration: "none" }}>
              <li>Create Students</li>
            </Link>
          </ul>
        )}

        <button onClick={() => setIsOpene(!isOpene)}>
          <span>
            <BiStore />
          </span>
          Courses
          <span className="downIcon">
            <IoMdArrowDropdown />
          </span>
        </button>
        {isOpene && (
          <ul>
            <Link to={"/courses"} style={{ textDecoration: "none" }}>
              <li>All Courses</li>
            </Link>
            <Link to={"/createcourse"} style={{ textDecoration: "none" }}>
              <li>Create Courses</li>
            </Link>
          </ul>
        )}

        <button onClick={() => setIsOpened(!isOpened)}>
          <span>
            <BsFillPersonLinesFill />
          </span>
          Courses Category
          <span className="downIcon">
            <IoMdArrowDropdown />
          </span>
        </button>
        {isOpened && (
          <ul>
            <Link to={"/coursecategories"} style={{ textDecoration: "none" }}>
              <li>All Courses Category</li>
            </Link>
            <Link to={"/createcoursecategory"} style={{ textDecoration: "none" }}>
              <li>Create Courses Category</li>
            </Link>
          </ul>
        )}
      </div>
 
  );
};

export default Sidebar;
