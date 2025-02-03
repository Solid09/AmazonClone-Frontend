import "./CSS/MiddleFoot.css";
import logo from "./Assets/amazonLogo.jpeg";
import usFlag from "./Assets/UnitedStatesFlag.png";

import { Link } from "react-router-dom";

function MiddleFoot() {
  return (
    <div className="middleFoot">
      <Link to="/">
        <img src={logo} alt="amazon logo" className="amazonLogoMiddle" />
      </Link>

      <div className="threeItems">
        <Link to="#">
          &#x1F30D;
          <span style={{ padding: "0 .5rem" }}> English</span>
        </Link>
        <Link to="#">
          <b style={{color:'white'}}>$</b>
          <span style={{ padding: "0 .5rem" }}>
            USD - U.S. Dollar
          </span>
        </Link>
        <Link to="#">
          <img
            src={usFlag}
            alt="en lang"
            style={{ height: "1rem", width: "1rem" }}
          ></img>
          <span style={{ padding: "0 .5rem" }}>United States</span>
        </Link>
      </div>
    </div>
  );
}

export default MiddleFoot;
