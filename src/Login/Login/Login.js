import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import './Login.css'

const Login = () => {
  const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

  const history = useHistory()
  const location = useLocation()

  const url = location.state?.from || "/home"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleGetEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleGetPassword = (e) => {
    setPassword(e.target.value);
  }




  const handleLoginWithEmailAndPassword = (e) => {
    e.preventDefault();

    loginWithEmailAndPassword(email, password)
      .then((res) => {
        setIsLoading(true)
        setUser(res.user);
        history.push(url)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
    <div className="login pt-4 pb-4 login-card mx-auto my-4">
      <div className="text-center">
        <h3 className='pb-4 pt-4'>Please <span className="text-primary">Login</span> Here</h3>
      </div>
      <div className="">
        <form onSubmit={handleLoginWithEmailAndPassword}>
          <input className="form-control" type="email" onBlur={handleGetEmail} placeholder="Email" />
          <br />
          <input className="form-control" type="password" onBlur={handleGetPassword} placeholder="Password" />
          <br />
          <input className="btn btn-primary me-3 px-3" type="submit" value="login" /> <br /> <br />
          <button className="btn btn-primary" onClick={handleGoogleLogin}>Google Sign In</button>
        </form>
        <p className="pt-5"> New User ? <Link className="text-decoration-none" to="/register"> Please register</Link ></p>
      </div>


    </div>
  );
};

export default Login;
