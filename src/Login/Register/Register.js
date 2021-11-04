import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
//import useAuth from "./../Hooks/useAuth";

const Register = () => {


  const { signInWithGoogle, createAccountWithGoogle, setUser, setIsLoading, updateName } = useAuth();

  const history = useHistory()
  const location = useLocation()
  const url = location.state?.from || "/home"

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleGetName = (e) => {
    console.log(e.target.value);
    setName(e.target.value)
  }

  const handleGetEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value)
  }

  const handleGetPassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value)
  }



  const handleRegistration = (e) => {
    e.preventDefault();
    createAccountWithGoogle(email, password)
      .then((res) => {
        setIsLoading(true)
        updateName(name)
        setUser(res.user)
        history.push(url)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => {
        setIsLoading(false)
      })
  }



  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true)
        setUser(res.user)
        history.push(url)
      }
      )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  };


  return (
    <div className="login pb-4 login-card mx-auto my-5">
      <div className="text-center">
        <h1 className='pb-4 pt-4'><span className="text-primary">Register</span> First</h1>
      </div>
      <form onSubmit={handleRegistration}>
        <input className="form-control" type="text" onBlur={handleGetName} placeholder="Name" />
        <br />
        <input className="form-control" type="email" onBlur={handleGetEmail} placeholder="Email" />
        <br />
        <input className="form-control" type="password" onBlur={handleGetPassword} placeholder="Password" />
        <br />
        <input className="btn btn-primary me-3" type="submit" placeholder="create" />
        <button className="btn btn-primary" onClick={handleGoogleLogin}>Google Sign In</button>
        <br />
      </form>
      <p className="pt-3 "> Already Signed Up ? <Link className="text-decoration-none " to="/login">Please Login</Link ></p>
    </div>
  );
};

export default Register;