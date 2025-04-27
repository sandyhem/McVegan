import React from 'react'
import ProductCard from '../Components/ProductCard'
import logo from "../assets/mlogo.png";
import burger from "../assets/handburger.png"
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const navigate = useNavigate();
  
  return (
    <>
    <div className='h-screen' style={{
                 background: "linear-gradient(292.69deg, #065A31 0%, #00AC58 100%)"
               }} >
    <div className="flex flex-row gap-4 justify-center items-center" style={{
                 background: "linear-gradient(292.69deg, #065A31 0%, #00AC58 100%)"
               }}>
            
                    <div className="w-3/4 py-4 px-20">
                            <nav className="flex items-center justify-between px-6 py-4 bg-yellow-50 text-black border-b border-black rounded-2xl">
                              {/* Left Side: Logo + Dropdown + Nav */}
                              <div className="flex items-center gap-6">
                                <img src={logo} alt="logo" className="h-10" />
                                <h1 className='text-sm font-semibold text-slate-600'> Welcome to McVegan, Enjoy your unlimited your meals with us!</h1>
                                <img src={burger} alt="logo" className="h-10" />
                              </div>
                              <div className="flex items-center gap-6">
                                <button onClick={()=>{navigate("/cart")}} className="cursor-pointer hover:text-green-500 bg-green-600 text-white px-3 py-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white">
                                  My Cart
                                </button>
                                <button onClick={()=>{navigate("/")}} className="cursor-pointer hover:text-green-500 bg-green-600 text-white px-3 py-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white">
                                  Home
                                </button>
                              </div>
                            </nav>
                          </div>
              
            </div>
    <div className='home flex flex-col'>
    <div className='flex flex-wrap items-center justify-center'>
        <ProductCard/>
    </div>
    <div className='flex items-end'>
    <footer className="w-full h-20 bg-green-700 text-white flex items-center justify-center">
        <p className="text-center">© 2025 McVegan. All rights reserved.</p>
      </footer>
    </div>

    </div>
  
    </div>
    

    </>
  )
}
