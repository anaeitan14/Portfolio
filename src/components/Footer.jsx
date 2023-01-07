import React from "react";
import "../App.css";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  const iconHover = (e) => {
    e.target.style.backgroundColor = "blue";
  };

  return (
    <div className="footer p-3 home-about-social">
      <a
        Style={"color:white;"}
        onMouseOverCapture={(e)=>(e.target.style.color="#0d6efd")}
        onMouseOutCapture={(e)=>(e.target.style.color="white")}
        
        href="https://www.linkedin.com/in/eitan-lichtenstein-037162242/"
        target="_blank"
      >
        <BsLinkedin size={28} />
      </a>
    </div>
  );
}
