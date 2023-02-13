import { axiosApi } from "../AxiosMethod";
import {
  loginRequest,
  loginSuccess,
  loginFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
} from "./action";

export const loginApi = (data, navigate) => {
  return async (dispatch) => {
    dispatch(loginRequest(data));

    try {
      const res = await axiosApi.post(`/account/login/`, data);
      // const res = await axiosApi.post(`/api/auth`,data)
      console.log(res);
      if (res?.data?.token) {
        localStorage.setItem("token", res?.data?.token);
        dispatch(loginSuccess(res.data));
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(loginFail(error?.response?.data));
    }
  };
};

export const logoutApi = (navigate) => {
  return async (dispatch) => {
    dispatch(logoutRequest());

    try {
      const token = localStorage.getItem("token");

      const user = await axiosApi.post(`account/logout/`, token);
      console.log(user)
  
      dispatch(logoutSuccess(user));
      localStorage.clear("token");
      navigate("/login");
    } catch (error) {
      dispatch(logoutFail(error?.response?.data));
    }
  };
};
