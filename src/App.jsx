import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Orders from './Pages/Orders'
import LoginUser from './Pages/LoginUser'
import RegisterUser from './Pages/RegisterUser'
import MyCart from './Pages/MyCart'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles
export default function App() {
  return (
   <>
    <ToastContainer />
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/orders' element={<Orders/>}></Route>
          <Route path='/login-user' element={<LoginUser/>}></Route>
          <Route path='/register-user' element={<RegisterUser/>}></Route>
          <Route path='/cart' element={<MyCart/>}></Route>
      </Routes>
   </BrowserRouter>
   </>
  )
}
