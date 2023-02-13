import { axiosApi } from "../AxiosMethod";

import {
  categoryRequest,
  categorySuccess,
  categoryFail,
  createcategoryRequest,
  createcategorySuccess,
  createcategoryFail,
  deletecategoryRequest,
  deletecategorySuccess,
  deletecategoryFail,
  categoryviewRequest,
  categoryviewSuccess,
  categoryviewFail,
  updatecategoryRequest,
  updatecategorySuccess,
  updatecategoryFail,
} from "./action";

//courseCategory

export const categoryApi = () => {
  return async (dispatch) => {
    dispatch(categoryRequest());

    try {
      const details = await axiosApi.get(`/course/course_category/`);
      console.log(details);
      dispatch(categorySuccess(details.data));
    } catch (error) {
      console.log(error);
      dispatch(categoryFail(error?.response?.data));
    }
  };
};

// createCategory

export const createCategoryApi = (input, navigate) => {
  return async (dispatch) => {
    dispatch(createcategoryRequest());

    try {
      const createCategory = await axiosApi.post(
        `/course/course_category/`,
        input
      );
      console.log(createCategory);
      dispatch(createcategorySuccess(createCategory.data));
      navigate("/coursecategories");
    } catch (error) {
      dispatch(createcategoryFail(error?.response?.data));
    }
  };
};

// categoryView

export const categoryViewApi = (courseCategoryId) => {
  return async (dispatch) => {
    dispatch(categoryviewRequest());

    try {
        const categoryView = await axiosApi.get(`/course/course_category/${courseCategoryId}`);
        console.log(categoryView);
        dispatch(categoryviewSuccess(categoryView.data));
    }
    catch (error) {
        dispatch(categoryviewFail(error?.response?.data));
    }
  };
};

// deleteCategory

export const deleteCategoryApi = (courseCategoryId,navigate) => {
  return async (dispatch) => {
    dispatch(deletecategoryRequest(courseCategoryId));

    try {
      const deleteCategory = await axiosApi.delete(
        `/course/course_category/${courseCategoryId}`
      );
      console.log(deleteCategory);
      dispatch(deletecategorySuccess(deleteCategory.data));
      navigate('/coursecategories');
    } catch (error) {
      console.log(error);
      dispatch(deletecategoryFail(error?.response?.data));
    }
  };
};

// updateCategory

export const updateCategoryApi = (courseCategoryId, input, navigate) => {
  return async (dispatch) => {
    dispatch(updatecategoryRequest(courseCategoryId));

    try {
      const updateCategory = await axiosApi.put(`/course/course_category/${courseCategoryId}`,input);
      console.log(updateCategory);
      dispatch(updatecategorySuccess(updateCategory.data));
      navigate('/coursecategories');
    }
    catch (error) {
      console.log(error);
      dispatch(updatecategoryFail(error?.response?.data))
    }
  }
}