import React from "react";
import { Link } from "react-router-dom";
import front from "../assets/front.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${front})` }}>
      <div className="headerContainer">
        <h1><u><b> BARBIE SHOP</b></u></h1>
        <p><marquee>BARBIE WORLD</marquee></p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;