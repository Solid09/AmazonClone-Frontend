import "./CSS/CategorySideBar.css";
import emptyPFP from "./Assets/EmptyPFP.jpeg";
import usFlag from "./Assets/UnitedStatesFlag.png";
import { useState } from "react";

function CategorySideBar({ AlterSideBarStatus }) {
  const [barStatus, setBarStatus] = useState(true);

  return (
    <div className="categorySideBar">
      <div
        className={barStatus ? "emptySpace" : "emptySpacePush"}
        onClick={() => {
          setBarStatus(false);
          AlterSideBarStatus();
        }}
      ></div>

      <div className={barStatus ? "fullSideBar" : "fullSideBarPush"}>
        <button
          className="backButton"
          onClick={() => {
            setBarStatus(false);
            AlterSideBarStatus();
          }}
        >
          <div className="closeSymbol">&#x2715;</div>
        </button>

        <div className="profileContainer">
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              height: "3.125rem",
            }}
          >
            <img className="profileImg" src={emptyPFP} alt="profile picture" />
            <b>Hello, TODO</b>
          </a>
        </div>

        <div className="sideBar">
          <div className="categories">
            <div className="digitalContentDevices">
              <h1 className="sideBarHeading">Digital Content &amp; Devices</h1>
              <button className="button">
                Amazon Music<div className="expandArrow"></div>
              </button>
              <button className="button">
                Kindle E-readers &amp; Books <div className="expandArrow"></div>
              </button>
              <button className="button">
                Amazon Appstore <div className="expandArrow"></div>
              </button>
            </div>

            <div className="menuDivider"></div>

            <div className="shopByDepartment">
              <h1 className="sideBarHeading">Shop By Department</h1>
              <button className="button">
                Electronics <div className="expandArrow"></div>
              </button>
              <button className="button">
                Computers <div className="expandArrow"></div>
              </button>
              <button className="button">
                Smart Home <div className="expandArrow"></div>
              </button>
              <button className="button">
                Arts &amp; Crafts<div className="expandArrow"></div>
              </button>
              <button className="seeAllButton">
                See All
                <div className="bellowExpandArrow"></div>
              </button>
            </div>

            <div className="menuDivider"></div>

            <div className="programsFeatures">
              <h1 className="sideBarHeading">Programs &amp; Features</h1>
              <button className="button">
                Gift Cards <div className="expandArrow"></div>
              </button>
              <a href="#" className="sideBarlink">
                Shop By Interest
              </a>
              <button className="button">
                Amazon Live <div className="expandArrow"></div>
              </button>
              <button className="button">
                International Shopping <div className="expandArrow"></div>
              </button>
              <button className="seeAllButton">
                See All <div className="bellowExpandArrow"></div>
              </button>
            </div>

            <div className="menuDivider"></div>

            <div className="helpSettings">
              <h1 className="sideBarHeading">Help &amp; Settings</h1>
              <a className="sideBarlink">Your Account</a>
              <a className="sideBarlink">&#x1F30D; English</a>
              <a className="sideBarlink">
                <img
                  src={usFlag}
                  alt="en lang"
                  className="languageFlagImg"
                ></img>
                United States
              </a>
              <a className="sideBarlink">Customer Service</a>
              <a className="sideBarlink">Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySideBar;
