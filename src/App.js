import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseCategories from './Certificate/CourseCategory/CourseCategories';
import CreateCourseCategory from './Certificate/CourseCategory/CreateCourseCategory';
import UpdateCourseCategory from './Certificate/CourseCategory/UpdateCourseCategory';
import StudentView from './Certificate/Students/StudentView';
import Courses from './Certificate/Courses/Courses';
import CreateCourse from './Certificate/Courses/CreateCourse';
import UpdateCourse from './Certificate/Courses/UpdateCourse';
import Dashboard from './Certificate/Dashboard/Dashboard';
import Students from './Certificate/Students/Students';
import Updatestudent from './Certificate/Students/Updatestudent';
import Createstudent from './Certificate/Students/Createstudent';
import Home from './Certificate/Homepage/Homepage'
import Login from './Certificate/Loginpage/Login'
import { BrowserRouter as Router, Route, Routes } from  'react-router-dom'
import CourseView from './Certificate/Courses/CourseView';
import CreateCourseView from './Certificate/CourseCategory/CourseCategoryView';
import StudentCourse from './Certificate/Students/StudentCourse';
import CertificatePage from './Certificate/Certificate/CertificatePage';



function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/updatestudent/:id' element={<Updatestudent/>}/>
          <Route path='/createstudent' element={<Createstudent/>}/>
          <Route path='/studentview/:id' element={<StudentView/>}/>
          <Route path='/studentCourse/:id' element={<StudentCourse/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/createcourse' element={<CreateCourse/>}/>
          <Route path='/courseview/:id' element={<CourseView/>}/>
          <Route path='/updatecourse/:id' element={<UpdateCourse/>}/>
          <Route path='/coursecategories' element={<CourseCategories/>}/>
          <Route path='/createcoursecategory' element={<CreateCourseCategory/>}/>
          <Route path='/coursecategoryview/:id' element={<CreateCourseView/>}/>
          <Route path='/updatecoursecategory/:id' element={<UpdateCourseCategory/>}/>
          <Route path='/certificate' element={<CertificatePage/>} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
