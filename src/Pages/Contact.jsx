import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/mlogo.png";
import burger from "../assets/handburger.png";


const Contact = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
   
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
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
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Get In Touch</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium text-green-800 mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Green Avenue<br />
                    Eco District<br />
                    Sustainable City, SC 98765
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-green-800 mb-2">Opening Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 7am - 10pm<br />
                    Saturday & Sunday: 8am - 11pm
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-green-800 mb-2">Contact Info</h3>
                  <p className="text-gray-600">
                    Phone: (555) 123-4567<br />
                    Email: hello@mcvegan.com
                  </p>
                </div>
                
                <div className="pt-4 border-t border-green-100">
                  <h3 className="font-medium text-green-800 mb-2">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <button className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                      f
                    </button>
                    <button className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                      in
                    </button>
                    <button className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                      ig
                    </button>
                    <button className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                      tw
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-4">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-green-800 mb-1">Do you offer catering services?</h3>
                    <p className="text-gray-600">Yes! We offer catering for events of all sizes. Please contact us at least 48 hours in advance.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-green-800 mb-1">Are your ingredients organic?</h3>
                    <p className="text-gray-600">We source organic ingredients whenever possible, with over 80% of our menu being certified organic.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-green-800 mb-1">Do you have gluten-free options?</h3>
                    <p className="text-gray-600">Yes, we have several gluten-free options clearly marked on our menu.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;