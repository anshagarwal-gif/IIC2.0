import React, { useState, useEffect } from "react";
import bharat from "../assets/bharat.jpg";
import vibe from "../assets/vibe.png";
import rise from "../assets/rise.jpg";

const EventsAndAbout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventsPerSlide = 3;
  const autoPlayInterval = 3000; // 3 seconds

  const events = [
    { title: "Bharat", subtitle: "Business Heroes Aspiring to Rise and Achieve Together", image: bharat },
    { title: "Rise", subtitle: "Roadmap to Internships by Startups & Entrepreneurs", image: rise },
    { title: "Vybe", subtitle: "Viksit Yuva and Bharat Entrepreneur", image: vibe },
    { title: "Event 4", subtitle: "Additional Event Description", image: "/api/placeholder/800/600" },
    { title: "Event 5", subtitle: "More Event Content", image: "/api/placeholder/800/600" },
    { title: "Event 6", subtitle: "Exciting Event Details", image: "/api/placeholder/800/600" }
  ];

  const totalSlides = Math.ceil(events.length / eventsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mb-4 px-7 md:px-8">
      <h1 className="text-4xl font-bold text-center mb-10" style={{ fontFamily: "Georgia", fontWeight: "400" }}>
        Events
      </h1>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 flex" style={{ flex: `0 0 ${100 / totalSlides}%` }}>
              {events.slice(slideIndex * eventsPerSlide, (slideIndex + 1) * eventsPerSlide).map((event, index) => (
                <div key={index} className="w-1/3 px-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-2 transform hover:scale-105">
                    <div className="relative h-64">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <h2 className="text-2xl font-bold">{event.title}</h2>
                      <p className="text-gray-600 mt-1 ">{event.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsAndAbout;