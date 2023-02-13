import React, { useState } from 'react'
import './Updatestudent.css'
import Layout from '../Layout/Layout'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createStudentApi } from '../../Store/Students/useApi';

function Createstudent() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({});

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(input ){
     dispatch(createStudentApi(input,navigate))
    }
  }

 

  return (
    <Layout>
    <div className='updatestudent-main'>
            <h3>CREATE STUDENT</h3>

        <div className="update-content">
            <div className="forms">
            <form action="" onSubmit={handleSubmit}>
                <div className="left">
                <label htmlFor="">Full Name :</label>
                <input type="text" onChange={(e)=> setInput({...input, full_name : e.target.value})}/>

                <label htmlFor="">Email :</label>
                <input type="email" onChange={(e)=> setInput({...input, email : e.target.value})}/>

                <label htmlFor="">Date of Birth :</label>
                <input type="date" onChange={(e)=> setInput({...input, dob : e.target.value})}/>

                <label htmlFor="">Address :</label>
                <input type="text" onChange={(e)=> setInput({...input, address : e.target.value})}/>

                <label>Image :</label>
                <input type="file" style={{background:'none'}} onChange={(e)=> setInput({...input, image : e.target.value})}/>
                </div>
                <div className="right">
                <label htmlFor="">Designation :</label>
                <input type="text" onChange={(e)=> setInput({...input, designation : e.target.value})}/>

                <label htmlFor="">Joining Date :</label>
                <input type="date" onChange={(e)=> setInput({...input, start_date : e.target.value})}/>

                <label htmlFor="">Date of Leaving :</label>
                <input type="date" onChange={(e)=> setInput({...input, end_date : e.target.value})}/>

                <label htmlFor="">Phone number :</label>
                <input type="number" onChange={(e)=> setInput({...input, phone : e.target.value})}/>
                </div>
                <div className="buttons">
                    <button onClick={()=> navigate('/dashboard')} className='btn1'>Back</button>
                    <button type='submit' className='btn2'>Create</button>
                </div>
            </form>
            </div>
           
        </div>
        
    </div>
    </Layout>
  )
}

export default Createstudent