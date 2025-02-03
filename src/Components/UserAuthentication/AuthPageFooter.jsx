import "./CSS/AuthPageFooter.css";

function AuthPageFooter(props) {
  return (
    <div className="signInPage-foot" style={props.style}>
      <div className="signInPage-foot-divider"></div>
      <div className="signInPage-foot-usefullLinks">
        <a href="#" style={{ margin: "0 20px 0 0" }}>
          Conditions of Use{" "}
        </a>
        <a href="#" style={{ margin: "0 20px 0 0" }}>
          Privacy Notice
        </a>
        <a href="#">Help</a>
      </div>
      <span
        style={{ fontSize: "11px", color: "#555555", margin: "10px 0 0 0" }}
      >
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </span>
    </div>
  );
}

export default AuthPageFooter;
