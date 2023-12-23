import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import './SignupLogin.css'; // Import your CSS file for styling

export const Login = () => {
  let navigate=useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    if(data.email==="admin@gmail.com"&&data.password==="admin"){
      navigate("/adminDashboard")
      toast.success("Wellcome To Dashboard");
      
    }

    console.log(data);
  } 

  return (
    <>
      <Header />
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="custom-form">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              {...register('email')}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              {...register('password')}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          
          <div className="form-group form-check">
            <input
              {...register('remember')}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {/* Registration Link */}
        <p className="registration-link">
          Don't have an account? <Link to="/SginUp" href="/register">Register here</Link>
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Login;
