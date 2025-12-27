import React from "react";
import data from "../../restApi.json";

const WhoAreWe = () => {
  const whoWeAre = data?.data?.[0]?.who_we_are || [];

  return (
    <section className="who_are_we" id="who_are_we">
      
      {/* 🔹 MAIN FLEX COLUMN */}
      <div className="container column">

        {/* 🔹 TOP BLOCK (Heading + Description) */}
        <div className="text_banner header_block">
          <h1 className="heading">WHO WE ARE</h1>
          <p className="description">
            We are a passionate team dedicated to delivering exceptional food
            experiences. Our journey is defined by quality, creativity, and
            customer satisfaction.
          </p>
        </div>

        {/* 🔹 BOTTOM BLOCK (Stats + Image + Stats) */}
        <div className="container content_block">

          {/* LEFT STATS */}
          <div className="text_banner">
            {whoWeAre.slice(0, 2).map((item) => (
              <div className="card" key={item.id}>
                <h1 className="heading" style={{ fontWeight: 300 }}>
                  {item.number}
                </h1>
                <p>{item.title}</p>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="image_banner">
            <img
              src="/center.svg"
              alt=""
              aria-hidden="true"
              className="gradient_bg"
            />
            <img src="/whoweare.png" alt="Who we are" />
          </div>

          {/* RIGHT STATS */}
          <div className="text_banner">
            {whoWeAre.slice(2).map((item) => (
              <div className="card" key={item.id}>
                <h1 className="heading" style={{ fontWeight: 300 }}>
                  {item.number}
                </h1>
                <p>{item.title}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
