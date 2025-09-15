import React from "react";
import ShinyText from "../../UI/Shinytext";
import TeamSection from "./Teamsection";
import { team1,team2,team3,quotes } from "../../../data";

const About = () => {
  return (
    <div className="py-16 text-white">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
        Meet the Team
      </h2>

      <TeamSection team={team1} title="Advisors" quote={quotes.inspiration} />
      <TeamSection team={team2} title="Joint Board" />
      <TeamSection team={team3} title="Cheif Board" />
      <TeamSection team={team3} title="Mentor Board" />

    </div>
  );
};

export default About;
