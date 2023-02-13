import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL } from "./actionType";
import { clear } from "@testing-library/user-event/dist/clear";

const initalState = {
    loading: false,
    error: "",
    userDetails: [],
    logout: [clear]
}



export const loginReducer = (state = initalState, action)=> {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userDetails: action.payload,
            }   
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;

    }
}

export default loginReducer

export  const logoutReducer = (state = initalState, action)=> {
    switch(action.type){
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                logout:""
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            default:
                return state;
    }
}

