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

const initalState = {
  loading: false,
  error: "",
  userDetails: [],
  allStudent: [],
  studentDetails: {},
  studentView: {},
  studentDelete: {},
  studentUpdate: {},
  studentCourse: {},
  createStudentCourse: {},
  deleteStudentCourse: {},
};

const studentsReducer = (state = initalState, action) => {
  switch (action.type) {
    case STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        allStudent: action.payload,
        error: "",
      };
    case STUDENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //createStudent

    case CREATESTUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATESTUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        studentDetails: action.payload,
        error: "",
      };
    case CREATESTUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // studentView

    case STUDENTVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STUDENTVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        studentView: action.payload,
      };
    case STUDENTVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // studentDelete

    case STUDENTDELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STUDENTDELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentDelete: action.payload,
      };
    case STUDENTDELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // studentUpdate

    case STUDENTUPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STUDENTUPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentUpdate: action.payload,
      };
    case STUDENTUPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // studentCourse

    case STUDENTCOURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STUDENTCOURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        studentCourse: action.payload,
      };
    case STUDENTCOURSE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    //studentCourseCreate

    case STUDENTCOURSECREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
      case STUDENTCOURSECREATE_SUCCESS:
        return {
          ...state,
          loading: false,
          createStudentCourse: action.payload
        };
      case STUDENTCOURSECREATE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };

    // deleteStudentCourse

      case STUDENTCOURSEDELETE_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case STUDENTCOURSEDELETE_SUCCESS:
        return {
          ...state,
          loading: false,
          deleteStudentCourse: action.payload
        }
      case STUDENTCOURSEDELETE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        }

    default:
      return state;
  }
};

export default studentsReducer;
