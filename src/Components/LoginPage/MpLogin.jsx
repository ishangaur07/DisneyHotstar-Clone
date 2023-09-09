import React, { useState } from 'react'
import "./Login.css";
import CloseIcon from '@mui/icons-material/Close';
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function MpLogin({ closeModal }) {
  const [formChange, setFormChange] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handleHelpLinkClick = () => {
    setFormChange(true);
  };

  const handleBackToLoginClick = () => {
    setFormChange(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formChange) {
        // Register New User 
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Set the user's display name
        await updateProfile(user, {
          displayName: name, // Assuming "name" is the variable that holds the user's name
        })
        }else {
          // Login an existing user
          await signInWithEmailAndPassword(auth, email, password);
        }

        navigate("/")
        
      }catch (error) {
        console.error(error.message);
      }


    }
  return (

      <div className='modal'>
        <div className="combineWrapper">
          <div className="modalImage">
          </div>
          <div className='close' onClick={closeModal}><CloseIcon /></div>
          <div className='modal-content'>
            <div className="contentHead">
              <h2>Log in or sign up to continue</h2>
              <form onSubmit={handleSubmit}>
                {formChange &&
                  <input
                    type='text'
                    placeholder='Name'
                    onChange={(e)=>setName(e.target.value)}

                  />}

                <input
                  type='email'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete=''
                />
                <input
                  type='password'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete='current-password'
                />
                {formChange && <button className='primaryBtn' type='submit'>Register</button>}
                {!formChange && <button className='primaryBtn' type='submit'>Login</button>}
              </form>
            </div>


            <div className="helpContent">
              {formChange ? (
                <p>
                  Already have an account{' '}
                  <button className='backToLogin' onClick={handleBackToLoginClick}>Login</button>
                </p>
              ) : (
                <p>
                  Having trouble logging in?{' '}
                  <button className='getHelp' onClick={handleHelpLinkClick}>Register</button>
                </p>
              )}
            </div>

          </div>

        </div>

      </div>
    )
  }

  export default MpLogin;
