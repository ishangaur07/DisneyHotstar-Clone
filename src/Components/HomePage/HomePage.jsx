import React from 'react'
import Header from '../Header/Header'
import video from "./homeVideo.mp4";
import "./HomePage.css";



function HomePage() {
 

  return (
    <div className='homeContainer'>
      <Header></Header>
      <div className="Acontainer"></div>
      <div className="videoContainer">
      <video autoPlay muted className="video-player"> 
        <source src={video} type="video/mp4" />
      </video>
      <h1>Watchlist</h1>
    
      </div>
     
    </div>
  )
}

export default HomePage
