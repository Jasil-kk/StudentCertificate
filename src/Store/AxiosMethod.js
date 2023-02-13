import axios from "axios"

const BASICURL = "https://api.certificates.edisonvalley.com/api/v1";
// const BASICURL = "http://192.168.29.217:4000";

export const axiosApi = axios.create({
    baseURL: BASICURL,
    withCredentials:true,
})

axiosApi.interceptors.request.use(function(config){
    const token = localStorage.getItem("token");
    if (token){
        config.headers["Authorization"] = "Token " + token;
    }
    else {
        console.log("error");
    }
    return config
})