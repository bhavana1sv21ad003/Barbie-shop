import React from "react";
import barbie from "../assets/pic.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${barbie})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        This article is about the fashion doll and brand. For other uses, see Barbie (disambiguation).
Barbie
Barbie and her male counterpart, Ken, have been described as the two most popular dolls in the world.[2] Mattel generates a large portion of Barbie revenue though related merchandise — accessories, clothes, friends, and relatives of Barbie. Writing for Journal of Popular Culture in 1977, Don Richard Cox noted that Barbie has a significant impact on social values by conveying characteristics of female independence, and with her multitude of accessories, an idealized upscale lifestyle that can be shar
        </p>
      </div>
    </div>
  );
}

export default About;