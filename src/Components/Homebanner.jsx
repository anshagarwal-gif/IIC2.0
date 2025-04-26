import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import bannerImage from '../assets/banner.png'; // ✅ Ensure image is properly imported

const Homebanner = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const { ref: statsRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const counter1 = setInterval(() => {
        setCount1(prev => (prev < 4 ? prev + 0.1 : 4));
      }, interval);

      const counter2 = setInterval(() => {
        setCount2(prev => (prev < 75 ? prev + 1.5 : 75));
      }, interval);

      const counter3 = setInterval(() => {
        setCount3(prev => (prev < 30 ? prev + 0.6 : 30));
      }, interval);

      const counter4 = setInterval(() => {
        setCount4(prev => (prev < 50 ? prev + 1 : 50));
      }, interval);

      return () => {
        clearInterval(counter1);
        clearInterval(counter2);
        clearInterval(counter3);
        clearInterval(counter4);
      };
    }
  }, [inView]);

  return (
    <>
  {/* Hero Section with Fixed Background */}
  <div className="relative h-screen">
    {/* Background Image + Gradient */}
    <div 
      className="absolute inset-0 bg-cover bg-fixed bg-center -z-10"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(12, 13, 66, 0.8) 0%, rgba(32, 34, 105, 0.6) 52.5%, rgba(204, 204, 229, 0.1) 99.06%)'
        }}
      />
    </div>

    {/* Hero Content */}
    <div className="h-full flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="font-serif font-normal text-white mb-2 md:mb-4"
          style={{
            fontSize: "clamp(24px, 5vw, 42px)",
            lineHeight: "1.15",
            letterSpacing: "2%",
            maxWidth: "100%",
            width: "auto",
            height: "auto",
          }}>
          Welcome to the<br />
          MIT ADT University's
        </h1>
        <h2
          className="font-serif font-normal bg-clip-text text-transparent"
          style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            lineHeight: "1.15",
            letterSpacing: "2%",
            background: "linear-gradient(180deg, #FFC700 0%, #BA9100 100%)",
            WebkitBackgroundClip: "text",
          }}
        >
          Institution's<br className="md:block" />Innovation<br className="md:block" />Council!
        </h2>
      </div>
    </div>
  </div>

  {/* Stats Section with Updated Styling */}
  <div 
    ref={statsRef} 
    className="py-12 md:py-20 relative"
    style={{
      background: 'linear-gradient(to bottom, rgba(12, 13, 66, 0.8) 100%, rgba(12, 13, 66, 0.8) 50%, rgba(12, 13, 66, 0.8) 0%)'
    }}
  >
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
        {[
          { value: count1.toFixed(1)+ "⭐", label: "Ranking" },
          { value: Math.round(count2) + "+", label: "Internships provided" },
          { value: Math.round(count3) + "L", label: "Investments" },
          { value: Math.round(count4) + "+", label: "Startups Impacted" }
        ].map((stat, index) => (
          <div key={index} className="p-2 md:p-6">
            {/* Gradient Text Effect */}
            <div
              className="font-bold mb-1 md:mb-2 bg-clip-text text-transparent"
              style={{
                fontFamily: "'Merriweather Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(32px, 6vw, 64px)',
                lineHeight: '1.25',
                letterSpacing: '2%',
                textAlign: 'center',
                background: 'linear-gradient(180deg, #FFE594 0%, #BA9100 100%)',
                WebkitBackgroundClip: 'text',
              }}
            >
              {stat.value}
            </div>
            {/* Headings Below Numbers */}
            <div
              style={{
                fontFamily: "'Merriweather Sans', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(14px, 3vw, 22px)',
                lineHeight: '1.25',
                letterSpacing: '2%',
                textAlign: 'center',
                color: 'white'
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</>
  );
};

export default Homebanner;
