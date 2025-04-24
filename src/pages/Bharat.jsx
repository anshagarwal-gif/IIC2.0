import React from 'react';
import EventHeader from '../Components/EventHeader';
import header from "../assets/Bharat1.jpeg";
import img1 from "../assets/Bharat2.jpeg";
import img2 from "../assets/Bharat3.jpeg";
import img3 from "../assets/Bharat4.jpeg";
import img4 from "../assets/Bharat5.jpeg";

const Bharat = () => {
  // Content split into paragraphs for the EventHeader component
  const bharatParagraphs = [
    "BHARAT 1.0 (Business Heroes Aspiring to Rise and Achieve Together), held on October 31st and November 1st, 2023, at MIT AOT University, brought together 49 startups from diverse sectors such as Agriculture, Blockchain, MedTech, and Robotics.",
    
    "Organized by the Institution's Innovation Council (IIC), the event featured 24 teams from MIT AOT and 25 from other Pune colleges. Prominent investors, including Mr. Neville Patel and Mr. Tushar Patarde, reviewed projects, provided feedback, and expressed interest in several startups for future investment.",
    
    "With a prize pool of 1 Lakh, the event also featured a flea market where students showcased and sold their products."
  ];

  return (
    <div className="w-full font-sans">
      {/* Using the EventHeader component */}
      <EventHeader 
        image={header}
        title="Bharat"
        paragraphs={bharatParagraphs}
        imageBorder={false}
      />

      {/* Gallery Title */}
      <h2 className="text-5xl font-serif text-center mb-6">Gallery</h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-12 gap-4 mb-8 w-full px-6">
        {/* Large image on left */}
        <div className="col-span-12 md:col-span-7 flex justify-center">
          <div style={{ width: '900px', height: '491px' }} className="overflow-hidden rounded-md shadow-md">
            <img 
              src={img1}
              alt="Speaker presentation at BHARAT event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Two stacked images on right */}
        <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4">
          <div style={{ width: '594px', height: '240px' }} className="overflow-hidden rounded-md shadow-md mx-auto">
            <img 
              src={img2}
              alt="Attendees at BHARAT event"
              className="w-full h-full object-cover"
            />
          </div>
          <div style={{ width: '594px', height: '240px' }} className="overflow-hidden rounded-md shadow-md mx-auto">
            <img 
              src={img3}
              alt="Product demonstration at BHARAT event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Bottom row with three images */}
        <div className="col-span-12 md:col-span-4 flex justify-center">
          <div style={{ width: '502px', height: '320px' }} className="overflow-hidden rounded-md shadow-md">
            <img 
              src={img4}
              alt="Student showcasing product at flea market"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="col-span-12 md:col-span-4 flex justify-center">
          <div style={{ width: '502px', height: '320px' }} className="overflow-hidden rounded-md shadow-md">
            <img 
              src={img2}
              alt="Startup team presentation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="col-span-12 md:col-span-4 flex justify-center">
          <div style={{ width: '502px', height: '320px' }} className="overflow-hidden rounded-md shadow-md">
            <img 
              src={header}
              alt="Award ceremony with dignitaries"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bharat;