import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAIL,
  CREATECATEGORY_REQUEST,
  CREATECATEGORY_SUCCESS,
  CREATECATEGORY_FAIL,
  DELETECATEGORY_REQUEST,
  DELETECATEGORY_SUCCESS,
  DELETECATEGORY_FAIL,
  CATEGORYVIEW_REQUEST,
  CATEGORYVIEW_SUCCESS,
  CATEGORYVIEW_FAIL,
  UPDATECATEGORY_REQUEST,
  UPDATECATEGORY_SUCCESS,
  UPDATECATEGORY_FAIL,
} from "./actionType";

// courseCategory

export const categoryRequest = () => ({
  type: CATEGORY_REQUEST,
  payload: "",
});

export const categorySuccess = (categoryDetails) => ({
  type: CATEGORY_SUCCESS,
  payload: categoryDetails,
});

export const categoryFail = (error) => ({
  type: CATEGORY_FAIL,
  payload: error,
});

// createCategory

export const createcategoryRequest = () => ({
  type: CREATECATEGORY_REQUEST,
  payload: "",
});

export const createcategorySuccess = (createCategory) => ({
  type: CREATECATEGORY_SUCCESS,
  payload: createCategory,
});

export const createcategoryFail = (error) => ({
  type: CREATECATEGORY_FAIL,
  payload: error,
});

// categoryView

export const categoryviewRequest = () => ({
  type: CATEGORYVIEW_REQUEST,
  payload: "",
})

export const categoryviewSuccess = (categoryView) => ({
  type: CATEGORYVIEW_SUCCESS,
  payload: categoryView,
})

export const categoryviewFail = (error) => ({
  type: CATEGORYVIEW_FAIL,
  payload: error,
})


// deleteCategory

export const deletecategoryRequest = () => ({
    type: DELETECATEGORY_REQUEST,
    payload: "",
})

export const deletecategorySuccess = (deleteCategory) => ({
    type: DELETECATEGORY_SUCCESS,
    payload: deleteCategory,
})

export const deletecategoryFail = (error) => ({
    type: DELETECATEGORY_FAIL,
    payload: error,
})

// updateCategory

export const updatecategoryRequest = () => ({
  type: UPDATECATEGORY_REQUEST,
  payload: "",
})

export const updatecategorySuccess = (updateCategory,courseCategoryId) => ({
  type: UPDATECATEGORY_SUCCESS,
  payload: updateCategory,courseCategoryId,
})

export const updatecategoryFail = (error) => ({
  type: UPDATECATEGORY_FAIL,
  payload: error,
})