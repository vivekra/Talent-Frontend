import React, { useState } from 'react';
import './auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ParticlesBackground from '../particlesBackground';
import Joi from 'joi';

function Register() {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(30),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    mobileNumber: Joi.string().required().length(10).pattern(/^\d+$/),
    password: Joi.string().required().min(6).max(30),
    confirmPassword: Joi.string()
      .valid(Joi.ref('password'))
      .required()
      .strict(),
  });

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validateUserData = (data) => {
    return schema.validate(data, { abortEarly: false });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { error } = validateUserData(userData);

    if (error) {
      // Validation failed
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/talent/api/auth/register',
        userData
      );

      if (response.status === 200) {
        console.log('Register successful');

        // Navigate to the home page
        navigate('/signin');
      } else {
        console.error('Register failed');
        // Handle register failure (e.g., display an error message)
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <>
      <ParticlesBackground />
      <div
        className="container container-fluid"
        style={{ marginTop: '20vh', marginBottom: '10vh' }}
      >
        <div className="row wrapper">
          <div className="col-10 col-lg-5">
            <form className="shadow-lg" encType="multipart/form-data">
              <h1 className="mb-3 auth-h1">Register</h1>

              <div className="form-group">
                <label htmlFor="name_field">Name</label>
                <input
                  name="name"
                  type="text"
                  id="name_field"
                  className="form-control"
                  value={userData.name}
                  onChange={onChange}
                />
                {errors.name && (
                  <p className="error" style={{ color: 'red' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                  name="email"
                  type="email"
                  id="email_field"
                  className="form-control"
                  value={userData.email}
                  onChange={onChange}
                />
                {errors.email && (
                  <p className="error" style={{ color: 'red' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="mobileNumber_field">Phone No</label>
                <input
                  name="mobileNumber"
                  type="tel"
                  id="mobileNumber_field"
                  className="form-control"
                  value={userData.mobileNumber}
                  onChange={onChange}
                />
                {errors.mobileNumber && (
                  <p className="error" style={{ color: 'red' }}>
                    {errors.mobileNumber}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password_field">Password</label>
                <input
                  name="password"
                  type="password"
                  id="password_field"
                  className="form-control"
                  value={userData.password}
                  onChange={onChange}
                />
                {errors.password && (
                  <p className="error" style={{ color: 'red' }}>
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword_field">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword_field"
                  className="form-control"
                  value={userData.confirmPassword}
                  onChange={onChange}
                />
                {errors.confirmPassword && (
                  <p className="error" style={{ color: 'red' }}>
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                id="register_button"
                type="submit"
                className="btn signin-btn btn-block py-3"
                onClick={submitHandler}
              >
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
