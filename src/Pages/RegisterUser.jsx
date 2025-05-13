import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import plate from "../assets/Quinoa-bowl.png";
import juice from "../assets/juice.png";
import logo from "../assets/mlogo.png";
import burger from "../assets/handburger.png";

export default function RegisterUser() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill all fields!");
      return;
    }

    // Fetch existing users array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    const emailExists = existingUsers.some(user => user.email === formData.email);
    if (emailExists) {
      toast.error("Email already registered! Try logging in.");
      return;
    }

    // Add new user
    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    toast.success('Registration successful!');

    setTimeout(() => {
      navigate('/login-user');
    }, 1500);
  };

  return (
    <>
      <ToastContainer position="top-center" />

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

      <div className="flex flex-row gap-4 justify-center items-center h-screen" style={{
          background: "linear-gradient(292.69deg, #065A31 0%, #00AC58 100%)"
      }}>
        <form className="flex flex-col w-[400px] p-8 rounded-2xl bg-white shadow-2xl" onSubmit={handleRegister}>
          <h2 className="text-2xl font-bold mb-6 text-center text-slate-700">Register User</h2>

          <img src={juice} alt="juice" className="w-1/3 mx-auto" />

          <label htmlFor="name" className="mb-2 text-lg text-slate-600">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="mb-4 p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label htmlFor="email" className="mb-2 text-lg text-slate-600">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4 p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label htmlFor="password" className="mb-2 text-lg text-slate-600">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="mb-6 p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button type="submit" className="cursor-pointer p-3 bg-slate-500 text-white rounded-lg hover:bg-slate-800 transition duration-300">
            Register
          </button>
        </form>

        <img src={plate} alt="foodie" className="w-[400px] animate-spin" style={{ animationDuration: "8s" }} />
      </div>
    </>
  );
}
