import React, { useEffect, useState } from "react";
import fries from "../assets/fries.png";
import StarRating from "./StarRating";
import burger from "../assets/burgersmall.png"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductCard() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { img: fries, title: "Classic McFries", desc: "Crispy golden fries made with 100% vegan ingredients.", rating: 4, price: "$49.99", category: "Snacks" },
    { img: burger, title: "Vegan Burger Deluxe", desc: "Plant-based patty with vegan mayo and fresh veggies.", rating: 3, price: "$89.99", category: "Meals" },
    { img: fries, title: "Spicy Tofu Wrap", desc: "Grilled tofu, lettuce, and spicy vegan sauce in a soft tortilla wrap.", rating: 4, price: "$74.50", category: "Meals" },
    { img: fries, title: "Quinoa Power Bowl", desc: "A powerhouse bowl packed with quinoa, chickpeas, vibrant veggies, and creamy tahini dressing.", rating: 5, price: "$99.00", category: "Meals" },
    { img: fries, title: "Chickpea Curry", desc: "Indian-style hearty chickpea curry cooked with coconut milk and fragrant spices.", rating: 3, price: "$79.00", category: "Meals" },
    { img: fries, title: "Vegan Margherita Pizza", desc: "Classic hand-tossed pizza topped with vegan mozzarella and fresh basil leaves.", rating: 4, price: "$109.99", category: "Meals" },
    { img: fries, title: "Zesty Avocado Toast", desc: "Crunchy multigrain toast stacked with smashed avocado and a hint of lemon.", rating: 5, price: "$39.99", category: "Snacks" },
    { img: fries, title: "Oat Milk Smoothie", desc: "A refreshing smoothie blended with oat milk, banana, and mixed berries.", rating: 4, price: "$59.99", category: "Beverages" },
    { img: fries, title: "Vegan Chocolate Cake", desc: "Rich and moist vegan chocolate cake topped with dairy-free ganache.", rating: 5, price: "$64.99", category: "Desserts" },
    { img: fries, title: "Lentil Soup", desc: "A warm, hearty soup made from lentils, fresh veggies, and herbs.", rating: 4, price: "$120", category: "Meals" },
    
    { img: fries, title: "BBQ Jackfruit Sandwich", desc: "Pulled jackfruit smothered in smoky BBQ sauce on a soft bun.", rating: 5, price: "$94.99", category: "Meals" },
    { img: fries, title: "Vegan Caesar Salad", desc: "Romaine, crunchy croutons, and a creamy vegan Caesar dressing.", rating: 4, price: "$69.00", category: "Meals" },
    { img: fries, title: "Sweet Potato Fries", desc: "Sweet and savory golden sweet potato fries, perfectly seasoned.", rating: 4, price: "$44.00", category: "Snacks" },
    { img: fries, title: "Beyond Meatball Sub", desc: "Juicy vegan meatballs in marinara sauce inside a toasted sub roll.", rating: 5, price: "$99.50", category: "Meals" },
    { img: fries, title: "Vegan Sushi Rolls", desc: "Colorful rolls with avocado, cucumber, and tofu wrapped in nori.", rating: 4, price: "$89.99", category: "Meals" },
    { img: fries, title: "Berry Bliss Parfait", desc: "Layers of vegan yogurt, crunchy granola, and fresh mixed berries.", rating: 5, price: "$49.99", category: "Desserts" },
    { img: fries, title: "Tofu Teriyaki Rice Bowl", desc: "Sticky jasmine rice topped with teriyaki glazed tofu and veggies.", rating: 4, price: "$85.00", category: "Meals" },
    { img: fries, title: "Vegan Pancake Stack", desc: "Fluffy vegan pancakes drizzled with maple syrup and topped with berries.", rating: 5, price: "$79.99", category: "Desserts" },
    { img: fries, title: "Falafel Pita Pocket", desc: "Crispy falafel balls stuffed in pita bread with hummus and veggies.", rating: 4, price: "$59.99", category: "Snacks" },
    { img: fries, title: "Stuffed Bell Peppers", desc: "Bell peppers loaded with quinoa, black beans, and vegan cheese.", rating: 5, price: "$84.50", category: "Meals" },
    { img: fries, title: "Vegan Mac 'n' Cheese", desc: "Creamy, cheesy plant-based macaroni for ultimate comfort food cravings.", rating: 5, price: "$79.00", category: "Meals" },
    { img: fries, title: "Choco Almond Vegan Shake", desc: "Indulgent shake made with almond milk, cocoa, and vegan ice cream.", rating: 5, price: "$69.99", category: "Beverages" },
    { img: fries, title: "Mushroom Stroganoff", desc: "Creamy mushroom stroganoff made with dairy-free cream sauce.", rating: 4, price: "$88.00", category: "Meals" },
    { img: fries, title: "Peanut Butter Banana Toast", desc: "Whole grain toast topped with creamy peanut butter and fresh bananas.", rating: 4, price: "$39.99", category: "Snacks" },
    { img: fries, title: "Coconut Bliss Balls", desc: "Sweet, chewy coconut and oat energy balls for guilt-free snacking.", rating: 5, price: "$34.99", category: "Snacks" }
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
          className="border rounded-lg p-2 w-2/3 bg-amber-50"
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
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredProducts.map((product, index) => (
          <div key={index} className="w-[400px] h-[400px] m-2 flex flex-col bg-white gap-2 p-4 rounded-2xl shadow-md">
            <div className="w-full flex justify-center items-end">
              <img src={product.img} alt="product" className="object-contain" />
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
