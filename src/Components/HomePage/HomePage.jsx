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
        const videoData  = [];

        // Extract video URLs from the user data
        for (const key in data) {
          if (data.hasOwnProperty(key) && data[key].videoURL) {
            const video = {
              title: data[key].videoTitle, // Replace with the actual key for video titles
              description: data[key].videoDesc, // Replace with the actual key for video descriptions
              videoURL: data[key].videoURL,
            };
            videoData.push(video);
          }
        }

        setVideos(videoData);
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
      <h1>The Trends</h1>
      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            
            <video controls width="auto" height="300">
              <source src={video.videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default HomePage;