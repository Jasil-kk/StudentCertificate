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

const initialstate = {
  loading: false,
  error: "",
  courseDetails: [],
  createCourse: {},
  courseView: {},
  deleteCourse: {},
  updateCourse: {},
};

const courseReducer = (state = initialstate, action) => {
  switch (action.type) {
    case COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courseDetails: action.payload,
      };
    case COURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // createCourse

    case CREATECOURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATECOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        createCourse: action.payload,
        error: "",
      };
    case CREATECOURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

// courseView

    case COURSEVIEW_REQUEST:
        return {
            ...state,
            loading: true,
        }
    case COURSEVIEW_SUCCESS:
        return {
            ...state,
            loading: false,
            courseView: action.payload,
        }
    case COURSEVIEW_FAIL:
        return {
            ...state,
            loading: false,
            error : action.payload,
        }

// deleteCourse

    case DELETECOURSE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case DELETECOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteCourse: action.payload,
      }
    case DELETECOURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
// updateCourse

    case UPDATECOURSE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case UPDATECOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateCourse: action.payload,
      }
    case UPDATECOURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

        

    default:
      return state;
  }
};

export default courseReducer;
