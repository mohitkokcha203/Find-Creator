import React, { useState } from 'react';
import './Signup.css';
import { ToastContainer } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import { handleError, handleSuccess } from '../../utils';


const navigate= useNavigate;

const Signup = () => {
    const [signupForm, setSignupForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target; 
        console.log(name, value);
        setSignupForm({
            ...signupForm,
            [name]: value 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const { name, email, password } = signupForm;
        if (!name || !email || !password) {
            return handleError("All fields are required");
        }

        try {
            const URL = "http://localhost:8080/auth/signup";
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(signupForm)
            });

            const result = await response.json();
            const { success, message } = result;

            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/login");
                  }, 1000);
            } else {
                handleError(message);
            }

        } catch (error) {
            handleError(error.message);
        }
    };

    return (
        <div className="signup-body">
            <div className='signup'>
                <h1>SignUp</h1>
                <form className='signup-form' onSubmit={handleSubmit} method='POST'>
                    <div className='signup-username'>
                        <label htmlFor="name">UserName:</label>
                        <input 
                            type="text" 
                            placeholder='Enter your name:' 
                            name='name' 
                            value={signupForm.name}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='signup-username'>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="text" 
                            placeholder='Enter your email:' 
                            name='email' 
                            value={signupForm.email}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='signup-username'>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            placeholder='Enter your password:' 
                            name='password' 
                            value={signupForm.password}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='signup-button'>
                        <button type="submit">Sign Up</button>
                    </div>
                    <div className='signup-para-signup'>
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
                </form>
                {/* <ToastContainer/> */}
            </div>
        </div>
    );
}

export default Signup;
