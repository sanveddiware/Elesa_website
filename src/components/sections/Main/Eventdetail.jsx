import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import page1 from '../../../assets/GIM/Page1.jpg';
import page2 from '../../../assets/GIM/Page2.jpg';
import page3 from '../../../assets/GIM/Page3.jpg';
import page4 from '../../../assets/GIM/Page4.jpg';
import page5 from '../../../assets/GIM/Page5.jpg';
import page6 from '../../../assets/GIM/Page6.jpg';
import page7 from '../../../assets/GIM/Page7.jpg';
import page8 from '../../../assets/GIM/Page8.jpg';
import page9 from '../../../assets/GIM/Page9.jpg';
import page10 from '../../../assets/GIM/Page10.jpg';
import page11 from '../../../assets/GIM/Page11.jpg';
import page12 from '../../../assets/GIM/Page12.jpg';
import page13 from '../../../assets/GIM/Page13.jpg';
import page14 from '../../../assets/GIM/Page14.jpg';
import page15 from '../../../assets/GIM/Page15.jpg';
import page16 from '../../../assets/Robodrive/Page16.jpg';
import page17 from '../../../assets/Robodrive/Page17.jpg';
import page18 from '../../../assets/Robodrive/Page18.jpg';
import page19 from '../../../assets/Robodrive/Page19.jpg';
import page20 from '../../../assets/Robodrive/Page20.jpg';
import page21 from '../../../assets/Robodrive/Page21.jpg';
import page22 from '../../../assets/Robodrive/Page22.jpg';
import page23 from '../../../assets/Robodrive/Page23.jpg';
import page24 from '../../../assets/Robodrive/Page24.jpg';
import page25 from '../../../assets/Proteus/Page25.jpg';
import page26 from '../../../assets/Proteus/Page26.jpg';
import page27 from '../../../assets/Proteus/Page27.jpg';
import page28 from '../../../assets/Proteus/Page28.jpg';
import page29 from '../../../assets/Proteus/Page29.jpg';
import page30 from '../../../assets/Proteus/Page30.jpg';
import page31 from '../../../assets/Proteus/Page31.jpg';
import page32 from '../../../assets/Proteus/Page32.jpg';
import page33 from '../../../assets/Proteus/Page33.jpg';













// Event images keyed by event name
const eventImages = {
  "gim-2k25": [
     page1,
     page2,
     page3,
     page4,
     page5,
     page6,
     page7,
     page8,
     page9,
     page10,
     page11,
     page12,
     page13,
     page14,
     page15,
  ],
  "robodrive": [
     
    
    page17,
    page18,
    page19,
    page20,
    page16,
    page21,
    page22,
    page23,
    page24,
    
  ],
  "proteus-workshop": [
    page25,
    page26,
    page27,
    page28,
    page32,
    page29,
    page30,
    page31,
    page33,
    

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
  className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-lg text-white hover:bg-white/30 transition-all duration-300 shadow-lg absolute top-4 left-4"
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
