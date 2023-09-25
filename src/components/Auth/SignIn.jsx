import React, { useState } from 'react';
import './auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ParticlesBackground from '../particlesBackground';
import Joi from 'joi';

function SignIn() {
  const schema = Joi.object({
    userName:Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required().min(6).max(30),
  });

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const { error } = schema.validate(
      { userName, password }, // Validate these fields
      { abortEarly: false }
    );

    if (!error) {
      return null; // No errors
    }

    const validationErrors = {};
    error.details.forEach((detail) => {
      validationErrors[detail.path[0]] = detail.message;
    });

    return validationErrors;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    

    const validationErrors = validateForm();

    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post(
          'http://localhost:8080/talent/api/auth/login',
          {
            userName,
            password,
          }
        );

        if (response.status === 200) {
          console.log('Login successful');

          // Set user data from the response data
          const userData = response.data.data;

          // Store user data in local storage
          localStorage.setItem('UserData', JSON.stringify(userData));

          // Navigate to the home page
          navigate('/admin');
        } else {
          console.error('Login failed');
          // Handle login failure (e.g., display an error message)
        }
      } catch (error) {
        console.error('An error occurred:', error);
        // Handle network errors or other exceptions
      }
    }
  };

  return (
    <>
      <ParticlesBackground />
      <div className="container container-fluid mt-5" style={{ marginTop: '100vh', marginBottom: '10vh' }}>
        <div className="row wrapper" style={{ marginTop: '20vh' ,backgroundColor:'#5A5A5A' }}>
          <div className="col-10 col-lg-5">
            <form className="shadow-lg">
              <h1 className="mb-3 auth-h1">Login</h1>
              <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                  type="email"
                  id="email_field"
                  className="form-control"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                {errors.userName && <p className="error" style={{color:'red'}}>{errors.userName}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="password_field">Password</label>
                <input
                  type="password"
                  id="password_field"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error" style={{color:'red'}}>{errors.password}</p>}
              </div>

              <a href="/forgotpassword" className="float-right mb-4">
                Forgot Password?
              </a>

              <button
                type="submit"
                className="btn signin-btn two btn-block py-3"
                onClick={submitHandler}
              >
                LOGIN
              </button>

              <a href="/new_user_add" className="float-right mt-3">
                New User?
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
