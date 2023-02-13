import React, { useEffect, useState } from 'react'
import './Updatestudent.css'
import Layout from '../Layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { studentUpdateApi, studentViewApi } from '../../Store/Students/useApi';

function Updatestudent() {

  const [input, setInput] = useState({});
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const params = useParams();
 
const {studentUpdate}= useSelector((state)=>({
  studentUpdate: state.studentsReducer.studentUpdate,
}))
const handleSubmit=(e)=>{
  e.preventDefault();
  if (input) {
 dispatch(studentUpdateApi(input,params.id,navigate))
}
}
useEffect(()=>{
  dispatch(studentViewApi());
},[])


  return (
    <Layout>
    <div className='updatestudent-main'>
            <h3>UPDATE STUDENT</h3>

        <div className="update-content">
            <div className="forms">
            <form action="" onSubmit={handleSubmit}>
                <div className="left">
                <label htmlFor="">Full Name :</label>
                <input type="text"  onChange={(e)=> setInput({...input, full_name : e.target.value})}/>

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
                <input type="text"   onChange={(e)=> setInput({...input, designation : e.target.value})}/>

                <label htmlFor="">Joining Date :</label>
                <input type="date"  onChange={(e)=> setInput({...input, start_date : e.target.value})}/>

                <label htmlFor="">Date of Leaving :</label>
                <input type="date"  onChange={(e)=> setInput({...input, end_date : e.target.value})}/>

                <label htmlFor="">Phone number :</label>
                <input type="number"  onChange={(e)=> setInput({...input, phone : e.target.value})}/>
                </div>
                <div className="buttons">
                  <Link to={'/students'}>
                     <button className='btn1'>Back</button>
                     </Link>
                      <button type='submit' className='btn2'>Update</button>
                </div>
            </form>
            </div>
         
        </div>
        
    </div>
    </Layout>
  )
}

export default Updatestudent