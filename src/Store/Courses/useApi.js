import { axiosApi } from "../AxiosMethod";

import {
  courseRequest,
  courseSuccess,
  courseFail,
  createcourseRequest,
  createcourseSuccess,
  createcourseFail,
  courseviewRequest,
  courseviewSuccess,
  courseviewFail,
  deletecourseRequest,
  deletecourseSuccess,
  deletecourseFail,
  updatecourseRequest,
  updatecourseSuccess,
  updatecourseFail,
} from "./action";

// course

export const courseApi = () => {
  return async (dispach) => {
    dispach(courseRequest());

    try {
      const details = await axiosApi.get(`/course/course/`);
      console.log(details);
      dispach(courseSuccess(details.data));
    } catch (error) {
      console.log(error);
      dispach(courseFail(error?.response?.data));
    }
  };
};

// createCourse

export const createCourseApi = (input,navigate) => {
  return async (dispatch) => {
    dispatch(createcourseRequest(input));
    console.log(input);
    try {
      const createCourse = await axiosApi.post(`/course/course/`,input);
      dispatch(createcourseSuccess(createCourse.data));
      navigate('/courses');
    } 
    catch (error) {
      console.log(error);
      dispatch(createcourseFail(error?.response?.data));
    }
  };
};

// courseView

export const courseViewApi = (courseId) => {
    return async (dispatch) => {
        dispatch(courseviewRequest());

        try {
            const courseView = await axiosApi.get(`/course/course/${courseId}`);
            console.log(courseView)
            dispatch(courseviewSuccess(courseView.data));
        }
        catch (error) {
            console.log(error);
            dispatch(courseviewFail(error?.response?.data));
        }
    }
}

// deleteCourse 

export const deleteCourseApi = (courseId,navgate) => {
  return async (dispatch) => {
    dispatch(deletecourseRequest());

    try {
      const courseDelete = await axiosApi.delete(`/course/course/${courseId}`);
      console.log(courseDelete);
      dispatch(deletecourseSuccess());
      navgate("/courses");
    }
    catch (error) {
      console.log(error);
      dispatch(deletecourseFail(error?.response?.data));
    }
  }
}

// updateCourse

export const updateCourseApi = (courseId,input,navigate) => {
  return async (dispatch) => {
    dispatch(updatecourseRequest(courseId));

    try {
      const courseUpdate = await axiosApi.put(`/course/course/${courseId}`,input);
      console.log(courseUpdate);
      dispatch(updatecourseSuccess(courseUpdate.data));
      navigate('/courses')
    }
    catch (error) {
      console.log(error);
      dispatch(updatecourseFail(error?.response?.data));
    }
  }
}