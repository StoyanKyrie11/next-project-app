import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Webdev</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest web dev news!
      </p>
      {/* Customizing JSX based on a conditional cluase inside styles section */}
    </div>
  );
};

export default Header;
