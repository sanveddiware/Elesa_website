import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ items, interval = 3000 }) => {
  const [current, setCurrent] = useState(1); // start from 1 because 0 is cloned last
  const [transitioning, setTransitioning] = useState(true);
  const containerRef = useRef(null);

  // clone first and last
  const slides = [items[items.length - 1], ...items, items[0]];

  const next = () => {
    setCurrent((prev) => prev + 1);
    setTransitioning(true);
  };

  const prev = () => {
    setCurrent((prev) => prev - 1);
    setTransitioning(true);
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [interval]);

  // Handle seamless loop
  useEffect(() => {
    if (!transitioning) return;

    const handleTransitionEnd = () => {
      if (current === slides.length - 1) {
        // jump to real first slide
        setTransitioning(false);
        setCurrent(1);
      }
      if (current === 0) {
        // jump to real last slide
        setTransitioning(false);
        setCurrent(slides.length - 2);
      }
    };

    const node = containerRef.current;
    node.addEventListener("transitionend", handleTransitionEnd);

    return () => node.removeEventListener("transitionend", handleTransitionEnd);
  }, [current, slides.length, transitioning]);

  return (
    <div className="relative w-full max-w-6xl mx-auto my-6 overflow-hidden rounded-2xl shadow-2xl">
      {/* Slides */}
      <div
        ref={containerRef}
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: transitioning ? "transform 0.5s ease" : "none",
        }}
      >
        {slides.map((item, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <img
              src={item}
              alt={`Slide ${idx}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-6 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-black/60 text-white rounded-full shadow-lg"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute top-1/2 right-6 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-black/60 text-white rounded-full shadow-lg"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, idx) => {
          // calculate active dot index
          const activeIndex =
            current === 0
              ? items.length - 1
              : current === slides.length - 1
              ? 0
              : current - 1;

          return (
            <button
              key={idx}
              onClick={() => setCurrent(idx + 1)} // +1 because 0 is cloned last
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === activeIndex ? "bg-white/80" : "bg-gray-500/50"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
