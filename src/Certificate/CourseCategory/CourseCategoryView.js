import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { categoryViewApi, deleteCategoryApi } from "../../Store/CourseCategory/useApi";
import "../Courses/CourseView.css";
import Layout from "../Layout/Layout";

const CreateCourseView = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const {categoryView,loading} = useSelector((state)=> ({
    categoryView: state.categoryReducer.categoryView,
    loading: state.categoryReducer.loading
  }));
  console.log(categoryView,"cat");

  useEffect(() => {
    dispatch(categoryViewApi(params.id))
  },[dispatch])

  const handleDelete = () => {
    dispatch(deleteCategoryApi(params.id,navigate))
  }
  



  return (
    <Layout>
      <div className="view-main">
        <h3>CREATE COURSE VIEW</h3>

        <div className="view-content">
          <div className="content-text" >
            <div className="texts">
              <h4>Course Category Name : </h4>
              <p>{categoryView.course_category_name}</p>
            </div>
            <div className="texts" >
              <h4>Designation : </h4>
              <p>{categoryView.designation}</p>
            </div>
         
          </div>
          <div className="buttons">
            <button onClick={handleDelete} className="btn1">Delete</button>
            <Link to={(`/updatecoursecategory/${params.id}`)}>
            <button className="btn2">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCourseView;
