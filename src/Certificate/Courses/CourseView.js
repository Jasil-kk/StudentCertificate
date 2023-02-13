import React, { useEffect } from "react";
import "./CourseView.css";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { courseViewApi, deleteCourseApi } from "../../Store/Courses/useApi";

const CourseView = () => {

  const dispach = useDispatch();
  const params = useParams();
  const navgate = useNavigate();

  const {courseView,loading} = useSelector((state)=> ({
    courseView: state.courseReducer.courseView,
    loading: state.courseReducer.loading,
  }));
  console.log(courseView);
   
  useEffect(()=>{
    dispach(courseViewApi(params.id));
  },[dispach]);

  const handleDelete = () => {
    dispach(deleteCourseApi(params.id,navgate));
  }


  return (
    <Layout>
      <div className="view-main">
        <h3>COURSE VIEW</h3>

        <div className="view-content">
          <div className="content-text">
            <div className="texts">
              <h4>Course Name : </h4>
              <p>{courseView.course_name}</p>
            </div>
            <div className="texts">
              <h4>Duration : </h4>
              <p>{courseView.duration}</p>
            </div>
            <div className="texts">
              <h4>Course Category : </h4>
              <p>{courseView?.course_category}</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleDelete} className="btn1">Delete</button>
            <Link to={(`/updatecourse/${params.id}`)}>
               <button className="btn2">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseView;
