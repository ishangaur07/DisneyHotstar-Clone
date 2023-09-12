import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import "./Header.css";
import logo from "./DH-logo.svg";
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import TvIcon from '@mui/icons-material/Tv';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { useUser } from "../UserContext/UserContext";
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {
  const [isActive, setIsActive] = useState('home');
  const location = useLocation();
  const {user,logout} = useUser();
  
  useEffect(() => {
    // Extract the slug from the current URL path (e.g., "/about-us" -> "about-us")
    const slug = location.pathname.split('/')[1];
    setIsActive(slug || 'home'); // If slug is empty, set 'home' as the active element
  }, [location]);

  return (
    <section>
    <div className="sidebar">
    <div className="logo">
        <img src={logo} alt="Logo"/>
    </div>
    <ul class="nav">
      <NavLink to={user?("/my-space"):("/login")}  className={isActive === 'home' ? 'active' : ''}>
        <li>
          <span className="nav-icon">
            <AccountCircleIcon></AccountCircleIcon>
            </span>{' '}
            <span className="nav-text">My Space</span>
            </li>
        </NavLink>
      <NavLink to="/login" >
        <li>
          <span className="nav-icon">
            <SearchIcon></SearchIcon>
            </span>{' '} 
            <span className="nav-text">Search</span>
            </li>
            </NavLink>
      <NavLink to="/">
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
      {user?(<li>
          <span className="nav-icon">
          <LogoutIcon></LogoutIcon>
            </span> {' '} 
            <span className="nav-text" onClick={logout}>Log out</span>
          </li>):("")}
      
       
    </ul>
</div>
</section>
  )
}

export default Header
