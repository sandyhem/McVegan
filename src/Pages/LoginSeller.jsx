import React from 'react'

import VegPlate from '../assets/vegetarian-plate.png'
import capsicum from "../assets/capsicum.png"
import juice from "../assets/juice.png"
import { useNavigate } from 'react-router-dom'

export default function LoginUser() {
    const navigate = useNavigate();
  return (
   <>
      <div className="flex flex-row justify-center items-center h-screen " style={{
          background: "linear-gradient(292.69deg, #065A31 0%, #00AC58 100%)"
        }}>
          
        <form className="flex flex-col w-[400px] p-8 rounded-2xl bg-white shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-slate-700">User Login</h2>

            <img src={capsicum} alt=""  className='w-1/3 mx-auto'/> 
          
          <label htmlFor="email" className="mb-2 text-lg text-slate-600">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Enter your email'
            className="mb-4 p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
  
          <label htmlFor="password" className="mb-2 text-lg text-slate-600">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Enter your password'
            className="mb-6 p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
  
          <button type="submit" className="cursor-pointer p-3 bg-slate-500 text-white rounded-lg hover:bg-slate-800 transition duration-300">
            Sign In
          </button>
        
        <button type="submit" className="cursor-pointer p-3 bg-white text-blue-600 rounded-lg" onClick = {()=>{
            navigate("/login-seller")
        }}>User Login</button>
  
        </form>
        
          <img src={VegPlate} alt="foodie" className="w-[400px] animate-spin"
    style={{ animationDuration: "8s" }} />
         
      </div>
   </>
  )
}
