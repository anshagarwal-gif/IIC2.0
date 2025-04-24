import React from 'react';
import ABOUT from "../assets/Aboutsection.png"
const StudentAssociationSection = ({ imageSrc = ABOUT }) => {
  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden min-h-[400px]" style={{ background: "rgba(255, 192, 99, 1)" }}>
      {/* Left side - Image */}
      <div className="w-full md:w-5/12 p-6 flex items-center justify-center py-8 md:py-12">
        <div className="shadow-lg border border-gray-200 bg-white p-2 max-w-full">
          <img 
            src={imageSrc} 
            alt="Student Association Group Photo" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
      
      {/* Right side - Text Content */}
      <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-center py-8 md:py-12">
        <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-6">
          About Student Association
        </h2>
        
        <p className="font-poppins font-normal text-[18px] text-gray-700 mb-3" style={{ lineHeight: "149%", letterSpacing: "2%" }}>
          Student Association Councils in college clubs are important because they provide a structured 
          platform for student engagement, leadership development, and representation. They help clubs 
          organize activities, and advocate for members' interests to college authorities.
        </p>
        
        <p className="font-poppins font-normal text-[18px] text-gray-700" style={{ lineHeight: "149%", letterSpacing: "2%" }}>
          This enhances the overall effectiveness and sustainability of college clubs, fostering a vibrant 
          and inclusive campus community.
        </p>
      </div>
    </div>
  );
};

export default StudentAssociationSection;