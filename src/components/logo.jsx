import React from "react";
import logo from "../assets/logo.png"; // make sure this path is correct

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Logo"
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        width: "220px", // slightly larger
        height: "auto",
        zIndex: 1000,
        objectFit: "contain",
        background: "transparent",
      }}
    />
  );
};

export default Logo;
