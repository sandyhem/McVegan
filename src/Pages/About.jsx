
import React from 'react';
import logo from "../assets/mlogo.png";
import burger from "../assets/handburger.png";
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate()
  return (
    <>
    <div style={{
              background: "linear-gradient(292.69deg, #065A31 0%, #00AC58 100%)"
    }}>

    <div className="flex flex-row gap-4 justify-center items-center" style={{
              background: "linear-gradient(292.69deg, #065A31 0%, #00AC58 100%)"
          }}>
            <div className="w-3/4 py-4 px-20">
              <nav className="flex items-center justify-between px-6 py-4 bg-yellow-50 text-black border-b border-black rounded-2xl">
                <div className="flex items-center gap-6">
                  <img src={logo} alt="logo" className="h-10" />
                  <h1 className="text-sm font-semibold text-slate-600"> Welcome to McVegan, Register Now to enjoy your unlimited meals!</h1>
                  <img src={burger} alt="burger" className="h-10" />
                </div>
                <div className="flex items-center gap-6">
                  <button onClick={() => { navigate("/login-user") }} className="cursor-pointer hover:text-green-500 bg-green-600 text-white px-3 py-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white">
                    Login
                  </button>
                  <button onClick={() => { navigate("/") }} className="cursor-pointer hover:text-green-500 bg-green-600 text-white px-3 py-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white">
                    Home
                  </button>
                </div>
              </nav>
            </div>
          </div>
    
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">About McVegan</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2022, McVegan was born from a simple yet powerful vision: to revolutionize fast food by creating 
              delicious plant-based alternatives that are good for people, animals, and the planet. Our journey began when 
              our founder, after struggling to find convenient vegan options while traveling, decided to create a solution 
              that would make plant-based eating accessible to everyone.
            </p>
            
            <div className="bg-green-100 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-medium text-green-800 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                At McVegan, we're on a mission to make plant-based eating the new normal. We believe that delicious, 
                convenient, and sustainable food should be available to everyone, everywhere.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold text-green-700 mb-4">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-green-800 mb-2">100% Plant-Based</h3>
                <p className="text-gray-600">Every item on our menu is completely vegan and crafted with care.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-green-800 mb-2">Sustainable Sourcing</h3>
                <p className="text-gray-600">We work directly with organic farmers to reduce our carbon footprint.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-green-800 mb-2">Eco-Friendly Packaging</h3>
                <p className="text-gray-600">All our packaging is compostable or made from recycled materials.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-green-800 mb-2">Community Focus</h3>
                <p className="text-gray-600">We give back 5% of our profits to local environmental initiatives.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Team</h2>
            <p className="text-gray-700 mb-6">
              McVegan brings together passionate chefs, environmental scientists, and food innovation experts who are 
              dedicated to creating delicious plant-based alternatives without compromise. Our diverse team shares a 
              common vision: to make sustainable eating both accessible and enjoyable.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-medium text-green-800 mb-3">Our Commitment</h3>
              <p className="text-gray-700">
                We promise to never compromise on taste, quality, or our values. Every McVegan meal is crafted to 
                satisfy both your cravings and your conscience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </>
  );
};

export default About;