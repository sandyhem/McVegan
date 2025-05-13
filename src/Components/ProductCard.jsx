import React, { useEffect, useState } from "react";
import fries from "../assets/fries.png";
import StarRating from "./StarRating";
import burger from "../assets/burgersmall.png"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import  wrap  from "../assets/wrap.png"
import  Quinoa  from "../assets/Quinoa-bowl.png"
import photo5 from "../assets/phonto5.jpg"
import photo6 from "../assets/photo6.jpg"
import photo7 from "../assets/photo7.jpg"
import photo8 from "../assets/photo8.webp"
import photo9 from "../assets/photo8.jpg"
import photo10 from "../assets/photo9.jpg"
import photo11 from "../assets/photo10.jpg"
import photo12 from "../assets/photo11.jpg"
import photo13 from "../assets/photo12.jpg"
import photo14 from "../assets/photo13.jpg"
import photo15 from "../assets/photo15.jpg"
import photo16 from "../assets/photo16.jpg"
import photo17 from "../assets/photo17.jpg"
import photo18 from "../assets/photo18.jpg"
import photo19 from "../assets/photo19.jpg"
import photo20 from "../assets/photo20.jpg"
import photo21 from "../assets/photo21.jpg"
import photo22 from "../assets/photo22.jpg"
import photo23 from "../assets/photo23.jpg"
import photo24 from "../assets/photo24.jpg"
import photo25 from "../assets/photo25.jpg"

export default function ProductCard() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { img: fries, title: "Classic McFries", desc: "Crispy golden fries made with 100% vegan ingredients.", rating: 4, price: "$49.99", category: "Snacks" },
    { img: burger, title: "Vegan Burger Deluxe", desc: "Plant-based patty with vegan mayo and fresh veggies.", rating: 3, price: "$89.99", category: "Meals" },
    { img: wrap, title: "Spicy Tofu Wrap", desc: "Grilled tofu, lettuce, and spicy vegan sauce in a soft tortilla wrap.", rating: 4, price: "$74.50", category: "Meals" },
    { img: Quinoa, title: "Quinoa Power Bowl", desc: "A powerhouse bowl packed with quinoa, chickpeas, vibrant veggies, and creamy tahini dressing.", rating: 5, price: "$99.00", category: "Meals" },
    { img: photo5, title: "Chickpea Curry", desc: "Indian-style hearty chickpea curry cooked with coconut milk and fragrant spices.", rating: 3, price: "$79.00", category: "Meals" },
    { img: photo6, title: "Vegan Margherita Pizza", desc: "Classic hand-tossed pizza topped with vegan mozzarella and fresh basil leaves.", rating: 4, price: "$109.99", category: "Meals" },
    { img: photo7, title: "Zesty Avocado Toast", desc: "Crunchy multigrain toast stacked with smashed avocado and a hint of lemon.", rating: 5, price: "$39.99", category: "Snacks" },
    { img: photo8, title: "Oat Milk Smoothie", desc: "A refreshing smoothie blended with oat milk, banana, and mixed berries.", rating: 4, price: "$59.99", category: "Beverages" },
    { img: photo9, title: "Vegan Chocolate Cake", desc: "Rich and moist vegan chocolate cake topped with dairy-free ganache.", rating: 5, price: "$64.99", category: "Desserts" },
    { img: photo10, title: "Lentil Soup", desc: "A warm, hearty soup made from lentils, fresh veggies, and herbs.", rating: 4, price: "$120", category: "Meals" },
    
    { img: photo11, title: "BBQ Jackfruit Sandwich", desc: "Pulled jackfruit smothered in smoky BBQ sauce on a soft bun.", rating: 5, price: "$94.99", category: "Meals" },
    { img: photo12, title: "Vegan Caesar Salad", desc: "Romaine, crunchy croutons, and a creamy vegan Caesar dressing.", rating: 4, price: "$69.00", category: "Meals" },
    { img: photo13, title: "Sweet Potato Fries", desc: "Sweet and savory golden sweet potato fries, perfectly seasoned.", rating: 4, price: "$44.00", category: "Snacks" },
    
    { img: photo14, title: "Beyond Meatball Sub", desc: "Juicy vegan meatballs in marinara sauce inside a toasted sub roll.", rating: 5, price: "$99.50", category: "Meals" },
    { img: photo15, title: "Vegan Sushi Rolls", desc: "Colorful rolls with avocado, cucumber, and tofu wrapped in nori.", rating: 4, price: "$89.99", category: "Meals" },
    { img: photo16, title: "Berry Bliss Parfait", desc: "Layers of vegan yogurt, crunchy granola, and fresh mixed berries.", rating: 5, price: "$49.99", category: "Desserts" },
    { img: photo17, title: "Tofu Teriyaki Rice Bowl", desc: "Sticky jasmine rice topped with teriyaki glazed tofu and veggies.", rating: 4, price: "$85.00", category: "Meals" },
    { img: photo18, title: "Vegan Pancake Stack", desc: "Fluffy vegan pancakes drizzled with maple syrup and topped with berries.", rating: 5, price: "$79.99", category: "Desserts" },
    { img: photo19, title: "Falafel Pita Pocket", desc: "Crispy falafel balls stuffed in pita bread with hummus and veggies.", rating: 4, price: "$59.99", category: "Snacks" },
    
    { img: photo20, title: "Stuffed Bell Peppers", desc: "Bell peppers loaded with quinoa, black beans, and vegan cheese.", rating: 5, price: "$84.50", category: "Meals" },
    { img: photo21, title: "Vegan Mac 'n' Cheese", desc: "Creamy, cheesy plant-based macaroni for ultimate comfort food cravings.", rating: 5, price: "$79.00", category: "Meals" },
    { img: photo22, title: "Choco Almond Vegan Shake", desc: "Indulgent shake made with almond milk, cocoa, and vegan ice cream.", rating: 5, price: "$69.99", category: "Beverages" },
    { img: photo23, title: "Mushroom Stroganoff", desc: "Creamy mushroom stroganoff made with dairy-free cream sauce.", rating: 4, price: "$88.00", category: "Meals" },
    { img: photo24, title: "Peanut Butter Banana Toast", desc: "Whole grain toast topped with creamy peanut butter and fresh bananas.", rating: 4, price: "$39.99", category: "Snacks" },
    { img: photo25, title: "Coconut Bliss Balls", desc: "Sweet, chewy coconut and oat energy balls for guilt-free snacking.", rating: 5, price: "$34.99", category: "Snacks" }
  ];
  

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });
  
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.title === product.title);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    toast.success(`${product.title} has been added to your cart!`);
  };


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
     
      <div className="flex mt-5 w-[700px] gap-2 justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg p-2 w-2/3  bg-amber-50"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-lg p-2 w-1/3 bg-amber-50"
        >
          <option value="All">All Categories</option>
          <option value="Meals">Meals</option>
          <option value="Snacks">Snacks</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap gap-8 justify-center items-stretch">
  {filteredProducts.map((product, index) => (
    <div key={index} className="w-[350px] h-[500px] m-2 flex flex-col bg-white gap-2 p-4 rounded-2xl shadow-md">
      <div className="w-full flex justify-center items-end">
        <img src={product.img} alt="product" className="object-contain w-full h-48" />
      </div>
      <StarRating rating={product.rating} />
      <h1 className="font-semibold text-slate-950 md:text-2xl">{product.title}</h1>
      <p className="text-sm text-slate-700">{product.desc}</p>
      <p className="font-mono text-xl font-bold text-slate-900">{product.price}</p>
      <button
        className="cursor-pointer mt-auto bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleAddToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  ))}
</div>

    </>
  );
}
