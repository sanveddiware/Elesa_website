import React from "react";
import ShinyText from "../../UI/Shinytext";

const TeamSection = ({ team, title, quote }) => {
  return (
    <div className="py-16 text-white">
      {/* Title */}
      <h2 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
        {title}
      </h2>

      {/* Shiny subtitle (quote) */}
      {quote && (
        <div className="text-3xl md:text-4xl font-semibold mb-12 text-center ">
          <ShinyText
            text={quote}
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </div>
      )}

      {/* Auto layout grid */}
      <div
        className={`
          grid gap-10 px-4 mx-auto
          ${team.length === 1 ? "grid-cols-1 max-w-sm" : ""}
          ${team.length === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-4xl" : ""}
          ${team.length >= 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl" : ""}
        `}
      >
        {team.map((member, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl p-6 flex flex-col items-center text-center 
                        
                       backdrop-blur-xl shadow-lg 
                       border border-white/20 
                       hover:scale-105 hover:shadow-red-400/30 transition-transform duration-300"
          >
            {/* Shiny overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-20 pointer-events-none"></div>

            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 shadow-md border-4 border-white/20"
            />
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
