import React from 'react';

const ProfileCard = ({ name, title, organization, imageUrl }) => {
  return (
    <div className="mt-24 w-[300px] mx-auto">
      <div className="relative w-full h-[200px] bg-[#f0f0f0] mx-auto profile-card">
        <img 
          src={imageUrl || "/api/placeholder/192/192"} 
          alt="Profile"
          className="absolute bottom-0 h-[320px]"
        />
      </div>

      <div className="pt-4 pb-6 px-6 bg-white rounded-lg">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            {name || "Name Here"}
          </h2>
          <p className="text-gray-600 mb-1">
            {title || "Title here"}
          </p>
          <p className="text-gray-500">
            {organization || "Institute Name"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;