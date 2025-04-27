import React from 'react'
import logo from "../assets/mlogo.png";
import { useNavigate } from 'react-router-dom';
export default function () {
  const navigate = useNavigate();
  return (
    <div>
        <div className="py-4 px-20">
                <nav className="flex items-center justify-between px-6 py-4 bg-yellow-50 text-black border-b border-black rounded-2xl">
                  {/* Left Side: Logo + Dropdown + Nav */}
                  <div className="flex items-center gap-6">
                    <img src={logo} alt="logo" className="h-10" />
                    <select
                      name="menu"
                      className="bg-green-600 text-white px-3 py-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <option value="breakfast">Breakfast</option>
                      <option value="lunch">Lunch</option>
                      <option value="desserts">Desserts</option>
                      <option value="dinner">Dinner</option>
                    </select>
                    <ul className="flex items-center gap-6 ml-4">
                      <li className="cursor-pointer hover:text-green-500 font-medium">
                        Ingredients
                      </li>
                      <li className="cursor-pointer hover:text-green-500 font-medium">
                        Exclusive Deals
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-6">
                  <ul className="flex items-center gap-6 ml-4">
                      <li className="cursor-pointer hover:text-green-500 font-medium">
                        About
                      </li>
                      <li className="cursor-pointer hover:text-green-500 font-medium">
                        Contact
                      </li>
                    </ul>
                    <button onClick={()=>{navigate("/login-user")}} className="cursor-pointer hover:text-green-500 bg-green-600 text-white px-3 py-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white">
                      Login
                    </button>
                    <button onClick={()=>{navigate("/register-user")}} className="cursor-pointer hover:text-green-500 bg-green-600 text-white px-3 py-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white">
                      Sign Up
                    </button>
                  </div>
                </nav>
              </div>
    </div>
  )
}
