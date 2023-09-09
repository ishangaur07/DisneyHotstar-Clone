import React, { useState } from 'react'
import basketImg from "./basketImg.png";
import "./Login.css";
import questionIcon from "./question icon.svg";
import { useNavigate } from 'react-router-dom';
import MpLogin from './MpLogin';
import { useUser } from '../UserContext/UserContext';

function Login() {
  const [showModal, setShowModal] = useState(false);
  const { user, logout } = useUser();
  console.log(user);
  const navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
    navigate('/login#mp-login');
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/login'); // Reset the URL
  };


  return (
    <section className='loginSection'>
      <div className='loginHeader'>
        {user ? (<><button className='primaryBtn'>Renew</button><a className='secondaryBtn' href='https://help.hotstar.com/'><img src={questionIcon} alt="q-icon" /> Help & Support</a>
        </>) : (<><a className='secondaryBtn' href='https://help.hotstar.com/'><img src={questionIcon} alt="q-icon" /> Help & Support</a></>)}

      </div>
      <div className={`LoginContainer ${showModal ? 'blurred' : ''}`}>
        <img src={basketImg} alt='mySpace img'></img>
        <div className='login_Head'>
          {user?(<h1>Welcome {user.displayName}</h1>):(<><h1>Login to Disney+Hotstar</h1>
          <p>Start watching from where you left off, personalise for kids and more</p></>)}
          
        </div>
        {user ? (
          <button className='primaryBtn' onClick={logout}>Log out</button>
        ) : (
          <button className='primaryBtn' onClick={openModal}>Log In</button>
        )}

      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div className='modal-overlay'>
            <MpLogin closeModal={closeModal} />
          </div>
        </>
      )}
    </section>
  )
};



export default Login
