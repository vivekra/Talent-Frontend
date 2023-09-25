import React, { useState } from 'react'
import ParticlesBackground from '../particlesBackground'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {

    const [userName, setUserName] = useState('');
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
    
        
    
      
    
       
          try {
            const response = await axios.post(
              'http://localhost:8080/talent/api/auth/forgotpassword',
              {
                userName,
            
              }
            );
    
            if (response.status === 200) {
              console.log('Login successful');
    
             
    
           
    
          
              navigate('/signin');
            } else {
              console.error('forget password failed');
             
            }
          } catch (error) {
            console.error('An error occurred:', error);
            // Handle network errors or other exceptions
          }
        
      };


  return (
    <>
  
    <ParticlesBackground />
    <div className="row wrapper">
    <div className="col-10 col-lg-5">
        <form className="shadow-lg">
            <h1 className="mb-3 auth-h1">Forgot Password</h1>
            <div className="form-group">
                <label for="email_field">Enter Email</label>
                <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <button
                id="forgot_password_button"
                type="submit"
                className="btn signin-btn btn-block py-3"
                onClick={submitHandler}
                >
                Send Email
        </button>

        </form>
    </div>
</div>
</>
  )
}

export default ForgotPassword