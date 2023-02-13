import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { studentViewApi } from '../../../Store/Students/useApi';
import border from "../../Certificate/Certificate/certificateBorder.png"
import "./Certificate.css"

function Certificate() {

const dispatch = useDispatch();

const {studentView} =useSelector((state) => ({
  studentView: state.studentsReducer.studentView
}))

console.log(studentView);
useEffect(()=>{
  dispatch(studentViewApi())
},[dispatch])


  return (
    <div className='certificate-body'>
        <div className="certificate-content">
            <div className="certificate" style={{backgroundImage:`url(${border})`}}>
                <div className="text">
                <h1>Certificate</h1>
                <h3>Of Experience</h3>
                <h5>This verify that</h5>
                <p><span className='span'>{studentView.full_name}</span> was employed at  <strong> Xanthron e-solutions </strong>as a <strong>{studentView.designation}</strong>, <br /> from <strong>{studentView.start_date}</strong> to <strong>{studentView.end_date}</strong> , while showcasing a proffesional <br /> commandable work attitude throughout the specified time period. <br /> We wish all the best in his/her future endavord.</p>
                <h6>Ceo</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate