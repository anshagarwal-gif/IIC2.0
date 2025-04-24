import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from "../Components/Footer"
import EventsSlideshow from '../Components/Eventslideshow'
import Homebanner from '../Components/Homebanner'
import Members from '../Components/MemberCard'
const Home = () => {
  const navigate = useNavigate();
  
  const handleKnowMoreClick = () => {
    navigate('/about');
    window.scrollTo(0, 0); // Scroll to top after navigation
  };
  
  return (
    <div>
    <Homebanner/>
       {/* About Section */}
       <section className="mb-16 px-12 p-12 ml-12"  >
        <h1 className="text-4xl font-bold mb-8" style={{fontFamily:"Georgia" ,fontWeight:"400",fontSize:"42px"}}>About</h1>
        <div className="flex flex-col lg:flex-row items-center gap-40">
          <div className="lg:w-1/2">
            <p className="text-lg leading-relaxed" style={{fontFamily:"Poppins" ,fontWeight:"400",fontSize:"18px"}}>
              In the year 2018, the Ministry of Education (MoE) through MoE's Innovation Cell (MIC) launched the Institution's Innovation Council (IIC) program in collaboration with AICTE for Higher Educational Institutions (HEIs) to systematically foster the culture of innovation and start-up ecosystem in education institutions.
            </p>
            <button 
              onClick={handleKnowMoreClick}
              className="mt-6 bg-orange-400 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-colors"
            >
              Know More
            </button>
          </div>
          <div className="lg:w-1/2 w-full relative self-start">
            <img 
              src={require("../assets/iiclogo.png")} 
              alt="Institution's Innovation Council"
              className="w-[500px] h-auto top-[215px]   
                          mx-auto -mt-12"
            />
          </div>
        </div>
      </section>

      <EventsSlideshow/>
      <Members/>
      
      <Footer/>
    </div>
  )
}

export default Home
