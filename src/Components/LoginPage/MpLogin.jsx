import React,{useState} from 'react'
import "./Login.css";
import CloseIcon from '@mui/icons-material/Close';
function MpLogin({closeModal}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here, e.g., send the phone number to the server.
    // Then, you can close the modal.
    closeModal();
  };

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
                placeholder='Phone Number'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <button type='submit'>Submit</button>
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
