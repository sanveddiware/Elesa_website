import React from "react";
import { useParams, Link } from "react-router-dom";

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
  "food-carnival":[
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

  // 🔍 Debugging logs
  console.log("URL param id:", id); // shows what ID is coming from URL
  console.log("eventImages keys:", Object.keys(eventImages)); // shows available keys
  console.log("Images found:", eventImages[id]); // shows matched images array or undefined

  const images = eventImages[id] || [];

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Circular Back Button */}
        <Link
          to="/events"
          className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-white/20 backdrop-blur-lg text-white hover:bg-white/30 transition-all duration-300 shadow-lg text-4xl font-bold hover:scale-110"
          style={{ lineHeight: 1 }}
        >
          ←
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
