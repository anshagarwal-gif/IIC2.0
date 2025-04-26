import React from 'react';
import BHARAT from "../assets/Bharatevent.jpeg"
import RISE from "../assets/RISE.jpeg"
import VYBE from "../assets/VYBE.png"
import SIH from "../assets/SIH.jpeg"
const StarBadge = () => (
    <svg
        viewBox="0 0 100 100"
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transform -rotate-12"
    >
        <path
            d="M50 5 
               L65 25 L85 15 
               L80 35 L100 45
               L80 55 L85 75
               L65 65 L50 85
               L35 65 L15 75
               L20 55 L0 45
               L20 35 L15 15
               L35 25 Z"
            className="fill-yellow-400"
        />
        <foreignObject x="15" y="25" width="70" height="50">
            <div className="text-blue-900 font-bold text-center text-[10px] md:text-xs">
                Upcoming
                <br />
                events
            </div>
        </foreignObject>
    </svg>
);

const EventsComponent = () => {
    const events = [
        {
            id: 1,
            title: 'Bharat',
            description:
                'BHARAT 2.0 event connected startups with investors, featuring panel discussions, an expo, and insights from EventBeep founders Ms. Rakhi Pal and Mr. Saurabh Mangrulkar.',
            image: BHARAT,
            link: "/Bharat"
        },
        {
            id: 2,
            title: 'Rise',
            description:
                'RISE connected 200+ students with over 20 companies for internships, linking students with startups like Cyberlytics Technology and Markettrio.',
            image: RISE,
            link: '/Rise'
        },
        {
            id: 3,
            title: 'Vybe',
            description:
                'IIC organized VYBE to teach entrepreneurial skills, with sessions on pitching, crowdfunding, and IP, including a Shark Tank-style pitch exercise.',
            image: VYBE,
            link: '/Vybe'
        },
        {
            id: 4,
            title: 'SIH',
            description:
                'Internal Round: MIT ADT\'s IIC and COEN\'s hosted SIH Internal round, challenging students to create solutions in fields like MedTech and Cybersecurity.',
            image: SIH,
            link: '/Sih'
        },
        {
            id: 5,
            title: 'Hacktoberfest',
            description:
                'Hacktoberfest, an annual event celebrating open-source software, brings developers together each October to collaborate and contribute.',
            image: RISE,
            link: '/events'
        },
        {
            id: 6,
            title: 'Club Bazar',
            description:
                'IIC\'s Club Bazar showcased 25+ clubs, exposing new students to a range of technical and non-technical activities on campus.',
            image: VYBE,
            link: '/ClubBazar'
        }
    ];

    return (
        <div className="w-full overflow-hidden bg-white">
            {/* Header Section */}
            <div
  className="text-white pl-3 md:p-5 py-6"
  style={{
    background: 'linear-gradient(to right, #012191, #0c0c2a)',
  }}
>
  <div className="w-full mx-auto relative px-4 md:px-6 lg:px-8">
    {/* Star Badge */}
    <div className="absolute -top-4 -left-2 md:-top-6 md:-left-4 lg:-left-6">
      <StarBadge />
    </div>

    {/* Header Content - Centered */}
    <div className="flex flex-col items-center text-center">
      <h1 className="font-georgia font-bold text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-none tracking-wide mb-2 md:mb-4">
        Bharat
      </h1>
      <p className="font-poppins font-normal text-sm md:text-base leading-relaxed md:leading-normal tracking-wide mt-1 md:mt-2 px-2 md:px-4">
        BHARAT 1.0 (Business Heroes Aspiring to Rise and
        Achieve Together), held on November 8th and 9th,
        2024, at MIT ADT University, brought together 49
        startups from diverse sectors such as Agriculture,
        Blockchain, MedTech, and Robotics.
      </p>
      <a
        href="#"
        className="text-yellow-400 text-xs md:text-sm hover:underline mt-2 md:mt-3 inline-block"
      >
        Link here
      </a>
    </div>
  </div>
</div>

            {/* Events Section */}
            <div className="mx-auto py-6 md:py-8 lg:py-12 px-4 md:px-6 lg:px-8">
                <h2 className="font-georgia text-2xl md:text-3xl font-bold mb-4 md:mb-6 lg:mb-8">
                    Events
                </h2>

                {/* Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white w-5/6 mx-auto rounded-lg shadow-md border border-[#C5C5C5] overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4 flex flex-col flex-grow min-h-[240px]">
                                <h3 className="font-merriweather font-bold text-2xl mb-4 text-black tracking-wide" style={{ lineHeight: "100%", letterSpacing: "2%" }}>
                                    {event.title}
                                </h3>
                                <p className="font-poppins font-normal text-base text-gray-600  flex-grow tracking-wide" style={{ lineHeight: "150%", letterSpacing: "2%" }}>
                                    {event.description}
                                </p>
                                <div className="flex justify-start ">
                                    <a href={event.link}>
                                        <button className="w-32 bg-[#FBAF3F] text-white px-2 py-2 rounded-full hover:bg-orange-500 transition-colors text-sm">
                                            Know more
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventsComponent;