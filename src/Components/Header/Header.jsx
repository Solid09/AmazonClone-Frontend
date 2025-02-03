import { useEffect, useState } from "react";

import NavBar from "./NavBar.jsx";
import NavFoot from "./NavFoot.jsx";
import CategorySideBar from "../CategorySideBar/CategorySideBar.jsx";

import "./CSS/Header.css";

function Header() {
  const [sideBarStatus, changeSideBarStatus] = useState(false);

  const ChangeSideBarStatus = (e) => {
    if(!sideBarStatus){
      changeSideBarStatus(true);
    } else {
      setTimeout(()=>{
        changeSideBarStatus(false);
      }, 250);
    }
  };

  useEffect(() => {
    sideBarStatus
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideBarStatus]);

  return (
    <div style={{ maxHeight: "99px" }} id="header">
      {sideBarStatus && (
        <div>
          <CategorySideBar AlterSideBarStatus={ChangeSideBarStatus} />
        </div>
      )}
      <div className="navBar">
        <NavBar />
      </div>
      <div className="navFoot">
        <NavFoot AlterSideBarStatus={ChangeSideBarStatus} />
      </div>
    </div>
  );
}

export default Header;
