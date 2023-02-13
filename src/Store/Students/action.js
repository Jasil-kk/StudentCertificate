import {
  STUDENTS_REQUEST,
  STUDENTS_SUCCESS,
  STUDENTS_FAIL,
  CREATESTUDENT_REQUEST,
  CREATESTUDENT_SUCCESS,
  CREATESTUDENT_FAIL,
  STUDENTVIEW_REQUEST,
  STUDENTVIEW_SUCCESS,
  STUDENTVIEW_FAIL,
  STUDENTDELETE_REQUEST,
  STUDENTDELETE_SUCCESS,
  STUDENTDELETE_FAIL,
  STUDENTUPDATE_REQUEST,
  STUDENTUPDATE_SUCCESS,
  STUDENTUPDATE_FAIL,
  STUDENTCOURSE_REQUEST,
  STUDENTCOURSE_SUCCESS,
  STUDENTCOURSE_FAIL,
  STUDENTCOURSECREATE_REQUEST,
  STUDENTCOURSECREATE_SUCCESS,
  STUDENTCOURSECREATE_FAIL,
  STUDENTCOURSEDELETE_REQUEST,
  STUDENTCOURSEDELETE_SUCCESS,
  STUDENTCOURSEDELETE_FAIL
} from "./actionType";

// student

export const studentsRequest = () => ({
  type: STUDENTS_REQUEST,
  payload: "",
});

export const studentsSuccess = (allStudent) => ({
  type: STUDENTS_SUCCESS,
  payload: allStudent,
});

export const studentsFail = (error) => ({
  type: STUDENTS_FAIL,
  payload: error,
});

// createStudent

export const createstudentRequest = () => ({
  type: CREATESTUDENT_REQUEST,
  payload: "",
});

export const createstudentSuccess = (studentDetails) => ({
  type: CREATESTUDENT_SUCCESS,
  payload: studentDetails,
});

export const createstudentFail = (error) => ({
  type: CREATESTUDENT_FAIL,
  payload: error,
});

// studentView

export const studentviewRequest = () => ({
  type: STUDENTVIEW_REQUEST,
  payload: "",
});

export const studentviewSuccess = (studentView) => ({
  type: STUDENTVIEW_SUCCESS,
  payload: studentView,
});

export const studentviewFail = (error) => ({
  type: STUDENTVIEW_FAIL,
  payload: error,
});

// studentDelete

export const studentdeleteRequest = () => ({
  type: STUDENTDELETE_REQUEST,
  payload: "",
});

export const studentdeleteSuccess = (studentDelete) => ({
  type: STUDENTDELETE_SUCCESS,
  payload: studentDelete,
});

export const studentdeleteFail = (error) => ({
  type: STUDENTDELETE_FAIL,
  payload: error,
});

// studentUpdate

export const studentupdateRequest = (studentId) => ({
  type: STUDENTUPDATE_REQUEST,
  payload: studentId,
});

export const studentupdateSuccess = (studentUpdate,studentId,) => ({

  type: STUDENTUPDATE_SUCCESS,
  payload: studentUpdate,studentId
});

export const studentupdateFail = (error) => ({
  type: STUDENTUPDATE_FAIL,
  payload: error,
});

// studentCourse

export const studentcourseRequest = () => ({
  type: STUDENTCOURSE_REQUEST,
  payload: "",
});

export const studentcourseSuccess = (studentCourse) => ({
  type: STUDENTCOURSE_SUCCESS,
  payload: studentCourse,
})

export const studentcourseFail = (error) => ({
  type: STUDENTCOURSE_FAIL,
  payload: error
})

// studentCourseCreate

export const studentcoursecreateRequest = ()=> ({
  type: STUDENTCOURSECREATE_REQUEST,
  payload: "",
});

export const studentcoursecreateSuccess = (createStudentCourse)=> ({
  type: STUDENTCOURSECREATE_SUCCESS,
  payload: createStudentCourse,
});

export const studentcoursecreateFail = (error)=> ({
  type: STUDENTCOURSECREATE_FAIL,
  payload: error,
});

// studentCourseDelete

export const studentCourseDeleteRequest = ()=> ({
  type: STUDENTCOURSEDELETE_REQUEST,
  payload: "",
});

export const studentCourseDeleteSuccess = (deleteStudentCourse)=> ({
  type: STUDENTCOURSEDELETE_SUCCESS,
  payload: deleteStudentCourse,
});

export const studentCourseDeleteFail = (error)=> ({
  type: STUDENTCOURSEDELETE_FAIL,
  payload: error,
});