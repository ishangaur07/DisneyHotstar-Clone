import React,{useState} from 'react'
import "./Login.css";
import CloseIcon from '@mui/icons-material/Close';
function MpLogin({closeModal}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    closeModal();
  };

  
  const phoneNumberValid = phoneNumber.length === 10;

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
              <input
                type='tel'
                placeholder='Enter mobile number'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              {phoneNumberValid && (<button className='primaryBtn'  type='submit'>Submit</button>)}
            </form>
            </div>
           <div className="helpContent">
           <p>Having trouble logging in? <a href='https://help.hotstar.com/in/en/support/search?term=login'> Get Help</a></p>
           </div>
           
          </div>
          
      </div>
     
        </div>
  )
}

export default MpLogin;
