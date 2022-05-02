import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const Navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/home" style={{ color: "#FFF", fontSize: "1.5rem", textDecoration: "none" }}>
          Movies +
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
