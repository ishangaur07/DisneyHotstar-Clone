import React from 'react'
import "./Header.css";
import logo from "./DH-logo.svg";
import { NavLink } from 'react-router-dom';
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
      <NavLink to="/login">
        <li>
          <span className="nav-icon">
            <AccountCircleIcon></AccountCircleIcon>
            </span>{' '}
            <span className="nav-text">My Space</span>
            </li>
            </NavLink>
      <NavLink to="/login">
        <li>
          <span className="nav-icon">
            <SearchIcon></SearchIcon>
            </span>{' '} 
            <span className="nav-text">Search</span>
            </li>
            </NavLink>
      <NavLink to="/login">
        <li>
          <span className="nav-icon">
            <HomeIcon></HomeIcon>
            </span> {' '} 
            <span className="nav-text">Home</span>
            </li>
            </NavLink>
      <NavLink to="/login">
        <li>
          <span className="nav-icon">
            <TvIcon></TvIcon>
            </span>{' '} 
            <span className="nav-text">TV</span>
            </li>
            </NavLink>
      <NavLink to="/login">
        <li>
          <span className="nav-icon">
            <MovieCreationIcon></MovieCreationIcon>
            </span>{' '}  
            <span className="nav-text">Movies</span>
            </li>
            </NavLink>
      <NavLink to="/login">
        <li>
          <span className="nav-icon">
            <SportsBasketballIcon></SportsBasketballIcon>
            </span> {' '} 
            <span className="nav-text">Sports</span>
            </li>
            </NavLink>
       
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
