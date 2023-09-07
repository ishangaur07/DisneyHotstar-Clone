import React from 'react'
import Header from '../Header/Header'
import video from "./homeVideo.mp4";
import "./HomePage.css";
function HomePage() {
  return (
    <div>
      <Header></Header>
      <div className="videoContainer">
      <video autoPlay muted className="video-player"> 
        <source src={video} type="video/mp4" />
      </video>
      </div>
     
    </div>
  )
}

export default HomePage
