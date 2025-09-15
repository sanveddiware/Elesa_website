import React from "react";

const EventCard = ({ title, date, imageUrl, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block px-4" // ✅ small padding for mobile
    >
      <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden w-full max-w-4xl mx-auto mb-6 border border-white/20 hover:shadow-2xl transition-shadow duration-300">
        
        {/* Event Image */}
        <div className="w-full md:w-1/3 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-56 md:h-48 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>

        {/* Event Info */}
        <div className="flex-1 p-6 text-white text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            {title}
          </h2>
          {date && <p className="text-gray-200 mt-2">{date}</p>}
          <p className="text-gray-300 mt-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
            Duis vitae sapien non magna tristique feugiat.
          </p>
        </div>
      </div>
    </a>
  );
};

export default EventCard;
