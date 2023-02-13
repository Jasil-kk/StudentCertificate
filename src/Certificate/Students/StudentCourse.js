import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { studentcourseCreateApi, studentsApi, studentViewApi } from "../../Store/Students/useApi";
import { courseApi } from "../../Store/Courses/useApi"
import Layout from "../Layout/Layout";
import "./StudentCourse.css";
import { map } from "lodash"

function StudentCourse() {

  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams()


  const handleCreate = (e) => {
    e.preventDefault();

    if(input) {
      dispatch(studentcourseCreateApi( input, navigate,params.id))
    }
  }

  const {allStudent,courseDetails} = useSelector((state)=>({
    allStudent : state.studentsReducer.allStudent,
    courseDetails: state.courseReducer.courseDetails
  }))
 console.log(allStudent);
 console.log(courseDetails);

  useEffect(()=>{
    dispatch(studentsApi());
  },[dispatch])

  useEffect(()=>{
    dispatch(courseApi());
  },[dispatch])



  return (
    <Layout>
      <div className="studentCourse-body">
        <div className="studentCourse-content">
          <h3>Student Course</h3>
          <form action="" onSubmit={handleCreate}>
            <label htmlFor="">Student :</label>
            <select onChange={(e)=> setInput({...input, student : e.target.value})}>
              {map(allStudent.results,(item)=>(
              <option value={item.id}> {item.full_name}</option>
              ))}
            </select>
            <label htmlFor="">Course :</label>
            <select id="course"  onChange={(e)=> setInput({...input, course : e.target.value})}>
              {map(courseDetails.results,(item)=>(
              <option value={item.id}>{item.course_name}</option>
              ))}
            </select>
            <label htmlFor="">Progress :</label>
            <input type="text" onChange={(e)=> setInput({...input, progress : e.target.value})}/>
            <div className="buttons">
              <Link to={'/studentview/:id'}>
              <button style={{background:'rgb(246, 225, 197)', color:'black'}}>Back</button>
              </Link>
              <button type="submit" style={{background:'green', color:'white'}}>Create</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default StudentCourse;
