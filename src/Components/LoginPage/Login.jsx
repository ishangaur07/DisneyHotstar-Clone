import React from 'react'
import basketImg from "./basketImg.png";
import "./Login.css";
import questionIcon from "./question icon.svg";
import { Link} from 'react-router-dom';
function Login() {
  return (
    <section className='loginSection'>
      <div className='loginHeader'>
      
        <a className='secondaryBtn' href='https://help.hotstar.com/'><img src={questionIcon} alt="q-icon"/> Help & Support</a>
      </div>
        <div className='LoginContainer'>
            <img src={basketImg} alt='mySpace img'></img>
            <div className='login_Head'>
            <h1>Login to Disney+Hotstar</h1>
            <p>Start watching from where you left off, personalise for kids and more</p>
            </div>
            <Link  to="#mp-login">
            <button className='primaryBtn' >Log In</button></Link>
        </div>
    </section>
  )
};



export default Login
