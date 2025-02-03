import amazonLogo from './Assets/amazonlogo.jpg'

import { Link } from 'react-router-dom';

function AuthPageTopLogo() {
  return (
    <Link to="/">
      <img
        src={amazonLogo}
        alt="amazon logo"
        style={{
          width: "108px",
          height: "35px",
          objectFit: "cover",
          padding: "10px 0 0 0",
          margin: "0 0 10px 0",
        }}
      ></img>
    </Link>
  );
}

export default AuthPageTopLogo;
