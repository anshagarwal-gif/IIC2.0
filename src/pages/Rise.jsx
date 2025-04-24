import React from 'react';
import EventHeader from '../Components/EventHeader';
import header from "../assets/RISE.jpeg";
import img1 from "../assets/Rise1.jpeg";
import img2 from "../assets/Rise2.jpeg";
import img3 from "../assets/Rise3.jpeg";
import img4 from "../assets/Rise4.jpeg";
import img5 from "../assets/Rise5.jpeg";
const Rise = () => {
  // Define content for Rise event
  const riseParagraphs = [
    "RISE (Roadmap to Internships by Startups & Entrepreneurs) at MIT ADT University by Institution's Innovation Council provided a dynamic platform connecting over 200 students with startups and entrepreneurs. More than 20 companies, including Cyberlytics Technology, RGB Training Services, Marketti.io, and Proser Industries, participated, offering both paid and unpaid internships."
  ];

  return (
    <div className="w-full font-sans">
      {/* Using the EventHeader component */}
      <EventHeader
        image={header}
        title="RISE"
        paragraphs={riseParagraphs}
        imageBorder={true}
      />

      {/* Gallery Title */}
      <h2 className="text-5xl font-serif text-center mb-6">Gallery</h2>

      {/* Gallery Layout - Grid system to match the reference image */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
          {/* First row - Large image on left, two smaller images stacked on right */}
          <div className="col-span-2 md:col-span-7">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
              <img 
                src={img5} 
                alt="Interview session" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="col-span-2 md:col-span-5 grid grid-rows-2 gap-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={img4} 
                alt="Meeting with company representatives" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={img3} 
                alt="Group discussion" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second row - Two equal images */}
          <div className="col-span-1 md:col-span-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-80">
              <img 
                src={img1} 
                alt="One-on-one interview" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-80">
              <img 
                src={img2} 
                alt="Group photo of participants" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rise;