import React, { useState, useEffect, useRef } from 'react'
import Heading from '../Components/Heading'
import Target from '../assets/target.png'
import TeleScope from '../assets/telescope.png'
import HeroSection from '../Components/HeroSection'
import StudentAssociationSection from '../Components/StudentAssociationSection'

const About = () => {

  const [animationStarted, setAnimationStarted] = useState(false);
  const ball1 = useRef(null);
  const ball2 = useRef(null);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutSectionRef.current) {
        const sectionTop = aboutSectionRef.current.getBoundingClientRect().top;
        const sectionHeight = aboutSectionRef.current.offsetHeight;
        const triggerPosition = sectionHeight * 0.8;

        if (sectionTop <= triggerPosition) {
          setAnimationStarted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (animationStarted) {
      ball1.current.style.opacity = 1;
      ball2.current.style.opacity = 1;
    }
  }, [animationStarted]);

  return (
    <div>

      <HeroSection />

      <Heading headingText={"ABOUT IIC"} />
      <div className="flex flex-col md:flex-row items-center gap-10 justify-center mb-32" ref={aboutSectionRef}>
        <div className="w-full md:w-2/4 flex justify-center items-start gap-24">
          <div className="relative">
            <div
              ref={ball1}
              className={`
            w-16 h-16 bg-[#3D3F86] rounded-none absolute left-1/2 -translate-x-1/2 -top-[170px] opacity-0
            ${animationStarted ? 'animate-fallAndBounce1' : ''}
          `}
              style={{
                animationFillMode: 'forwards',
              }}
            />
            <div className="font-pollerOne text-[220px] text-[#FFC700]">I</div>
          </div>


          <div className="relative">
            <div
              ref={ball2}
              className={`
            w-16 h-16 bg-[#3D3F86] rounded-none absolute left-1/2 -translate-x-1/2 -top-[170px] opacity-0 
            ${animationStarted ? 'animate-fallAndBounce1' : ''}
          `}
              style={{
                animationFillMode: 'forwards',
              }}
            />
            <div className="font-pollerOne text-[220px] text-[#FFC700]">I</div>
          </div>

 
          <div className="font-pollerOne text-[220px] text-[#FFC700]">C</div>
        </div>


        <div className="w-full md:w-2/4 space-y-6 pr-24">
          <p className="text-gray-800 leading-relaxed font-poppins text-[18px] font-normal">
            In the year 2018, the Ministry of Education (MoE) through MoE's
            Innovation Cell (MIC) launched the Institution's Innovation
            Council (IIC) program in collaboration with AICTE for Higher
            Educational Institutions (HEIs) to systematically foster the
            culture of innovation and start-up ecosystem in education
            institutions.
          </p>
          <p className="text-gray-800 leading-relaxed font-poppins text-[18px] font-normal">
            Primarily, IICs' role is to engage large number of faculty,
            students and staff in various innovation and entrepreneurship
            related activities such as ideation, Problem solving, Proof of
            Concept development, Design Thinking, IPR, project handling
            and management at Pre-incubation/Incubation stage, etc., so
            that innovation and entrepreneurship ecosystem gets
            established and stabilized in HEIs.
          </p>
        </div>
      </div>


      <div className="bg-[#0C0D42] text-[#FFFFFF] py-32 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center gap-16 md:gap-24 items-center">
            <div className="space-y-12 mx-auto">
              <div className="flex items-center gap-8">
                <img src={Target} alt="" width={"50px"} height={"50px"} />
                <h2 className="text-5xl font-normal" style={{
                  fontFamily: "Georgia Regular"
                }}>Mission</h2>
              </div>
              <p className="text-2xl leading-relaxed text-gray-200">
                The IIC's core mission is to inspire and equip students with
                entrepreneurial skills and mindset, fostering innovation and
                business acumen.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-center gap-8">
                <img src={TeleScope} alt="" width={"48px"} height={"48px"} />
                <h2 className="text-5xl font-normal" style={{
                  fontFamily: "Georgia Regular"
                }}>Vision</h2>
              </div>
              <p className="text-2xl leading-relaxed text-gray-200">
                The Institution's Innovation Council (IIC) at our college is
                aligned with a government initiative to cultivate
                entrepreneurship among students
              </p>
            </div>
          </div>
        </div>
      </div>


      <Heading headingText={"Major focus area"} />
      <div className='w-full space-y-6 flex flex-col items-center justify-center mb-32'>
        <p className="text-gray-800 leading-relaxed font-poppins text-[20px] font-normal w-[75%]">
          At MIT ADT University's Institute Innovation Council (IIC), we are dedicated to creating a vibrant local innovation ecosystem that nurtures and supports start-up and entrepreneurial initiatives within higher education institutions (HEIs)
        </p>
        <p className="text-gray-800 leading-relaxed font-poppins text-[20px] font-normal w-[75%]">
          Our efforts are geared towards preparing our institute for the Atal Ranking of Institutions on Innovation Achievements Framework (ARIIA), establishing a functional ecosystem for scouting and pre-incubating innovative ideas, and developing better cognitive abilities among our technology students. By focusing on these key areas, we aim to foster a culture of innovation and creativity that empowers students to transform their ideas into impactful solutions.
        </p>
      </div>


      <Heading headingText={"Functions"} />
      <div className='w-full space-y-6 flex flex-col items-center justify-center mb-32'>
        <p className="text-gray-800 leading-relaxed font-poppins text-[20px] font-normal w-[75%]">
          The Institute Innovation Council (IIC) is committed to conducting various innovation and entrepreneurship-related activities as prescribed by the Central MIC in a timely manner. We aim to identify and reward innovative efforts, sharing success stories to inspire others.
        </p>
        <p className="text-gray-800 leading-relaxed font-poppins text-[20px] font-normal w-[75%]">
          Our initiatives include organizing periodic workshops, seminars, and interactions with entrepreneurs, investors, and professionals, while creating a mentor pool to support student innovators. Additionally, we have established an Institution’s Innovation portal to showcase innovative projects by our faculty and students. To further stimulate creativity and problem-solving, we organize hackathons, idea competitions, and mini-challenges, often involving industry partners.
        </p>
      </div>
      <StudentAssociationSection/>
    </div>
  )
}

export default About
