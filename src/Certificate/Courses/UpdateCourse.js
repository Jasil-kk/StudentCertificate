import React, { useEffect, useState } from "react";
import "./CreateCourse.css";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {map} from "lodash";
import { categoryApi } from "../../Store/CourseCategory/useApi";
import { updateCourseApi } from "../../Store/Courses/useApi";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCourse() {

  const [input, setInput] = useState();
  const dispach = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  console.log(input);

  const handleUpdate = (e) => {
    e.preventDefault();
    if(input){
      dispach(updateCourseApi(params.id,input,navigate));
    }
  }



const {categoryDetails} = useSelector((state)=> ({
  categoryDetails: state.categoryReducer.categoryDetails,
}))
useEffect(()=>{
  dispach(categoryApi())
},[dispach])



  return (
    <Layout>
      <div className="createcourse-main">
        <h6>UPDATE COURSE</h6>

        <div className="create-content">
          <form action="" onSubmit={handleUpdate}>
            <label htmlFor="">Course Name :</label>
            <input type="text" name="course_name" placeholder="Enter a course" onChange={(e)=> setInput({...input,course_name : e.target.value})}/>

            <label htmlFor="">Duration :</label>
            <input type="text" name="duration"  placeholder="Enter a duration" onChange={(e)=> setInput({...input,duration : e.target.value})}/>

            <label htmlFor="">Course Category :</label>
            <select name="course_category" className="selector" onChange={(e)=> setInput({...input,course_category : e.target.value})}>
            {map(categoryDetails?.results,(item)=>(
              <option value={item.id}>{item.course_category_name}</option>
            ))}
           </select>
            <div className="buttons">
              <button className="btn1">Back</button>
              <button type="submit" className="btn2">Update</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default UpdateCourse;
