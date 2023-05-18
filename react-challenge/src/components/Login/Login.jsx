import React from "react";
import "./login.css";
import logo from "../../assets/images/vinyl.svg";
import {Redirect} from 'react-router-dom'

const Login = ({login,isAuth}) => {
  if (isAuth){return <Redirect to ={{pathname:'/music'}}/>}
  return (
    <div className="loginContainer d-flex flex-wrap justify-content-center text-center">
      <div className="logo w-25 mt-3">
        <img src={logo} alt="vinyl" />
      </div>
      <h1 className="w-100">Login</h1>
      <form onSubmit={(e)=>login(e)} className="mb-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
