import React from 'react';
import EventHeader from '../Components/EventHeader';
import header from "../assets/Vybe1.png";
import img1 from "../assets/Vybe2.png";
import img2 from "../assets/Vybe3.png";
import img3 from "../assets/Vybe4.jpeg";
import img4 from "../assets/Vybe5.png";
import img5 from "../assets/Vybe6.png";

const Vybe = () => {
  // Define content for Vybe event
  const vybeParagraphs = [
    "VYBE (Viksit Yuva and Bharat Entrepreneur), hosted by the Institution's Innovation Council (IIC) at MIT ADT University, featured sessions on pitching techniques, crowdfunding, and intellectual property rights (IPR). Participants engaged in interactive exercises to refine their pitching skills and took part in a Shark Tank-style role-play, where Innovation Council members acted as entrepreneurs.",
    " The event concluded with a focus on the importance of IPR in safeguarding ideas within the entrepreneurial ecosystem."
  ];

  return (
    <div className="w-full font-sans">
      {/* Using the EventHeader component */}
      <EventHeader 
        image={header}
        title="Vybe"
        paragraphs={vybeParagraphs}
        imageBorder={true}
      />

      {/* Gallery Title */}
      <h2 className="text-5xl font-serif text-center mb-6">Gallery</h2>
      
      {/* Gallery Layout - Matching the reference image */}
      <div className="container mx-auto px-6 mb-8">
        <div className="grid grid-cols-12 gap-4">
          {/* First row: Three equal-width images */}
          <div className="col-span-12 md:col-span-4">
            <img 
              src={img1} 
              alt="VYBE event - Classroom session" 
              className="w-full h-[500px] object-cover rounded-md shadow-md"
            />
          </div>
          
          <div className="col-span-12 md:col-span-4">
            <img 
              src={img2} 
              alt="VYBE event - Audience view" 
              className="w-full h-[500px] object-cover rounded-md shadow-md"
            />
          </div>
          
          <div className="col-span-12 md:col-span-4">
            <img 
              src={img3} 
              alt="VYBE event - Session presentation" 
              className="w-full h-[530px] object-cover rounded-md shadow-md"
            />
          </div>

          {/* Second row: One wide image on left, one smaller on right */}
          <div className="col-span-12 md:col-span-8">
            <img 
              src={img5} 
              alt="VYBE event - Group photo" 
              className="w-full h-[400px] object-cover rounded-md shadow-md"
            />
          </div>
          
          <div className="col-span-12 md:col-span-4">
            <img 
              src={img4} 
              alt="VYBE event - Presentation" 
              className="w-full h-[400px] object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </div>

     
     
    </div>
  );
};

export default Vybe;