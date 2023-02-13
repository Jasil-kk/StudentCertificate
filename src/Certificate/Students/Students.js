import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import studentsReducer from '../../Store/Students/reducer'
import { studentsApi } from '../../Store/Students/useApi'
import Layout from '../Layout/Layout'
import {map} from "lodash"
import './Students.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Students() {
    
    const dispatch = useDispatch();
 

    const {allStudent,loading} = useSelector((state)=>({
        allStudent:state.studentsReducer.allStudent,
        loading: state.studentsReducer.loading,
    }))
        console.log(allStudent.results);

    useEffect(()=>{
        dispatch(studentsApi());
    },[]);

const studentTable = allStudent.results

  return (
    <Layout>
    <div className='students-main'>
        <h6>STUDENTS</h6>
        <div className="table">
            <table style={{width:"100%"}}><thead>
                <tr>
                    {/* <th>ID</th> */}
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Joining Date</th>
                    <th>Resigning Date</th>
                    <th>DOB</th>
                    <th>Designation</th>
                    <th>Photo</th>
                    <th>Action</th>
                </tr>
                </thead>
                {map(studentTable,(student,index)=>(
                    <tbody key={index+1}>
                    <tr >
                    {/* <td>1</td> */}
                    <td>{student.full_name}</td>
                    <td>{student.phone}</td>
                    <td>{student.email}</td>
                    <td>{student.address}</td>
                    <td>{student.start_date}</td>
                    <td>{student.end_date}</td>
                    <td>{student.dob}</td>
                    <td>{student.designation}</td>
                    <td>{student.image}</td>
                    <td><Link to={(`/studentview/${student.id}`)}><button >View</button></Link></td>
                    </tr></tbody>

                ))
                }
               
                
                
            </table>
        </div>
    </div>
    </Layout>
  )
}

export default Students