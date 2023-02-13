import React, { useState } from 'react'
import './CreateCourseCategory.css'
import Layout from '../Layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { updateCategoryApi } from '../../Store/CourseCategory/useApi';
import { useNavigate, useParams } from 'react-router-dom';
                                                     
function UpdateCourseCategory() {

  const [input, setInput] = useState({});  
  console.log(input);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const {updateCategory,loading} = useSelector ((state)=> ({
    updateCategory: state.categoryReducer.updateCategory,
    loading: state.categoryReducer.loading,
  }))

  const handleUpdate = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(updateCategoryApi(params.id, input, navigate));
    }
  }


  return (
    <Layout>
    <div className='createcategory-main'>
        <h6>UPDATE COURSE CATEGORY</h6>
        <div className="createcategry-content">
            <form action="" onSubmit={handleUpdate}>
                <label htmlFor="">Course Category :</label>
                <input type="text" name='course_category_name' value={input.course_category_name} placeholder='Enter a course Category' onChange={(e)=> setInput({...input,course_category_name : e.target.value})}/>

                <label htmlFor="">Designation :</label>
                <input type="text" name='designation' value={input.designation} placeholder='Enter a designation'onChange={(e)=> setInput({...input,designation : e.target.value})}/>

                <div className="buttons">
                <button className='btn1'>Back</button>
                <button type='submit' className='btn2'>Update</button>
            </div>
            </form>
            
        </div>
    </div>
    </Layout>
  )
}

export default UpdateCourseCategory