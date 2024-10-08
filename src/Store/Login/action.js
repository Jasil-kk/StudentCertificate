import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_REQUEST, LOGOUT_FAIL } from "./actionType";

export const loginRequest =(input)=> ({
    type: LOGIN_REQUEST,
    payload: input
})

export const loginSuccess = (userDetails)=> ({
    type: LOGIN_SUCCESS,
    payload: userDetails,
})

export const loginFail = (error)=> ({
    type:LOGIN_FAIL,
    payload: error
})

export const logoutRequest =()=> ({
    type: LOGOUT_REQUEST,
    payload: "",
})

export const logoutSuccess =()=> ({
    type: LOGOUT_SUCCESS,
    payload: ""
})

export const logoutFail =(error)=> ({
    type: LOGOUT_FAIL,
    payload: error,
})