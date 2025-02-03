import "./CSS/SignInPage.css";
import { useState, useEffect } from "react";
import AuthPageFooter from "../AuthPageFooter";
import AuthPageTopLogo from "../AuthPageTopLogo";
import { Link, useNavigate } from "react-router-dom";
import { FaExclamation, FaExclamationTriangle } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/reducers/authReducers";

function SignInPagePass(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [signInPass, setSignInPass] = useState("");
  const [passFieldIsEmpty, setPassFieldIsEmpty] = useState(false);
  const [errorSigningIn, setErrorSigningIn] = useState(false);
  const [response, setResponse] = useState({});

  const handleSignInBtnClick = async () => {
    if (signInPass.length === 0) {
      setPassFieldIsEmpty(true);
    } else {
      setPassFieldIsEmpty(false);
      try {
        const _response = await axios.post("/api/auth/login", {
          email: props.userEmail,
          password: signInPass,
        });
        setResponse(_response);

        if (_response.data.success === true) {
          dispatch(login(_response.data.userId));
          setErrorSigningIn(false);
          navigate("/");
        } else {
          setErrorSigningIn(true);
        }
      } catch (err) {
        setErrorSigningIn(true);
      }
    }
  };

  useEffect(() => {
    document.title = "Amazon Sign-In";
    
    if(!props.userEmail){
      navigate("/signin-email");
    }
  }, []);

  return (
    <div className="signInPagePass">
      <AuthPageTopLogo />

      {errorSigningIn && ( // error feedback on wrong login info
        <div className="signInPagePass-errorSigningIn">
          <div className="signInPagePass-errorSigningIn-exCarrier">
            <FaExclamationTriangle />
          </div>
          <div>
            <h3 className="signInPagePass-errorSigningIn-h3">
              There was a problem
            </h3>
            <p className="signInPagePass-errorSigningIn-p">No account found!</p>
          </div>
        </div>
      )}

      <div className="signInFormBorder" style={{ margin: "0 0 30px 0" }}>
        <div className="signInFormContainer">
          <h1
            style={{
              fontSize: "28px",
              margin: "0 0 20px 0",
              fontWeight: "normal",
              width: "100%",
            }}
          >
            Sign in
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            <span style={{ fontSize: "13px", margin: "0 5px 0 0" }}>
              {props.userEmail}
            </span>
            <Link to="/signin-email" className="signInPass-changeEmail">
              Change
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              margin: "20px 0 0 0",
            }}
          >
            <label
              htmlFor="signInPassword"
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#111111",
                padding: "0 0 1px 2px",
                margin: "0 0 3px 0",
              }}
            >
              Password
            </label>
            <a href="#" className="signInPass-recoverPass">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            id="signInPassword"
            className={
              passFieldIsEmpty
                ? "signIn-wrongPasswordInput"
                : "signIn-passwordInput"
            }
            onChange={(e) => {
              setSignInPass(e.target.value);
            }}
          ></input>

          {
            //error on entering null password
            passFieldIsEmpty && (
              <div style={{ display: "flex", marginTop: "5px" }}>
                <FaExclamation
                  style={{
                    margin: "2px 0 0 0",
                    display: "inline-block",
                    fontSize: "12px",
                    color: "red",
                  }}
                />
                <span className="signIn-emptyPassErrorText">
                  Enter your password
                </span>
              </div>
            )
          }

          <button
            className="signIn-SignIn"
            style={{ margin: "20px 0 20px 0" }}
            onClick={handleSignInBtnClick}
          >
            <span>Sign in</span>
          </button>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type="checkbox" />
            <span style={{ fontSize: "13px", margin: "0 5px 0 5px" }}>
              Keep me signed in.
            </span>
            <a href="#" className="signInPass-detailsInfo">
              Details
            </a>
          </div>
        </div>
      </div>

      <AuthPageFooter />
    </div>
  );
}

export default SignInPagePass;
