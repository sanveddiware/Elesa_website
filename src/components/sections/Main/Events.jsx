import React from "react";
import EventCard from "./EventCard";
import GIM from '../../../assets/GIM/GIM_front.jpg'
import Robo from '../../../assets/Robodrive/Robo_Main.jpg';
import Proteus from '../../../assets/Proteus/Proteus_Main.jpg';

function Events() {
  return (
    <div className="pt-20 px-4 flex flex-col gap-6">
      <EventCard
        id="concert"
        title="GIM 2k25"
        date=""
        description="The Electronics Students’ Association (ELESA) proudly organizes the General Interaction Meet (GIM) exclusively for the first-year engineering students.

GIM is designed to provide a warm welcome to the newcomers, helping them interact with their peers, seniors, and faculty members in a friendly and engaging environment."
        imageUrl={GIM}
      />
      <EventCard
        id="art-fest"
        title="Robodrive"
        date=""
        description="Robodrive, organised by ELESA, is a hands-on workshop where students learn to design and build a RoboCar while exploring the basics of electronics, sensors, and control systems. It aims to spark creativity and provide practical exposure to robotics and automation."
        imageUrl={Robo}
      />
      <EventCard
        id="proteus-workshop"
        title="Proteus Workshop"
        date=""
        description="Proteus Workshop, organised by ELESA, introduces students to circuit simulation and using the Proteus software. The session helps participants gain hands-on experience in designing, testing, and visualising electronic circuits, bridging the gap between theory and practical implementation."
        imageUrl={Proteus}
      />
    </div>
  );
}

export default Events;
