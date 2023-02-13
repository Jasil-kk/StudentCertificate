import React, { useEffect, useState } from "react";
import "./CreateCourse.css";
import Layout from '../Layout/Layout'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCourseApi } from "../../Store/Courses/useApi";
import { categoryApi } from "../../Store/CourseCategory/useApi";
import {map} from 'lodash';

function CreateCourse() {

  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreate = (e) =>{
    e.preventDefault();

    if(input){
      dispatch(createCourseApi(input,navigate))
      console.log(input);
    }
  }
  

 
  const {categoryDetails} = useSelector((state)=> ({
    categoryDetails: state.categoryReducer.categoryDetails,
  }))
  console.log(categoryDetails);


  useEffect(()=>{
    dispatch(categoryApi())
  },[])

  


  return (
    <Layout>
    <div className="createcourse-main">
      <h6>CREATE COURSE</h6>

      <div className="create-content">
        <form action="" onSubmit={handleCreate}>
          <label htmlFor="">Course Name :</label>
          <input type="text" placeholder="Enter a course" name="course_name" onChange={(e)=> setInput({...input,course_name : e.target.value})}/>

          <label htmlFor="">Duration :</label>
          <input type="text" placeholder="Enter a duration" name="duration" onChange={(e)=> setInput({...input,duration : e.target.value})}/>

          <label htmlFor="">Course Category :</label>
           <select className="selector" name="course_category" onChange={(e)=> setInput({...input,course_category : e.target.value})}>
            {map(categoryDetails.results,(item)=>(
              <option value={item.id}>{item.course_category_name}</option>
            ))}
            
           </select>

          <div className="buttons">
               <button onClick={()=> navigate('/dashboard')} className="btn1">Back</button>
                <button type="submit" className="btn2">Create</button>
          </div>
        </form>
       
      </div>
    </div>
    </Layout>
  );
}

export default CreateCourse;
