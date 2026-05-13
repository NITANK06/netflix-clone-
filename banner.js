import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header className="banner">
      <div className="banner_contents">
        <h1 className="banner_title">Money Heist</h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">
          A criminal mastermind who goes by "The Professor" has a plan to pull
          off the biggest heist in recorded history.
        </h1>
      </div>

      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
