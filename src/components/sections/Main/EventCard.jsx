import React from "react";
import { Link } from "react-router-dom";

function EventCard({ title, date, description, imageUrl }) {
  // Convert title into a URL-friendly ID
  const eventId = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <Link to={`/events/${eventId}`} className="block w-full px-4">
      <div className="flex flex-col md:flex-row items-stretch bg-white/20 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 w-full max-w-4xl mx-auto h-auto md:h-48 mb-4">
        
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-auto">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-6 flex flex-col gap-2 flex-grow h-full">
          <h2 className="text-lg md:text-2xl font-bold text-blue-400">{title}</h2>
          <p className="text-white/90 text-sm md:text-base">{date}</p>
          {description && (
            <p className="text-white/70 text-sm md:text-base line-clamp-6">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
