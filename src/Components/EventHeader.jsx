import React from 'react';

const EventHeader = ({ 
  image, 
  title, 
  paragraphs,
 
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full mb-6 px-6 mt-6">
      {/* Left side image */}
      <div className={`md:w-2/5 mt-4 `}>
        <img 
          src={image}
          alt={`${title} event`}
          className="w-full h-[400px] object-cover"
        />
      </div>
      
      {/* Right side content with centered title */}
      <div className="md:w-3/5 md:pl-16 flex flex-col justify-center">
        <h1 className="text-4xl font-serif font-medium mb-6 text-center md:text-left">{title}</h1>
        
        {/* Typography with Poppins font */}
        <div className="font-['Poppins'] font-normal text-lg leading-none tracking-wide" style={{ letterSpacing: "2%" }}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventHeader;