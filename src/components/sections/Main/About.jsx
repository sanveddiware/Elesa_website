// import React from "react";
// import ShinyText from "../../UI/Shinytext";
// import TeamSection from "./Teamsection";
// import { team1,team2,team3,team4,quotes } from "../../../data";

// const About = () => {
//   return (
//     <div className="py-16 text-white">
//       {/* Title */}
//       <h2 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
//         Meet the Team
//       </h2>

//       <TeamSection team={team1} title="Advisors" quote={quotes.inspiration} />
//       <TeamSection team={team2} title="Mentor Board" />
//       <TeamSection team={team3} title="Cheif Board" />
//       <TeamSection team={team4} title="Joint Board" />

//     </div>
//   );
// };

// export default About;


import React, { useState } from "react";
import ShinyText from "../../UI/Shinytext";
import TeamSection from "./Teamsection";
import { team1, team2, team3, team4, quotes } from "../../../data";

const About = () => {
  const boards = [
    { key: "mentor", team: team2, title: "Mentor Board" },
    { key: "chief", team: team3, title: "Chief Board" },
    { key: "joint", team: team4, title: "Joint Board" },
  ];

  const [activeBoard, setActiveBoard] = useState("chief"); // default Chief

  const getActiveBoard = () => {
    const board = boards.find((b) => b.key === activeBoard);
    return board ? board : boards[1]; // default to chief
  };

  return (
    <div className="py-16 text-white">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
        Meet the Team
      </h2>

      {/* Advisors — Always visible */}
      <TeamSection team={team1} title="Advisors" quote={quotes.inspiration} />

      {/* Navigation Peel */}
      <div className="flex justify-center gap-6 my-8">
        {boards.map((board) => (
          <button
            key={board.key}
            onClick={() => setActiveBoard(board.key)}
            className={`px-6 py-3 text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              activeBoard === board.key
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
            }`}
          >
            {board.key.charAt(0).toUpperCase() + board.key.slice(1)} Board
          </button>
        ))}
      </div>

      {/* Show active board content without route change */}
      <div className="transition-all duration-500 ease-in-out">
        <TeamSection
          team={getActiveBoard().team}
          title={getActiveBoard().title}
        />
      </div>
    </div>
  );
};

export default About;
