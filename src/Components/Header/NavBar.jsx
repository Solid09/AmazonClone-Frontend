import "./CSS/NavBar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/reducers/authReducers";
import axios from "axios";

import logo from "./Assets/amazonLogo.jpeg";
import usFlag from "./Assets/UnitedStatesFlag.png";

import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(props) {
  const dispatch = useDispatch();

  const [isAuthBtnHover, setIsAuthBtnHover] = useState(false);

  const onLogoutBtnClick = async () =>{
    dispatch(logout());
    await axios.post('/api/auth/logout', {}, {withCredentials: true});
  }

  return (
    <>
      <div className="leftBarContainer">
        <Link to="/">
          <img src={logo} alt="amazon logo" className="amazonLogo" />
        </Link>
        <button className="deliveryButton">
          <span className="deliveryText"> Deliver to</span>
          <span className="delveryCountryText"> Pakistan </span>
        </button>
      </div>
      <div className="centerBarContainer">
        <button className="filterButton">All</button>
        <input className="searchInputField" placeholder="Search Amazon"></input>
        <button className="searchButton">Search</button>
      </div>
      <div className="rightBarContainer">
        <button className="languageButton">
          <img src={usFlag} alt="en lang" className="languageFlag"></img>
          <span className="langText">
            <b>EN</b>
          </span>
          <div className="languageButton-blackSpaceHeader"></div>
          <div className="languageButton-expandInfo"></div>
        </button>

        <Link className="authButton" to="/signin-email">
          <p>
            Hello, TODO
            <br />
            <b style={{ fontSize: "0.875rem" }}>Account &amp; Lists</b>
          </p>
          <div className="authButton-blackSpaceHeader"></div>
          <div className="authButton-expandInfo"></div>
        </Link>
        <button className="logoutBtn" onClick={onLogoutBtnClick}>Logout</button>

        <div className="returnsAndOrdersText">
          <p>
            Returns
            <br />
            <b style={{ fontSize: "0.875rem" }}>&amp; Orders</b>
          </p>
        </div>

        <Link className="cart" to="/cart">
          <p>Cart</p>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
