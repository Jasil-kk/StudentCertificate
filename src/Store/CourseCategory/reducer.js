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
  UPDATECATEGORY_FAIL
} from "./actionType";

const initialstate = {
  loading: false,
  error: "",
  categoryDetails: [],
  createCategory: {},
  deleteCategory: {},
  categoryView: {},
  updateCategory: {},
};

const categoryReducer = (state = initialstate, action) => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryDetails: action.payload,
      };
    case CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // createCategory

    case CREATECATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATECATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        createCategory: action.payload,
      };
    case CREATECATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


    // categoryView
    
    case CATEGORYVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CATEGORYVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryView: action.payload
      }
    case CATEGORYVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }


    // deleteCategory

    case DELETECATEGORY_REQUEST:
        return {
            ...state,
            loading: true,
        }
    case DELETECATEGORY_SUCCESS:
        return {
            ...state,
            loading: false,
            deleteCategory: action.payload,
        }
    case DELETECATEGORY_FAIL:
        return {
            ...state,
            loading: false,
            error: action.payload,
        }

    // updateCategory
    
    case UPDATECATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case UPDATECATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        updateCategory: action.payload,
      }
    case UPDATECATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }




    default:
      return state;
  }
};

export default categoryReducer;
