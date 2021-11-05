import React from 'react';
import useAuth from '../../Hooks/useAuth'
import "./Login.css";

const Login = () => {
    const { signInUsingGoogle, user, logOut, singInGithub } = useAuth()
    console.log(user)
    return (
        <div className="d-flex justify-content-center">
            <div className="card login" style={{ width: "22rem", height: "25rem", marginTop: "30px", marginBottom: "40px " }}>
                <div className="card-body">
                    <h2 className="card-title mb-5 text-center colored fw-bold">Have to Login First</h2>
                    <p className="card-text mb-3">What we like about this login form is that it enjoys inline validation in both the username and password fields, offering a bit of usability-friendly guidance to users. Another type of validation pops up above the login form after a failed attempt.</p>
                    <div>
                        <p className="text-center">Login as <span className="text-dark fw-bold">{user.displayName}</span></p>
                    </div>
                    {user.email ? (<button className=" btn btn-danger d-flex mx-auto mb-4 bn5" onClick={logOut}>Logout</button>) :
                        (<button className=" btn btn-danger d-flex mx-auto bn5" onClick={signInUsingGoogle}>Google Sign In</button>)}
                    {/* <div>
                        <button onClick={singInGithub} className="">Git hub</button>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default Login;