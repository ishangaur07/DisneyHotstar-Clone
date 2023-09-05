import React from 'react'
import "./Header.css";
import logo from "./DH-logo.svg";
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import TvIcon from '@mui/icons-material/Tv';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
function Header() {
  return (
    <section>
    <div class="sidebar">
    <div class="logo">
        <img src={logo} alt="Logo"/>
    </div>
    <ul class="nav">
      <Link to="/login"><li><span><AccountCircleIcon></AccountCircleIcon></span> <span>My Space</span></li></Link>
      <Link to="/login"><li><span><SearchIcon></SearchIcon></span> <span>Search</span></li></Link>
      <Link to="/login"><li><span><HomeIcon></HomeIcon></span> <span>Home</span></li></Link>
      <Link to="/login"><li><span><TvIcon></TvIcon></span><span>TV</span></li></Link>
      <Link to="/login"><li><span><MovieCreationIcon></MovieCreationIcon></span> <span>Movies</span></li></Link>
      <Link to="/login"><li><span><SportsBasketballIcon></SportsBasketballIcon></span> <span>Sports</span></li></Link>
       
    </ul>
</div>
<div class="content">
    {/* Your page content goes here */}
    <h1>Welcome to Your Website</h1>
    <p>This is the main content area.</p>
</div>
</section>
  )
}

export default Header
