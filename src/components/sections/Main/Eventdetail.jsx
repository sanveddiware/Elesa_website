import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Event images keyed by event name
const eventImages = {
  "music-concert-2025": [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
  ],
  "art-&-culture-fest": [
    "https://images.unsplash.com/photo-1485217988980-11786ced9454",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1485217988980-11786ced9454",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1485217988980-11786ced9454",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1485217988980-11786ced9454",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  ],
  "food-carnival": [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
  ]
};

function EventDetail() {
  const { id } = useParams(); // id = "music-concert" etc.

  const images = eventImages[id] || [];

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-7xl mx-auto relative">

        {/* Back Button with icon */}
        <Link
          to="/events"
          className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-lg text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <h1 className="text-4xl font-bold text-white text-center mb-10">
          {id ? id.replace(/-/g, " ").toUpperCase() : "Event"} Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.length > 0 ? (
            images.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={img}
                  alt={`Event ${id} Image ${index}`}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))
          ) : (
            <p className="text-white text-center col-span-full">
              No images found for this event.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
