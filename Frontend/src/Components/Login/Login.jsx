import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { ToastContainer } from 'react-toastify';
import {handleSuccess,handleError} from '../../utils'
import { AuthContext } from '../../Authcontext';

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const { setIsLoggedIn, setUsername } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginForm;
    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      const URL = "http://localhost:8080/auth/login";
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(loginForm)
      });

      const result = await response.json();
      

      const { success, message, jwtToken, name } = result;

      if (success) {
         
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedinUser", name);
        
        setIsLoggedIn(true);
        setUsername(name);
        
        navigate("/");
      } else {
        
        handleError(message);
      }

    } catch (error) {
     
      handleError(error.message);
    }
  };

  return (
    <div className="login-body">
      <div className='login'>
        <h1>Login</h1>
        <form className='login-form' onSubmit={handleSubmitLogin}>
          <div className='login-username'>
            <label htmlFor="email">Email:</label>
            <input type="text" required placeholder='Enter your email' name='email' onChange={handleChange} />
          </div>
          <div className='login-username'>
            <label htmlFor="password">Password:</label>
            <input type="password" required placeholder='Enter your password' name='password' onChange={handleChange} />
            <a href="" className='forget-password'>Forget Password</a>
          </div>
          <div className='login-button'>
            <button type="submit">Login</button>
          </div>
          <div className='login-para-login'>
            <p>Create a new account? 
              <a href="/signup">Sign up</a>
              </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
