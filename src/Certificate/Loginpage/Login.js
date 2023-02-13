import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../Store/Login/useApi";
import "./Login.css";

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState();

  const handleSubmit = (e)=>{
    e.preventDefault();

    dispatch(loginApi(data,navigate))
  } 

  return (
    <div className="login-main">
      <div className="content">
        <h3>EDISONVALLEY</h3>

        <form action="" onSubmit={handleSubmit} autoComplete>
          <label htmlFor="">Username</label>
          <input type="text" id="username" placeholder="Enter username" onChange={(e)=> setData({...data ,username : e.target.value})}/>

          <label htmlFor="">Password</label>
          <input type="password" id="username" placeholder="Enter password" onChange={(e)=> setData({...data,password: e.target.value})}/>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
