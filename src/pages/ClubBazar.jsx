import React from 'react';
import EventHeader from '../Components/EventHeader';
import header from "../assets/Bazar.jpeg";
import img1 from "../assets/Bazar1.jpeg";
import img2 from "../assets/Bazar2.jpeg";
import img3 from "../assets/Bazar3.jpeg";
import img4 from "../assets/Bazar4.jpeg";
import img5 from "../assets/Bazar5.jpeg";

const ClubBazar = () => {
  // Define content for Club Bazar event
  const ClubBazarParagraphs = [
    "Club Bazar, 2023 organized by Institution's Innovation Council (IIC) MIT ADT brought together over 32 college clubs, offering students a glimpse into diverse activities and opportunities across campus. From technical groups like the Google Developer Student Club (GDSC) and Cloud Computing Club (C Cube) to non-technical clubs like Leap of Grace, the event celebrated talent and inspired student involvement. Club representatives shared their mottos and outlined upcoming events."
  ];

  return (
    <div className="w-full font-sans">
      {/* Using the EventHeader component */}
      <EventHeader
        image={header}
        title="Club Bazar"
        paragraphs={ClubBazarParagraphs}
        imageBorder={true}
      />

      {/* Gallery Title */}
      <h2 className="text-5xl font-serif text-center mb-6">Gallery</h2>

      {/* Gallery Layout - Custom grid to match the reference image */}
      <div className="container mx-auto px-4 mb-12">
        {/* First row - Three images with different widths */}
        <div className="grid grid-cols-12 gap-4 mb-4">
          <div className="col-span-12 md:col-span-4 bg-gray-100 rounded-lg overflow-hidden h-85">
            <img
              src={img1}
              alt="Ribbon cutting ceremony with officials"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-3 bg-gray-100 rounded-lg overflow-hidden h-85">
            <img
              src={img2}
              alt="Project display with electric vehicle"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-5 bg-gray-100 rounded-lg overflow-hidden h-85">
            <img
              src={img3}
              alt="Students with technical project display"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second row - Two images with different widths */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 bg-gray-100 rounded-lg overflow-hidden h-auto">
            <img
              src={img4}
              alt="Student club team with black t-shirts and display"
              className="w-full object-contain"
            />
          </div>
          <div className="col-span-12 md:col-span-5 bg-gray-100 rounded-lg overflow-hidden h-auto">
            <img
              src={img5}
              alt="Students with drone project"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubBazar;