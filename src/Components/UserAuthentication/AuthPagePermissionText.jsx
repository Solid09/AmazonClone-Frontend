import "./CSS/AuthPagePermissionText.css";

function AuthPagePermissionText() {
  return (
    <div className="authPage-permissionText">
      <span>
        By continuing, you agree to Amazon's{" "}
        <a href="#" className="authPage-permissionText-Links">
          Conditions of
          <br />
          Use
        </a>{" "}
        and{" "}
        <a href="#" className="authPage-permissionText-Links">
          Privacy Notice.
        </a>
      </span>
    </div>
  );
}

export default AuthPagePermissionText;
