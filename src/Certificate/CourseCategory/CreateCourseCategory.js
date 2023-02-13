import React, { useState } from 'react'
import './CreateCourseCategory.css'
import Layout from '../Layout/Layout'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { createCategoryApi } from '../../Store/CourseCategory/useApi';

function CreateCourseCategory() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({});

  const handleSubmit = (e)=> {
    e.preventDefault();

    if(input){
      dispatch(createCategoryApi(input,navigate))
    }
  }


  return (
    <Layout>
    <div className='createcategory-main'>
        <h6>CREATE COURSE CATEGORY</h6>
        <div className="createcategry-content">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Course Category :</label>
                <input type="text" placeholder='Enter a course Category' value={input.course_category_name} onChange={(e)=> setInput({...input,course_category_name : e.target.value})}/>

                <label htmlFor="">Designation :</label>
                <input type="text" placeholder='Enter a designation' value={input.designation} onChange={(e)=> setInput({...input,designation : e.target.value})}/>

                <div className="buttons">
                    <Link to={('/dashboard')}>
                      <button className='btn1'>Back</button>
                    </Link>
                    <button type='submit' className='btn2'>Create</button>
                </div>
            </form>
           
        </div>
    </div>
    </Layout>
  )
}

export default CreateCourseCategory