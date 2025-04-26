import React, { useState, useEffect, useRef } from "react";
import bharat from "../assets/bharat.jpg";
import vibe from "../assets/vibe.png";
import rise from "../assets/rise.jpg";

const EventsAndAbout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [eventsPerSlide, setEventsPerSlide] = useState(3);
  const autoPlayInterval = 3000; // 3 seconds

  const events = [
    { title: "Bharat", subtitle: "Business Heroes Aspiring to Rise and Achieve Together", image: bharat },
    { title: "Rise", subtitle: "Roadmap to Internships by Startups & Entrepreneurs", image: rise },
    { title: "Vybe", subtitle: "Viksit Yuva and Bharat Entrepreneur", image: vibe },
    { title: "Event 4", subtitle: "Additional Event Description", image: "/api/placeholder/800/600" },
    { title: "Event 5", subtitle: "More Event Content", image: "/api/placeholder/800/600" },
    { title: "Event 6", subtitle: "Exciting Event Details", image: "/api/placeholder/800/600" }
  ];

  // Update events per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setEventsPerSlide(1); // Show 1 on mobile
      } else if (window.innerWidth < 1024) {
        setEventsPerSlide(2); // Show 2 on tablet
      } else {
        setEventsPerSlide(3); // Show 3 on desktop
      }
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Recalculate totalSlides when eventsPerSlide changes
  const totalSlides = Math.ceil(events.length / eventsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="w-full max-w-6xl mx-auto mb-4 px-4 sm:px-6 md:px-7 lg:px-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10" style={{ fontFamily: "Georgia", fontWeight: "400" }}>
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
            <div key={slideIndex} className="w-full flex-shrink-0 flex flex-wrap justify-center" style={{ flex: `0 0 ${100 / totalSlides}%` }}>
              {events.slice(slideIndex * eventsPerSlide, (slideIndex + 1) * eventsPerSlide).map((event, index) => (
                <div key={index} className={`${eventsPerSlide === 1 ? 'w-full' : 'w-full sm:w-1/2 lg:w-1/3'} p-2 md:px-4 mb-4`}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-2 transform hover:scale-105">
                    <div className="relative h-48 md:h-56 lg:h-64">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-2 md:p-4">
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{event.title}</h2>
                      <p className="text-gray-600 mt-1 text-sm md:text-base">{event.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Pagination dots instead of buttons */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsAndAbout;