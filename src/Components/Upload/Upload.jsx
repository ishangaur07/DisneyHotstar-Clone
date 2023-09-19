import React, { useState, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import "./Upload.css";
import { useUser } from '../UserContext/UserContext';
import { storage } from '../../Firebase';
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import FileUploadIcon from '@mui/icons-material/FileUpload';

function Upload({ closeModal }) {
  const [videoFile, setVideoFile] = useState(null);
  const [error, setError] = useState('');
  const dropAreaRef = useRef(null);
  const inputRef = useRef(null);
  const { setSelectedVideoFile } = useUser(); // Access the context function
  const { user } = useUser();
  const [videoSelect, setVideoSelect] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setError('Video size must be less than 3 MB.');
      } else {
        setError('');
        setVideoFile(file);
        setSelectedVideoFile(file);
       
      }
      setVideoSelect(true);
    }

  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    handleFileChange(droppedFile);
  };

  const handleSelectFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
   
  };

  const handleSubmit = async () => {
    if (videoFile && user) {
      try {
        // Define the path for the uploaded file in Firebase Storage
        const path = `videos/${Date.now()}_${videoFile.name}`;

        // Create a reference to Firebase Storage
        const storageRef = ref(storage, `videos/${Date.now()}_${videoFile.name}`); // Reference to the video file in storage

        // Upload the video file to Firebase Storage
        await uploadBytes(storageRef, videoFile);

        // Get the download URL of the uploaded video
        const downloadURL = await getDownloadURL(storageRef);
        console.log("This is download url", downloadURL);

        // Now, you can store the downloadURL in Firebase Realtime Database
        const response = await fetch("https://disneyhotstarclone-b1102-default-rtdb.asia-southeast1.firebasedatabase.app/users.json", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: user.displayName,
            videoURL: downloadURL // Store the download URL
          })
        });
        setVideoFile(null)
        console.log(user.displayName, downloadURL);
      } catch (error) {
        console.error("Error uploading video:", error);
      }
    }
  };

  const handleCancel = ()=>{
    setVideoFile(null);
    console.log("A cancel button");
  }

  return (
    <section className='upload-popup'>
      <div className='close' onClick={closeModal}><CloseIcon /></div>
      <div className='upload-wrapper'>
        <div className="upload-input-container">
          {error && <p className='error'>{error}</p>}

          <div
            className='drop-area'
            ref={dropAreaRef}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <p>
              Upload whats vrial for you
            </p>
            <FileUploadIcon className='file-upload'></FileUploadIcon>
            <button className='f-button' onClick={handleSelectFile}>Find that video</button>
            <input
              type='file'
              accept='video/*'
              ref={inputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>

          {videoFile && (
            <div className='selected-video'>
              <video controls width="100%" height="300">
                <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="UC-buttons">
              <button className='U-button' onClick={handleSubmit}>Upload</button>
              <button className='U-button' onClick={handleCancel}>Cancel</button>
              </div>
             
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Upload;
