import "./CSS/TopOfFoot.css";

function TopOfFoot() {
  return (
    <div className="topOfFoot">
      <div className="columnDiv" style={{ marginRight: "7.5rem" }}>
        <h1 className="header">Get to Know Us</h1>
        <a href="#">Careers</a>
        <a href="#">Blog</a>
        <a href="#">About Amazon</a>
        <a href="#">Investor Relations</a>
        <a href="#">Amazon Devices</a>
        <a href="#">Amazon Science</a>
      </div>

      <div className="columnDiv" style={{ marginRight: "7.5rem" }}>
        <h1 className="header">Make Money with Us</h1>
        <a href="#">Sell products on Amazon</a>
        <a href="#">Sell on Amazon Business</a>
        <a href="#">Sell apps on Amazon</a>
        <a href="#">Become an Affiliate</a>
        <a href="#">Advertise Your Products</a>
        <a href="#">Self-Publish with Us</a>
        <a href="#">Host an Amazon Hub</a>
        <a href="#">
          {" "}
          See More Make Money
          <br />
          with Us
        </a>
      </div>

      <div className="columnDiv" style={{ marginRight: "7.5rem" }}>
        <h1 className="header">Amazon Payment Products</h1>
        <a href="#">Amazon Business Card</a>
        <a href="#">Shop with Points</a>
        <a href="#">Reload Your Balance</a>
        <a href="#">Amazon Currency Converter</a>
      </div>

      <div className="columnDiv">
        <h1 className="header">Let Us Help You</h1>
        <a href="#">
          Amazon and COVID-
          <br />
          19
        </a>
        <a href="#">Your Account</a>
        <a href="#">Your Orders</a>
        <a href="#">
          Shipping Rates &<br />
          Policies
        </a>
        <a href="#">
          Returns &<br />
          Replacements
        </a>
        <a href="#">
          Manage Your
          <br />
          Content and Devices
        </a>
        <a href="#">Help</a>
      </div>
    </div>
  );
}

export default TopOfFoot;
