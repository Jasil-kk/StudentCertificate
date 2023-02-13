import React, { useEffect } from "react";
import "../Students/StudentView.css";
import { HiPlus } from "react-icons/hi";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri"
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { courseApi } from "../../Store/Courses/useApi";
import { map } from 'lodash'

function Courses() {

  const dispach = useDispatch();

  const {courseDetails,loading} = useSelector((state)=>({
    courseDetails: state.courseReducer.courseDetails,
    loading: state.courseReducer.loading,
  }))

  console.log(courseDetails);

  useEffect(()=>{
    dispach(courseApi());
  },[])

  const courseTable = courseDetails.results;

  return (
    <Layout>
    <div className="view-main">
      <h4>STUDENT COURSE</h4>

      <div className="tablecard">
        <button className="create">
          <span>
            <HiPlus />
          </span>
          Create New Course
        </button>
        <table style={{ width: "100%" }}>
          <tr>
            {/* <th>#</th> */}
            <th>ID</th>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Course Category</th>
            <th>Action</th>
          </tr>
         
            {map(courseTable,(course)=>(
               <tr>
            <td>
              <input type="checkbox" name="" id="" />
            </td>
            {/* <td>1</td> */}
            <td>{course.course_name}</td>
            <td>{course.duration}</td>
            <td>{course.course_category}</td>
            <td>
              <Link to={(`/courseview/${course.id}`)}>
                <button style={{width:'70px',height:'28px',color:'white',background:'green',border:'none',borderRadius:'8px'}}>View</button>
              </Link>
            </td>
            </tr>
            ))}
         
        </table>
      </div>
    </div>
    </Layout>
  );
}

export default Courses;
