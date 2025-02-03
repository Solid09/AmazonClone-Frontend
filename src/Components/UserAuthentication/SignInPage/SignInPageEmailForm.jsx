import "./CSS/SignInPage.css";
import { useEffect, useState } from "react";
import AuthPageFooter from "../AuthPageFooter.jsx";
import AuthPageMenuDivider from "../AuthPageMenuDivider.jsx";
import AmazonBussinessLink from "../AmazonBussinessLink.jsx";
import AuthPageTopLogo from "../AuthPageTopLogo.jsx";
import AuthPagePermissionText from "../AuthPagePermissionText.jsx";
import axios from "axios";

import { FaExclamation } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

function SignInPage(props) {
  const navigate = useNavigate();

  const [needHelpIsActive, setNeedHelpIsActive] = useState(false);
  const [signInEmail, setSignInEmail] = useState("");
  const [isWrongEmail, setIsWrongEmail] = useState(false);
  const [response, setResponse] = useState({});

  const handleNeedHelpBtnClick = () => {
    setNeedHelpIsActive((n) => !n);
  };

  const handleContinueBtnClick = async (e) => {
    try {
      const _response = await axios.post("/api/auth/verifyEmail", {
        email: signInEmail,
      });
      setResponse(_response);

      if (_response.data.success) {
        setIsWrongEmail(false);
        props.handleSignInEmail(signInEmail);
        navigate("/signin-pass", { replace: true });
      } else {
        setIsWrongEmail(true);
      }
    } catch (err) {
      setResponse(err.response.data);
      setIsWrongEmail(true);
    }
  };

  useEffect(() => {
    //setting page name
    document.title = "Amazon Sign-In";
  }, []);

  return (
    <div className="signInPage">
      <AuthPageTopLogo />
      <div className="signInFormBorder">
        <div className="signInFormContainer">
          <h1
            style={{
              fontSize: "28px",
              margin: "0 0 20px 0",
              fontWeight: "normal",
            }}
          >
            Sign in
          </h1>
          <label
            htmlFor="signInEmail"
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#111111",
              padding: "0 0 1px 2px",
              margin: "0 0 3px 0",
            }}
          >
            Email or mobile phone number
          </label>
          <input
            type="text"
            id="signInEmail"
            className={
              !isWrongEmail
                ? "signIn-correctEmailInput"
                : "signIn-wrongEmailInput"
            }
            onChange={(e) => {
              setSignInEmail(e.target.value);
            }}
            required
          ></input>

          {/*Error message upon entering wrong email/phone No */}
          {isWrongEmail && (
            <div style={{ display: "flex", marginTop: "5px" }}>
              <FaExclamation
                style={{
                  margin: "2px 0 0 0",
                  display: "inline-block",
                  fontSize: "12px",
                  color: "red",
                }}
              />
              <span
                style={{
                  color: "#C40000",
                  fontSize: "12px",
                  margin: "0 0 0 5px",
                }}
              >
                {response.message}
              </span>
            </div>
          )}

          <button className="signIn-Continue" onClick={handleContinueBtnClick}>
            <span>Continue</span>
          </button>

          <AuthPagePermissionText />
          <div className="signIn-needHelpContainer">
            <button
              onClick={handleNeedHelpBtnClick}
              style={{ margin: "0 0 0 5px" }}
              className={
                needHelpIsActive
                  ? "signIn-needHelp-arrowBottom"
                  : "signIn-needHelp-arrowRight"
              }
            >
              <span style={{ marginLeft: "-5px" }}>Need help?</span>
            </button>
            {needHelpIsActive && (
              <>
                <br />
                <a href="#" style={{ margin: "0 0 0 14px" }}>
                  Forgot your password?
                </a>
                <br />
                <a href="#" style={{ margin: "0 0 0 14px" }}>
                  Other issues with Sign-in
                </a>
              </>
            )}
          </div>
          <AuthPageMenuDivider />
          <AmazonBussinessLink />
        </div>
      </div>

      <div className="signIn-signUpLink">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: " 20px 0 0 0",
          }}
        >
          <div className="signIn-signUpLink-menuDivider"></div>
          <span className="signIn-signUpLink-text">New to Amazon?</span>
          <div className="signIn-signUpLink-menuDivider"></div>
        </div>
        <br />
        <Link to="/signup" className="signIn-signUpLink-a">
          <span>Create your Amazon account</span>
        </Link>
      </div>

      <AuthPageFooter />
    </div>
  );
}

export default SignInPage;
