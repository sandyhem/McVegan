import { useNavigate } from "react-router-dom";
import handburger from "../assets/handburger.png";
import logo from "../assets/mlogo.png";
import Navbar from "../Components/Navbar";
import "../Css/Home.css"
import ProductSlider from "../Components/ProductSlider";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home ">
      {/* Navbar */}
      <Navbar/>

      {/* title section */}
      <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-6xl  font-sans text-center text-slate-100 p-3">Introducing <span className="text-amber-400">McVegan</span> - A Fresh, </h1>
      <h1  className="font-bold text-6xl font-sans text-center text-slate-100 p-3">Flavorful Revolution</h1>
       <h4 className="font-light text-lg  text-slate-100 font-sans text-center p-2">Experience the iconic taste of McDonald's, now reimagined with vibrant, plant-powered incredients</h4>
       <button onClick={()=>{navigate("/products")}} className=" cursor-pointer bg-amber-400 hover:bg-amber-500 text-center text-white  font-bold py-2 px-4 rounded-full">Shop Now!</button>
      </div>

      
       {/* hero section */}
      <div className="relative w-full h-screen">
        <div className="m absolute inset-0 z-0 flex justify-center items-start">
          <img src={logo} alt="Background" className="object-fill" />
        </div>

 
        <div className="absolute inset-0 z-10 flex justify-center items-center-safe">
          <img src={handburger} alt="Hamburger" className="w-1/2" />
        </div>
      </div>
       <div>
       <div className="text-center my-10 z-20">
        <h1 className="text-4xl font-extrabold text-white">Discover Plates That Tell a Story</h1>
        <p className="text-lg text-gray-300 mt-2">Every dish is crafted to delight your senses</p>
      </div>
        <ProductSlider/>
       </div>
      {/* footer */}
      <footer className="w-full h-20 bg-green-700 text-white flex items-center justify-center">
        <p className="text-center">© 2025 McVegan. All rights reserved.</p>
      </footer>
      
    </div>
  );
}
