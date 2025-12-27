import React from "react";
import data from "../../restApi.json";

const Team = () => {
  const teamMembers = data?.data?.[0]?.team || [];

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Our team is a group of dedicated professionals who are passionate
            about delivering excellence. With experience, creativity, and
            teamwork, we work together to provide the best service and ensure
            complete customer satisfaction.
          </p>
        </div>

        <div className="team_container">
          {teamMembers.map((element) => {
            return (
              <div className="card team_members" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
