import React from 'react'
// import "./register.css"
import { useForm } from 'react-hook-form'
// import { useEffect } from 'react';
import axios from "axios"

function Check() {
    let {register,handleSubmit,formState:{errors}} =useForm();

    const SignUpData = (SgData)=>{
    axios.post("/signup",SgData).then((res)=>{
      console.log(res.data);
    })
  }
  return (   <>
    <div id='body'>
        {/* partial:index.partial.html */}
        <section>
          {" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
          <span /> <span /> <span /> <span />
          <div className="signin">
            <div className="content">
              <h2>Register in to See More</h2>
              <form onSubmit={handleSubmit(SignUpData)} className="form">
                <div className="inputBox">
                  {/* <i>Username</i> */}
                  <input {...register('name', { required: 'Name is required...' })} placeholder='Enter Your Name' type="text" required="" /> 
                  {errors.name && <p className='error'>{errors.name.message}</p>}
                  
                </div>
                <div className="inputBox">
                  <input placeholder='Enter Your Email'  {...register('email', { required: 'Email is required...', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email (**)' } })}  type="email" required="" /> 
                  {errors.email && <p className='error'>{errors.email.message}</p>}
                </div>
                <div className="inputBox">
                  <input placeholder='Enter Your Password' {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })} type="password" required="" />
                  {errors.password && <p className='error'>{errors.password.message}</p>}
                </div>
                {/* <div className="links">
                  {" "}
                  <a href="#">Forgot Password</a> <a href="#">Signup</a>
                </div> */}
                <div className="inputBox">
                  {/* <input type="submit" defaultValue="Login" /> */}
                  <button type="submit"> Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>{" "}
        {/* partial */}
        </div>
      </>
   
  )
}

export default Check