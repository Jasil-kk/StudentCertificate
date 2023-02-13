import { axiosApi } from "../AxiosMethod";
import {
  studentsRequest,
  studentsSuccess,
  studentsFail,
  createstudentRequest,
  createstudentSuccess,
  createstudentFail,
  studentviewRequest,
  studentviewSuccess,
  studentviewFail,
  studentdeleteRequest,
  studentdeleteSuccess,
  studentdeleteFail,
  studentupdateRequest,
  studentupdateSuccess,
  studentupdateFail,
  studentcourseRequest,
  studentcourseSuccess,
  studentcourseFail,
  studentcoursecreateRequest,
  studentcoursecreateSuccess,
  studentcoursecreateFail,
  studentCourseDeleteRequest,
  studentCourseDeleteSuccess,
  studentCourseDeleteFail
} from "./action";

//student

export const studentsApi = () => {
  return async (dispatch) => {
    dispatch(studentsRequest());

    try {
      const details = await axiosApi.get(`/student/student/`);
      // const details = await axiosApi.get(`/api/students/`);
      console.log(details);
      dispatch(studentsSuccess(details.data));
    } catch (error) {
      console.log(error);
      dispatch(studentsFail(error?.response?.data));
    }
  };
};

//createStudent

export const createStudentApi = (input, navigate) => {
  return async (dispatch) => {
    dispatch(createstudentRequest());
    try {
      const studentDetails = await axiosApi.post(`/student/student/`, input);
      // const studentDetails = await axiosApi.post(`/api/students/`, input);
      console.log(studentDetails);
      dispatch(createstudentSuccess(studentDetails.data));
      navigate("/students");
    } catch (error) {
      console.log(error);
      dispatch(createstudentFail(error?.response?.data));
    }
  };
};

//studentView

export const studentViewApi = (studentId) => {
  return async (dispatch) => {
    dispatch(studentviewRequest());
    try {
      const studentView = await axiosApi.get(`/student/student/${studentId}`);
      // const studentView = await axiosApi.get(`/api/students/${studentId}`);
      console.log(studentView);
      dispatch(studentviewSuccess(studentView.data));
    } catch (error) {
      console.log(error);
      dispatch(studentviewFail(error?.response?.data));
    }
  };
};

// studentDelete

export const studentDeleteApi = (studentId, navigate) => {
  return async (dispatch) => {
    dispatch(studentdeleteRequest());
    try {
      const studentDelete= await axiosApi.delete(`/student/student/${studentId}`);
      // const studentDelete = await axiosApi.delete(
      //   `/api/students/${studentId}`
      // );
      console.log(studentDelete);
      dispatch(studentdeleteSuccess());
      navigate("/students");
    } catch (error) {
      console.log(error);
      dispatch(studentdeleteFail(error?.response?.data));
    }
  };
};

// studentUpdate

export const studentUpdateApi = (input,studentId,navigate) => {
  return async (dispatch) => {
    dispatch(studentupdateRequest(studentId));
    try {
      const studentUpdates = await axiosApi.put(`/student/student/${studentId}`,input);
      // const studentUpdate = await axiosApi.put(`/api/students/${studentId}/`,input);
      console.log(studentUpdates);
     
        dispatch(studentupdateSuccess(studentUpdates.data));
        navigate('/students')
      
    } catch (error) {
      console.log(error);
      dispatch(studentupdateFail(error?.response?.data));
    }
  };
};

// studentCourseView

export const studentcourseApi = (studentCourseId) => {
  return async (dispatch) => {
    dispatch(studentcourseRequest());
    try {
      const studentCourse = await axiosApi.get(`/student/student_course/${studentCourseId}`)
      console.log(studentCourse);
      dispatch(studentcourseSuccess(studentCourse.data));
    }
    catch (error) {
      console.log(error);
      dispatch(studentcourseFail(error?.response?.data));
    }
  }
}

// studentCourseCreate

export const studentcourseCreateApi = (input,navigate,id) => {
  return async (dispatch) => {
    dispatch(studentcoursecreateRequest());
    try {
      const createCourse = await axiosApi.post(`/student/student_course/`,input)
      console.log(createCourse);
      dispatch(studentcoursecreateSuccess(createCourse.data));
      navigate(`/studentview/${id}`)
    }
    catch (error) {
      console.log(error);
      dispatch(studentcoursecreateFail(error?.response?.data));
    }
  }
}

// studentCourseDelete

export const studentCourseDeleteApi = (studentCourseId) => {
  return async (dispatch) => {
    dispatch(studentCourseDeleteRequest(studentCourseId));
    try {
      const deleteCourse = await axiosApi.delete(`/student/student_course/${studentCourseId}`);
      console.log(deleteCourse);
      dispatch(studentCourseDeleteSuccess());
    }
    catch (error){
      console.log(error);
      dispatch(studentCourseDeleteFail(error?.response?.data));
    }
  }
}
