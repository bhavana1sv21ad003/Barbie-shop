import React, { useState } from "react";
import Logo from "../assets/pic2.png";
import { Link,Routes,Route } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> type </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
       
      </div>
    </div>
  );
}

export default Navbar;

