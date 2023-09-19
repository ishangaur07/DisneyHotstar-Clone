import React, { useEffect, useState } from 'react';
import './HomePage.css'; // Import your CSS styling here
import { db } from '../../Firebase'; // Import your Firebase configuration
import Header from "../Header/Header";
function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch video URLs from Firebase Realtime Database
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://disneyhotstarclone-b1102-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'); // Replace with your Firebase Realtime Database URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const videoLinks = [];

        // Extract video URLs from the user data
        for (const key in data) {
          if (data.hasOwnProperty(key) && data[key].videoURL) {
            videoLinks.push(data[key].videoURL);
          }
        }

        setVideos(videoLinks);
      } catch (error) {
        console.error('Error fetching video links:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
    <Header></Header>
    <div className="home-page">
      <h1>All Videos</h1>
      <div className="video-list">
        {videos.map((videoLink, index) => (
          <div key={index} className="video-container">
            <video controls width="auto" height="300">
              <source src={videoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default HomePage;
