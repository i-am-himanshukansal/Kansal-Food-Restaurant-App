import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The only thing we are serious about is food.</p>
          </div>

          <p className="mid">
            At Kansal Restaurant Web-App, we believe that great food brings people together.
            Our passion lies in crafting delicious dishes using fresh ingredients,
            authentic recipes and a perfect blend of traditional and modern flavors.
          </p>

          <p className="mid">
            Every meal we serve is prepared with care, consistency, and quality in mind.
            From hearty comfort food to flavorful specialties, our menu is designed to
            satisfy every craving and create a memorable dining experience for our guests.
            Whether you are dining in, ordering online, or reserving a table,
            Kansal Food Zone is committed to providing exceptional taste, warm service,
            and a welcoming atmosphere—anytime, every time.
          </p>

          <Link to={"/"}>
            Explore Menu
            <span>
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>

        <div className="banner">
          <img src="/about.png" alt="About Kansal Food Zone" />
        </div>
      </div>
    </section>
  );
};

export default About;
