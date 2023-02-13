import {
  COURSE_REQUEST,
  COURSE_SUCCESS,
  COURSE_FAIL,
  CREATECOURSE_REQUEST,
  CREATECOURSE_SUCCESS,
  CREATECOURSE_FAIL,
  COURSEVIEW_REQUEST,
  COURSEVIEW_SUCCESS,
  COURSEVIEW_FAIL,
  DELETECOURSE_REQUEST,
  DELETECOURSE_SUCCESS,
  DELETECOURSE_FAIL,
  UPDATECOURSE_REQUEST,
  UPDATECOURSE_SUCCESS,
  UPDATECOURSE_FAIL,
} from "./actionType";

// course

export const courseRequest = () => ({
  type: COURSE_REQUEST,
  payload: "",
});

export const courseSuccess = (courseDetails) => ({
  type: COURSE_SUCCESS,
  payload: courseDetails,
});

export const courseFail = (error) => ({
  type: COURSE_FAIL,
  payload: error,
});

// createCourse

export const createcourseRequest = () => ({
  type: CREATECOURSE_REQUEST,
  payload: "",
});

export const createcourseSuccess = (createCourse) => ({
  type: CREATECOURSE_SUCCESS,
  payload: createCourse,
});

export const createcourseFail = (error) => ({
  type: CREATECOURSE_FAIL,
  payload: error,
});

// courseView

export const courseviewRequest = () => ({
    type: COURSEVIEW_REQUEST,
    payload: "",
})

export const courseviewSuccess = (courseView) => ({
    type: COURSEVIEW_SUCCESS,
    payload: courseView,
})

export const courseviewFail = (error) => ({
    type: COURSEVIEW_FAIL,
    payload: error,
})

// deleteCourse

export const deletecourseRequest = () => ({
  type: DELETECOURSE_REQUEST,
  payload: "",
})

export const deletecourseSuccess = (deleteCourse) => ({
  type: DELETECOURSE_SUCCESS,
  payload: deleteCourse,
})

export const deletecourseFail = (error) => ({
  type: DELETECOURSE_FAIL,
  payload: error,
})

// updateCourse

export const updatecourseRequest = (courseId) => ({
  type: UPDATECOURSE_REQUEST,
  payload: courseId,
})


export const updatecourseSuccess = (updateCourse,courseId) => ({
  type: UPDATECOURSE_SUCCESS,
  payload: updateCourse,courseId
})


export const updatecourseFail = (error) => ({
  type: UPDATECOURSE_FAIL,
  payload: error,
})