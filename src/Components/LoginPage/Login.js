import React from 'react'
import basketImg from "./basketImg.png";
import "./Login.css";
function Login() {
  return (
    <section className='loginSection'>
        <div className='LoginContainer'>
            <img src={basketImg} alt='mySpace img'></img>
            <div className='login_Head'>
            <h1>Login to Disney+Hotstar</h1>
            <p>Start watching from where you left off, personalise for kids and more</p>
            </div>
            <button className='primaryBtn'>Log In</button>
        </div>
    </section>
  )
};



export default Login
