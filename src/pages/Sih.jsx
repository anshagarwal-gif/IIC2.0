import React from 'react';
import EventHeader from '../Components/EventHeader';
import header from "../assets/Sih1.jpeg";
import img3 from "../assets/Sih5.jpeg";
import img4 from "../assets/Sih4.jpeg";
import img1 from "../assets/Sih2.jpeg";
import img2 from "../assets/Sih3.jpeg";

const Sih = () => {
  // Define content for Sih event
  const sihParagraphs = [
    "The Internal Hackathon round of the Smart India Hackathon (SIH)expertise was organized by Institution's Innovation Council (IIC) and CRiEYA at MIT-ADT University on September 9-10, 2024. Participants tackled domains such as MedTech, Blockchain, Cybersecurity, Smart Automation, and Agriculture, developing both software and hardware solutions. Themes ranged from Agriculture & Food Tech to Smart Education, offering students a platform to apply their knowledge and demonstrate leadership, teamwork, and technical expertise."
  ];

  return (
    <div className="w-full font-sans">
      {/* Using the EventHeader component */}
      <EventHeader
        image={header}
        title="SIH"
        paragraphs={sihParagraphs}
        imageBorder={true}
      />

      {/* Gallery Title */}
      <h2 className="text-5xl font-serif text-center mb-6">Gallery</h2>

      {/* Gallery Layout - Custom grid to match the reference image */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-12 gap-4">
          {/* First row - Two side-by-side images with adjusted widths */}
          <div className="col-span-12 md:col-span-5 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={img1}
              alt="Award ceremony with officials"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-7 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={img2}
              alt="Group of participants with certificates"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Second row - Two side-by-side images */}
          <div className="col-span-12 md:col-span-6 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={img3}
              alt="Team of students with project display"
              className="w-full h-90 object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-6 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={img4}
              alt="Student team with laptops and awards"
              className="w-full h-90 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sih;