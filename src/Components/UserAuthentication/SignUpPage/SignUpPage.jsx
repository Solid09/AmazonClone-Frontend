import AuthPageTopLogo from "../AuthPageTopLogo";
import AuthPagePermissionText from "../AuthPagePermissionText.jsx";
import "./CSS/SignUpPage.css";
import AuthPageMenuDivider from "../AuthPageMenuDivider.jsx";
import AmazonBussinessLink from "../AmazonBussinessLink.jsx";
import AuthPageFooter from "../AuthPageFooter.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/reducers/authReducers";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaExclamation } from "react-icons/fa";

function SignUpPage() {
  const navigate = useNavigate();
  const dispatch  = useDispatch();

  const [isWrongEmail, setIsWrongEmail] = useState(false);
  const [signInEmail, setSignInEmail] = useState("");
  const [passIsSame, setPassIsSame] = useState(true);
  const [isNameFieldEmpty, setIsNameFieldEmpty] = useState(false);
  const [fullName, setFullName] = useState("");
  const [pass, setPass] = useState("");
  const [reEnterPass, setReEnterPass] = useState("");
  const [isPassEmpty, setIsPassEmpty] = useState(false);
  const [isReEnterPassEmpty, setIsReEnterPassEmpty] = useState(false);
  const [isCompletePass, setIsCompletePass] = useState(true);

  const handleVerfiyEmailBtnClick = async () => {
    let verifiedName = false,
      verifiedEmail = false,
      verifiedPass = false;

    if (verifyName()) {
      verifiedName = true;
    }
    if (verifyEmail()) {
      verifiedEmail = true;
    }
    if (verifyPass()) {
      verifiedPass = true;
    }

    if (verifiedName && verifiedEmail && verifiedPass) {
      const user = {
        email: signInEmail,
        password: pass,
        fullName: fullName,
      };
      const userProf = {
        fullName: fullName,
      };
      try {
        const response = await axios.post("/api/auth/register", {
          user,
          userProf,
        });
        if (response.data.success) {
          dispatch(login(response.data.userId));
          navigate("/");
        } else {
          // TODO:output error for user
        }
      } catch (err) {
        console.log(err.response.data.message);
        console.log(err.response.data.error);
      }
    }
  };

  const verifyName = () => {
    if (fullName.length === 0) {
      setIsNameFieldEmpty(true);
    } else {
      setIsNameFieldEmpty(false);
      return true;
    }
  };

  const verifyEmail = () => {
    // checking entered email/phone No
    const emailValidationKey = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNoValidationKey = /^\+?92?\d{10,15}$/;

    if (
      emailValidationKey.test(signInEmail) ||
      phoneNoValidationKey.test(signInEmail)
    ) {
      setIsWrongEmail(false);
      return true;
    } else {
      setIsWrongEmail(true);
    }
  };

  const verifyPass = () => {
    const checkIfPassSame = () => {
      if (pass === reEnterPass) {
        setPassIsSame(true);
        return true;
      } else {
        setPassIsSame(false);
      }
    };

    const checkPassLength = () => {
      if (pass.length < 6) {
        setIsCompletePass(false);
        return false;
      } else {
        setIsCompletePass(true);
        return true;
      }
    };

    if (pass.length === 0) {
      setIsPassEmpty(true);
    } else {
      setIsPassEmpty(false);
    }
    if (reEnterPass.length === 0) {
      setIsReEnterPassEmpty(true);
    } else {
      setIsReEnterPassEmpty(false);
    }

    if (checkIfPassSame() && checkPassLength()) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    document.title = "Amazon Registration";
  }, []);

  return (
    <div className="signUpPage">
      <AuthPageTopLogo />
      <div className="signUpFormBorder">
        <div className="signUpFormContainer">
          <h1
            style={{
              fontSize: "28px",
              margin: "0 0 20px 0",
              fontWeight: "normal",
            }}
          >
            Create account
          </h1>

          {/* NAME INPUT FIELD */}
          <label
            htmlFor="signUpName"
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#111111",
              padding: "0 0 1px 0",
              margin: "0 0 3px 0",
            }}
          >
            Your name
          </label>
          <input
            type="text"
            id="signUpName"
            className={
              !isNameFieldEmpty ? "signUp-correctName" : "signUp-wrongName"
            }
            placeholder="First and last name"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            required
          ></input>
          {isNameFieldEmpty && (
            <>
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
                  Enter your name
                </span>
              </div>
            </>
          )}

          {/* EMAIL/PHONE NO. INPUT FIELD */}
          <label
            htmlFor="signUpEmailPhoneNo"
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#111111",
              padding: "0 0 1px 0",
              margin: "15px 0 3px 0",
            }}
          >
            Mobile number or email
          </label>
          <input
            type="text"
            id="signUpEmailPhoneNo"
            className={
              !isWrongEmail ? "signUp-correctEmail" : "signUp-wrongEmail"
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
                Wrong or Invalid email address or mobile phone number. Please
                correct and try again.
              </span>
            </div>
          )}

          {/* PASSWORD INPUT FIELD */}
          <label
            htmlFor="signUpPassword"
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#111111",
              padding: "0 0 1px 0",
              margin: "17px 0 3px 0",
            }}
          >
            Password
          </label>
          <input
            type="password"
            id="signUpPassword"
            className={
              isPassEmpty || !isCompletePass
                ? "signUp-wrongPass"
                : "signUp-correctPass"
            }
            placeholder="At least 6 characters"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            required
          ></input>
          {!isCompletePass && (
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
                Minimum 6 characters required
              </span>
            </div>
          )}

          {/* RE-ENTER PASSWORD INPUT FIELD */}
          <label
            htmlFor="signUpReEnterPassword"
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#111111",
              padding: "0 0 1px 0",
              margin: "15px 0 3px 0",
            }}
          >
            Re-enter password
          </label>
          <input
            type="password"
            id="signUpReEnterPassword"
            className={
              passIsSame ? "signUp-correctREPass" : "signUp-wrongREPass"
            }
            onChange={(e) => {
              setReEnterPass(e.target.value);
            }}
            required
          ></input>
          {isReEnterPassEmpty && !isPassEmpty && (
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
                Type your password again
              </span>
            </div>
          )}
          {!passIsSame && !isReEnterPassEmpty && (
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
                Passwords must match
              </span>
            </div>
          )}

          <button
            className="signUp-Continue"
            onClick={() => {
              handleVerfiyEmailBtnClick();
            }}
          >
            <span>Verify Email</span>
          </button>

          <AuthPagePermissionText />

          <AuthPageMenuDivider style={{ margin: "30px 0 13px 0" }} />

          <AmazonBussinessLink style={{ margin: "0 0 10px 0" }} />

          <div
            style={{
              height: "2px",
              width: "100%",
              backgroundImage:
                "linear-gradient(to right, rgba(192, 192, 192, 0.001), rgba(192, 192, 192, 0.52), rgba(192, 192, 192, 0.001))",
              margin: "0 0 20px 0",
            }}
          ></div>

          <div>
            <span style={{ fontSize: "13px" }}>Already have an account?</span>
            <Link to="/signin-email" className="signUpPage-signInLink">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <AuthPageFooter style={{ margin: "30px 0 0 0" }} />
    </div>
  );
}

export default SignUpPage;
