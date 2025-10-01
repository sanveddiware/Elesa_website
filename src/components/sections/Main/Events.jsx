// import React from "react";
// import EventCard from "../../UI/EventCards";

// function Events() {
//   return (
//     <div className="pt-20 px-4 flex flex-col gap-6">
//       <EventCard
//         title="Music Concert 2025"
//         date="September 25, 2025"
//         imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//         link="https://example.com/concert"
//       />
//       <EventCard
//         title="Art & Culture Fest"
//         date="October 10, 2025"
//         imageUrl="https://images.unsplash.com/photo-1449844908441-8829872d2607"
//         link="https://example.com/art-fest"
//       />
//       <EventCard
//         title="Food Carnival"
//         date="November 5, 2025"
//         imageUrl="https://images.unsplash.com/photo-1452626212852-811d58933cae"
//         link="https://example.com/food-carnival"
//       />
//     </div>
//   );
// }

// export default Events;


import React from "react";
import EventCard from "./EventCard";

function Events() {
  return (
    <div className="pt-20 px-4 flex flex-col gap-6">
      <EventCard
        id="concert"
        title="Music Concert 2025"
        date="September 25, 2025"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      />
      <EventCard
        id="art-fest"
        title="Art & Culture Fest"
        date="October 10, 2025"
        description="Explore creative expressions and cultural wonders."
        imageUrl="https://images.unsplash.com/photo-1449844908441-8829872d2607"
      />
      <EventCard
        id="food-carnival"
        title="Food Carnival"
        date="November 5, 2025"
        description="A delicious journey across flavors."
        imageUrl="https://images.unsplash.com/photo-1452626212852-811d58933cae"
      />
    </div>
  );
}

export default Events;
