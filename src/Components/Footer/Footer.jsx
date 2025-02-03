import TopOfFoot from "./TopOfFoot.jsx";
import MiddleFoot from "./MiddleFoot.jsx";
import BottomFoot from "./BottomFoot.jsx";

import "./CSS/Footer.css";

function Footer() {
  const handleBackToTopBtnClick = () => {
    document.getElementById("header").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="footer">
      <button className="backToTop" onClick={handleBackToTopBtnClick}>
        Back to top
      </button>

      <TopOfFoot />

      <div className="topMenuDivider"></div>

      <MiddleFoot />

      <BottomFoot />

      <div className="footOfFooter">
        <div>
          <a href="#" className="footText">
            Condition of Use
          </a>
          <a href="#" className="footText">
            Privacy Notice
          </a>
          <a href="#" className="footText">
            Consumer Health Data Privacy Disclosure
          </a>
          <a href="#" className="footText">
            Your Ads Privacy Choices
          </a>
        </div>
        <span className="copyrigthText">
          &#169; 1996-2024, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </div>
  );
}

export default Footer;
