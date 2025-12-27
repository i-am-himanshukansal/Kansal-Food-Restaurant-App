import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />

      <div className="container">
        {/* LEFT / MAIN BANNER */}
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>

          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero1.png" alt="Freshly prepared dishes" />
            </div>

            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Experiences</h1>
                <img src="/threelines.svg" alt="Decorative lines" />
              </div>

              <img
                src="/logo.svg"
                alt="Kansal Food Zone Logo"
                className="logo"
              />
            </div>
          </div>
        </div>

        {/* RIGHT / SECONDARY BANNER */}
        <div className="banner">
          <div className="imageBox">
            <img src="/hero2.png" alt="Restaurant special dishes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
