import React from 'react';
import heroBg from '../assets/HeroSectionImage.png';

function HeroSection() {
    return (
        <div
            className="hero-section h-[45vh] flex items-center justify-center w-full"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#0C0D42'
            }}
        >
            <div className="text-animate h-[10%] md:h-[30%] text-center">
                <h1
                    className="text-animation text-[9vw] md:text-[7vw] lg:text-[4.6vw] inspiration"
                    style={{
                        fontFamily: 'Gill Sans Ultra Bold, sans-serif',
                        fontWeight: 800,
                        background: 'linear-gradient(to right, #CF1512 28%, #A659FF 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    INSPIRATION.
                </h1>
                <h1
                    className="text-animation text-[9vw] md:text-[7vw] lg:text-[4.6vw] ideation"
                    style={{
                        fontFamily: 'Gill Sans Ultra Bold, sans-serif',
                        fontWeight: 800,
                        background: 'linear-gradient(to right, #F73CFF 0%, #7E00FF 62%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    IDEATION.
                </h1>
                <h1
                    className="text-animation text-[9vw] md:text-[7vw] lg:text-[4.6vw] innovation"
                    style={{
                        fontFamily: 'Gill Sans Ultra Bold, sans-serif',
                        fontWeight: 800,
                        background: 'linear-gradient(to right, #17CF1C 10%, #D0E316 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    INNOVATION.
                </h1>
                <h1
                    className="text-animation text-[9vw] md:text-[7vw] lg:text-[4.6vw] inspiration"
                    style={{
                        fontFamily: 'Gill Sans Ultra Bold, sans-serif',
                        fontWeight: 800,
                        background: 'linear-gradient(to right, #CF1512 28%, #A659FF 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    INSPIRATION.
                </h1>
            </div>
        </div>
    );
}

export default HeroSection;