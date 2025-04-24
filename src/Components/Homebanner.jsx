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
          <div className="container mx-auto px-6">
            <h1 className="text-6xl font-bold text-white mb-4" style={{
    fontFamily: "Georgia, serif",
    fontWeight: 400,
    fontSize: "42px",
    lineHeight: "47.72px",
    letterSpacing: "2%",
    textAlign: "left",  
    width: "425px",
    height: "115px",
    color: "white", // Adjust color if needed
  }}>
              Welcome to the<br />
              MIT ADT University's
            </h1>
            <h2
  style={{
    fontFamily: "Georgia, serif",
    fontWeight: 400,
    fontSize: "80px",
    lineHeight: "91.23px",
    letterSpacing: "2%",
    textAlign: "left",
    background: "linear-gradient(180deg, #FFC700 0%, #BA9100 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Institution’s<br />Innovation<br />Council!
</h2>

          </div>
        </div>
      </div>

      {/* Stats Section with Updated Styling */}
      <div 
        ref={statsRef} 
        className="py-20 relative"
        style={{
          background: 'linear-gradient(to bottom, rgba(12, 13, 66, 0.8) 100%, rgba(12, 13, 66, 0.8) 50%, rgba(12, 13, 66, 0.8) 0%)'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: count1.toFixed(1)+ "⭐", label: "Ranking" },
              { value: Math.round(count2) + "+", label: "Internships provided" },
              { value: Math.round(count3) + "L", label: "Investments" },
              { value: Math.round(count4) + "+", label: "Startups Impacted" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                {/* Gradient Text Effect */}
                <div
                  className="text-4xl font-bold mb-2"
                  style={{
                    fontFamily: "'Merriweather Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '64px',
                    lineHeight: '80.45px',
                    letterSpacing: '2%',
                    textAlign: 'center',
                    background: 'linear-gradient(180deg, #FFE594 0%, #BA9100 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {stat.value}
                </div>
                 {/* Headings Below Numbers */}
      <div
        style={{
          fontFamily: "'Merriweather Sans', sans-serif",
          fontWeight: 700,
          fontSize: '22px',
          lineHeight: '27.65px',
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
