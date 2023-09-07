import React, { useState } from 'react'
import "./Login.css";
import CloseIcon from '@mui/icons-material/Close';
import { signInWithPhoneNumber } from "firebase/auth";
import app from '../../Firebase';
import { getAuth, RecaptchaVerifier,PhoneAuthProvider,signInWithCredential  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function MpLogin({ closeModal }) {
  const auth = getAuth(app);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        sendOtp();
      }
    });
  }

  const handlePhoneNumberChange = (event) => {
    const mobileNumber = event.target.value;
    setPhoneNumber(mobileNumber);
  };

  const handleGetOtp = (event) => {
    event.preventDefault();
    setUpRecaptcha();
    setShowSubmitButton(true); // Show the submit button after clicking "Get OTP"
    sendOtp();
  };

  const sendOtp = () => {
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
        // Handle error, e.g., display an error message to the user
      });
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    const verificationId = window.confirmationResult.verificationId;
    const credential = PhoneAuthProvider.credential(verificationId, otp);

    signInWithCredential(auth, credential)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
        // You can update the UI, store user data, or redirect the user as needed
        setPhoneNumber("");
        setShowSubmitButton(false);
        setOtp("");
        navigate("/")

      })
      .catch((error) => {
        console.error("Error signing in:", error);
        // Handle error, e.g., display an error message to the user
       
      });
  };
// Remember to add proper error handling and user feedback to make the user experience smoother and more informative.

  return (

    <div className='modal'>
      <div className="combineWrapper">
        <div className="modalImage">

        </div>
        <div className='close' onClick={closeModal}><CloseIcon /></div>
        <div className='modal-content'>
          <div className="contentHead">
            <h2>Log in or sign up to continue</h2>
            <form onSubmit={handleGetOtp}>
              <div id="recaptcha-container">
              </div>
              <input
                type='tel'
                placeholder='Enter mobile number'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
             <button className='primaryBtn' type='submit' >Get OTP</button>
            </form>
          </div>
          {showSubmitButton && (
            <form onSubmit={handleOtpSubmit}>
              <input
                type='text'
                placeholder='Enter OTP'
                value={otp}
                onChange={handleOtpChange}
              />
              <button className='primaryBtn' type='submit'>Submit</button>
            </form>


          )}

          <div className="helpContent">
            <p>Having trouble logging in? <a href='https://help.hotstar.com/in/en/support/search?term=login'> Get Help</a></p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default MpLogin;
