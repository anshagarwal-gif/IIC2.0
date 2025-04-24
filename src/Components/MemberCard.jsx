import React from "react";
import demoimg from "../assets/demoimg.png";

const members = [
  { name: "Name here", role: "Faculty", image: demoimg },
  { name: "Name here", role: "Faculty", image: demoimg },
  { name: "Name here", role: "Student", image: demoimg },
  { name: "Name here", role: "Student", image: demoimg },
  { name: "Name here", role: "Faculty", image: demoimg },
  { name: "Name here", role: "Faculty", image: demoimg },
  { name: "Name here", role: "Student", image: demoimg },
  { name: "Name here", role: "Student", image: demoimg },
]

const Members = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-10 py-8">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-12" style={{fontFamily:"Georgia" ,fontWeight:"400",fontSize:"42px"}}>Members</h1>

      {/* Faculty Section */}
      <h2 className="text-2xl font-semibold mb-6" >Faculty</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {members
          .filter((member) => member.role === "Faculty")
          .map((member, index) => (
            <div 
              key={index} 
              className="relative w-[265px] h-[301px] rounded-[7px] border border-gray-300 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-gray-800/70 to-transparent flex items-end p-4">
                <p className="text-white text-lg font-semibold">{member.name}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Student Section */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Student</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {members
          .filter((member) => member.role === "Student")
          .map((member, index) => (
            <div 
              key={index} 
              className="relative w-[265px] h-[301px] rounded-[7px] border border-gray-300 shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-gray-800/70 to-transparent flex items-end p-4">
                <p className="text-white text-lg font-semibold">{member.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Members;
