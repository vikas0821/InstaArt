import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import LoginIcon from '@mui/icons-material/Login';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';
import PortraitIcon from '@mui/icons-material/Portrait';

const Sidenav = () => {
  return (
    <div className="sidenav ">
      <span className="mx-2 p-2" ><h1 className="text-white text-3xl">InstaArt</h1></span>
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <span><HomeIcon /></span>
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <span><SearchIcon /></span>
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <span><ExploreIcon /></span>
          <span>Explore</span>
        </button>

        <button className="sidenav__button">
          <span><PortraitIcon /></span>
          <span>Person</span>
        </button>


        <button className="sidenav__button">
          <span><FavoriteBorderIcon /></span>
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <span><AddCircleOutlineIcon /></span>
          <span>Create</span>
        </button>

        <button className="sidenav__button">
          <span><LoginIcon /></span>
          <span>Log in</span>
        </button>

        <button className="sidenav__button">
          <span><LogoutIcon/></span>
          <span>Logout</span>
        </button>

      </div>

      <button className="sidenav__button">
        <MenuIcon />
        <span className="sidenav__buttonText">More</span>
      </button>


    </div>
  )
}

export default Sidenav