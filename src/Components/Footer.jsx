import React from 'react';
import footerimg from '../assets/Footer.png'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const IICWebsite = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        {/* Background Image with specific overlay */}
        <div className="absolute inset-0">
          <img
            src={footerimg}
            alt="Team background"
            className="w-full h-full object-cover"
          />
          {/* Updated overlay color */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(47, 47, 47, 0.85)' }}></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-20 text-white">
          <h1 className="text-[42px] font-bold mb-4 font-['Georgia']">Contact us anytime</h1>
          <p className="text-xl mb-8 font-['Poppins'] max-w-md">
            Our team is available to assist you with any inquiries you might have.
          </p>
          <button className="bg-amber-400 text-black px-6 py-2 rounded-full hover:bg-amber-500 transition-colors font-['Poppins']">
            Contact us
          </button>
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="bg-[#060627] text-white pt-16 pb-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 font-['Poppins']">
          {/* Home Column */}
          <div>
            <h2 className="text-amber-400 text-xl font-semibold mb-4">Home</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400">About IIC</a></li>
              <li><a href="#" className="hover:text-amber-400">Events</a></li>
              <li><a href="#" className="hover:text-amber-400">IIC members</a></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h2 className="text-amber-400 text-xl font-semibold mb-4">About</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400">What is IIC?</a></li>
              <li><a href="#" className="hover:text-amber-400">Mission & Vision</a></li>
              <li><a href="#" className="hover:text-amber-400">Focus Area</a></li>
              <li><a href="#" className="hover:text-amber-400">Functions</a></li>
              <li><a href="#" className="hover:text-amber-400">Students Association</a></li>
            </ul>
          </div>

          {/* Events Column */}
          <div>
            <h2 className="text-amber-400 text-xl font-semibold mb-4">Events</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400">Bharat</a></li>
              <li><a href="#" className="hover:text-amber-400">Rise</a></li>
              <li><a href="#" className="hover:text-amber-400">Vybe</a></li>
              <li><a href="#" className="hover:text-amber-400">SIH</a></li>
              <li><a href="#" className="hover:text-amber-400">Hackoctober</a></li>
              <li><a href="#" className="hover:text-amber-400">Club Bazar</a></li>
            </ul>
          </div>

          {/* Team Column */}
          <div>
            <h2 className="text-amber-400 text-xl font-semibold mb-4">Team</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400">Faculty</a></li>
              <li><a href="#" className="hover:text-amber-400">1.0</a></li>
              <li><a href="#" className="hover:text-amber-400">2.0</a></li>
              <li><a href="#" className="hover:text-amber-400">3.0</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h2 className="text-amber-400 text-xl font-semibold mb-4">Contact us</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-amber-400 flex items-center gap-3">
                  <Facebook size={22} /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 flex items-center gap-3">
                  <Instagram size={22} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 flex items-center gap-3">
                  <Mail size={22} /> Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 flex items-center gap-3">
                  <Phone size={22} /> Phone
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 flex items-center gap-3">
                  <MapPin size={22} /> Address
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IICWebsite;