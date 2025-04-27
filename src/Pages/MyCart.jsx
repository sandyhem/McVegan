import React, { useState, useEffect } from "react";
import logo from "../assets/mlogo.png";
import burger from "../assets/handburger.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast for notifications
import combo1 from "../assets/combo1.png";
export default function MyCart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleQuantityChange = (product, operation) => {
    const updatedCart = cart.map((item) =>
      item.title === product.title
        ? {
            ...item,
            quantity:
              operation === "increase" ? item.quantity + 1 : item.quantity - 1,
          }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (product) => {
    const updatedCart = cart.filter((item) => item.title !== product.title);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success(`${product.title} has been removed from your cart.`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error(
        "Your cart is empty. Add some items before proceeding to checkout."
      );
      return;
    }
    toast.success("Checkout successful!");
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) =>
          total + item.quantity * parseFloat(item.price.slice(1)),
        0
      )
      .toFixed(2);
  };

  return (
    <>
      <div
        className="flex flex-row gap-4 justify-center items-center"
        style={{
          background: "linear-gradient(292.69deg, #065A31 0%, #00AC58 100%)",
        }}
      >
        <div className="w-3/4 py-4 px-20">
          <nav className="flex items-center justify-between px-6 py-4 bg-yellow-50 text-black border-b border-black rounded-2xl">
            {/* Left Side: Logo + Dropdown + Nav */}
            <div className="flex items-center gap-6">
              <img src={logo} alt="logo" className="h-10" />
              <h1 className="text-sm font-semibold text-slate-600">
                {" "}
                Welcome to McVegan, Register Now to enjoy your unlimited meals!
              </h1>
              <img src={burger} alt="logo" className="h-10" />
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => navigate("/products")}
                className="cursor-pointer hover:text-green-500 bg-amber-600 text-white px-3 py-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                Products
              </button>
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer hover:text-green-500 bg-green-600 text-white px-3 py-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                Home
              </button>
            </div>
          </nav>
        </div>
      </div>

    <div className="flex flex-row gap-4 " style={{
            background: "linear-gradient(292.69deg, #065A31 0%, #00AC58 100%)",
    }}>

        <div className="w-1/2 flex flex-col items-center justify-center" >
        <img src={combo1} alt="" className="object-cover" />
        <h1  className="font-bold text-6xl font-sans text-center text-slate-100 p-3">Have Your Delicious Meal!</h1>
        </div>

        <div
            className="w-1/2 py-6 px-4"
        >
            <h2 className="text-3xl font-bold text-center text-white mb-6">
            My Cart
            </h2>
            <div className="">

            <div className="mt-6">
            {cart.length === 0 ? (
                <p className="text-center text-lg text-gray-500">
                Your cart is empty.
                </p>
            ) : (
                cart.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center  justify-between bg-yellow-50 p-6 my-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                    <img
                    src={item.img}
                    alt={item.title}
                    className="h-20 w-20 object-contain rounded-md shadow-sm"
                    />
                    <div className="flex flex-col items-start ml-6 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-700">
                        {item.title}
                    </h3>
                    <p className="text-lg font-mono text-gray-900">
                        {item.price}
                    </p>
                    </div>
                    <div className="flex items-center gap-4">
                    <button
                        onClick={() => handleQuantityChange(item, "decrease")}
                        className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-all duration-200"
                        disabled={item.quantity === 1}
                    >
                        -
                    </button>
                    <span className="text-xl font-semibold">{item.quantity}</span>
                    <button
                        onClick={() => handleQuantityChange(item, "increase")}
                        className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-all duration-200"
                    >
                        +
                    </button>
                    <button
                        onClick={() => handleRemoveItem(item)}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition-all duration-200"
                    >
                        Remove
                    </button>
                    </div>
                </div>
                ))
            )}
            </div>


            </div>
        
            {cart.length > 0 && (
            <div className="flex justify-between items-center mt-8 border-t pt-6">
                <h3 className="text-2xl font-bold text-white">
                Total: ${calculateTotal()}
                </h3>
                <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition-all duration-200"
                >
                Proceed to Checkout
                </button>
            </div>
            )}
        </div>  
    </div>
    </>
  );
}
