import React, { useEffect } from "react";
import "./StudentView.css";
import { BiMapPin } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdEmail, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import { HiPlus } from "react-icons/hi";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  studentcourseApi,
  studentCourseDeleteApi,
  studentDeleteApi,
  studentViewApi,
} from "../../Store/Students/useApi";
import { map } from "lodash";

function StudentView() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { studentView, loading, studentCourse } = useSelector((state) => ({
    studentView: state.studentsReducer.studentView,
    loading: state.studentsReducer.loading,
    // studentCourse: state.studentsReducer.studentCourse
  }));
  // console.log(studentView);
  // console.log(studentCourse);

  useEffect(() => {
    dispatch(studentViewApi(params.id));
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(studentDeleteApi(params.id, navigate));
  };
  // useEffect(()=>{
  //   dispatch(studentcourseApi(params.id));
  // },[dispatch])

  const course = studentView?.student_courses;

  const courseDelete = () => {
    dispatch(studentCourseDeleteApi(params.id));
  };

  return (
    <Layout>
      <div className="view-main">
        <h4>STUDENT VIEW</h4>
        <div className="contentcard">
          <div className="first">
            <h5>{studentView.full_name}</h5>
            <p>{studentView.dob}</p>
            <div className="one">
              <div className="one-content">
                <span>
                  <BiMapPin />
                </span>
                <p>
                  {studentView.address}
                  <br />
                  Malappuram,Kerala
                </p>
              </div>
              <div className="one-content">
                <span>
                  <BsFillPersonLinesFill />
                </span>
                <p>{studentView.phone}</p>
              </div>
            </div>
            <div>
              <h6>Contact Details :</h6>
              <div className="one-content">
                <span>
                  <MdEmail />
                </span>
                <p>{studentView.email}</p>
              </div>
              <div className="one-content">
                <span>
                  <ImMobile />
                </span>
                <p>Mobile :{studentView.phone}</p>
              </div>
            </div>
          </div>
          <div className="second">
            <img
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>{studentView.designation}</span>
          </div>
          <div className="third">
            <Link to={`/updatestudent/${params.id}`}>
              <button className="btn1">Update</button>
            </Link>
            <button onClick={handleDelete} className="btn2">
              Delete
            </button>
          </div>
        </div>
        <Link to={"/certificate"}>
          <button className="cert-btn">Certificate</button>
        </Link>

        {/* StudentCourse */}

        <h4>STUDENT COURSE</h4>

        <div className="tablecard">
          <Link
            to={`/studentCourse/${params.id}`}
            style={{ textDecoration: "none" }}
          >
            <button className="create">
              {" "}
              <span>
                <HiPlus />
              </span>
              Create New Course
            </button>
          </Link>
          {map(course, (item, key) => (
            <table style={{ width: "100%" }}>
              <tr>
                <th>Course Name</th>
                <th>Category Name</th>
                <th>Designation</th>
                <th>Progress</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>{item.course.course_name}</td>
                <td>{item.course.course_category.course_category_name}</td>
                <td>{item.course.course_category.designation}</td>
                <td>{item.progress ? item.progress : "NO"}</td>
                <td>{item.course.duration}</td>
                <td>
                  {/* <button className="me-3" id="view">View Details</button> */}
                  <button onClick={courseDelete} id="del">
                    Delete
                  </button>
                </td>
              </tr>
            </table>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default StudentView;
