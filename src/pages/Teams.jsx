import React, { useState } from 'react'
import ProfileCard from '../Components/ProfileCard'
import DummyImage from '../assets/DummyImage.png'
import DesignLead from "../assets/Members/IMG_4358.png";
import Design1 from "../assets/Members/IMG_4224.png"
import Tech1 from "../assets/Members/IMG_4305.png"
import Tech2 from "../assets/Members/IMG_4299.png"
import TechLead from "../assets/Members/IMG_4292.png"
const Teams = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGen , setCurrentGen] = useState(3);
  const [currentTeam, setCurrentTeam] = useState('All');

  return (
    <div className='w-full'>
      <div className='flex justify-evenly items-center pt-12 pb-8 border-b-[2px] mx-20 border-[#FFC700]'>
        <ul className='flex space-x-12 font-poppins text-lg font-normal text-gray-800 overflow-auto'>
          <li className='cursor-pointer' onClick={(e)=>setCurrentTeam(e.target.textContent)}>All</li>
          <li className='cursor-pointer' onClick={(e)=>setCurrentTeam(e.target.textContent)}>Content</li>
          <li className='cursor-pointer' onClick={(e)=>setCurrentTeam(e.target.textContent)}>Design</li>
          <li className='cursor-pointer' onClick={(e)=>setCurrentTeam(e.target.textContent)}>Marketing</li>
          <li className='cursor-pointer' onClick={(e)=>setCurrentTeam(e.target.textContent)}>Management</li>
          <li className='cursor-pointer whitespace-nowrap' onClick={(e)=>setCurrentTeam(e.target.textContent)}>Social Media</li>
          <li className='cursor-pointer' onClick={(e)=>setCurrentTeam(e.target.textContent)}>Spokesperson</li>
          <li className='cursor-pointer' onClick={(e)=>setCurrentTeam(e.target.textContent)}>Technical</li>
        </ul>

        <button
          className="relative text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded" onClick={() => setIsModalOpen(!isModalOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>

          {isModalOpen && (
            <div className='absolute shadow-lg px-8 py-4 bg-white left-50% translate-x-[-40%]'>
              <ul className='space-y-3'>
                <li onClick={()=>setCurrentGen(0)}>Faculty</li>
                <li onClick={()=>setCurrentGen(1)}>IIC 1.0</li>
                <li onClick={()=>setCurrentGen(2)}>IIC 2.0</li>
                <li onClick={()=>setCurrentGen(3)}>IIC 3.0</li>
              </ul>
            </div>
          )}

        </button>
      </div>


      {/* IIC Leads Section */}
      {["All"].includes(currentTeam) && <div className='w-full my-32'>
        <h1 className='text-center font-merriWeather text-[44px] font-bold '>{currentGen === 0? "Faculty" : `IIC ${currentGen}.0`}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 lg:px-24'>
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
        </div>
      </div>}

      {/* Content Team */}
      {["All", "Content"].includes(currentTeam) && <div className='w-full my-32'>
        <h1 className='text-center font-merriWeather text-[44px] font-bold mb-24'>Content Team</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 lg:px-24'>
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
        </div>
      </div>}


      {/* Design Team */}
      {["All", "Design"].includes(currentTeam) && <div className='w-full my-32'>
        <h1 className='text-center font-merriWeather text-[44px] font-bold mb-24'>Design Team</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 lg:px-24'>
          <ProfileCard name="Ansh Singh"
            title="Design Lead"
            organization="Institute Name"
            imageUrl={DesignLead} />
          <ProfileCard name="Dhruvi Salva"
            title="Design Member"
            organization="Institute Name"
            imageUrl={Design1} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
          <ProfileCard name="Jane Doe"
            title="Vice President"
            organization="Institute Name"
            imageUrl={DummyImage} />
        </div>
      </div>}
       {/* Technical Team */}
       {["All", "Technical"].includes(currentTeam) && <div className='w-full my-32'>
        <h1 className='text-center font-merriWeather text-[44px] font-bold mb-24'>Technical Team</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-24'>
          <ProfileCard name="Ansh Agarwal"
            title="Techincal Lead"
            organization="Institute Name"
            imageUrl={TechLead} />
          <ProfileCard name="Ayush Ghodke"
            title="Technical Member"
            organization="Institute Name"
            imageUrl={Tech2} />
          <ProfileCard name="Bhagirath Auti"
            title="Technical Member"
            organization="Institute Name"
            imageUrl={Tech1} />
        
          
        </div>
      </div>}
    </div>
  )
}

export default Teams
