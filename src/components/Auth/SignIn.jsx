import React from 'react'
import './auth.css'

function SignIn() {
  return (
   <>
   
   <div className="container container-fluid mt-5" style={{marginTop:'100vh',marginBottom:'10vh'}} >
        <div className="row wrapper" style={{marginTop:'20vh'}} > 
		<div className="col-10 col-lg-5">
        <form className="shadow-lg">
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label for="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value=""
              />
            </div>
  
            <div className="form-group">
              <label for="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value=""
              />
            </div>

            <a href="#" className="float-right mb-4">Forgot Password?</a>
  
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
            >
              LOGIN
            </button>

            <a href="/new_user_add" className="float-right mt-3">New User?</a>
          </form>
		  </div>
    </div>
</div>
   
   </>
  )
}

export default SignIn