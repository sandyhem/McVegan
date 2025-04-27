import React, { useEffect } from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";

export default function ProductSlider() {
  useEffect(() => {
    const circle = document.querySelector('.circle');
    const list = document.querySelector('.list');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const items = document.querySelectorAll('.list .item');
    const count = items.length;
    let active = 1;
    let leftTransform = 0;
    let width_item = items[active]?.offsetWidth || 300;

    next.onclick = () => {
      active = active >= count - 1 ? count - 1 : active + 1;
      runCarousel();
    };
    prev.onclick = () => {
      active = active <= 0 ? active : active - 1;
      runCarousel();
    };

    function runCarousel() {
      prev.style.display = active === 0 ? 'none' : 'block';
      next.style.display = active === count - 1 ? 'none' : 'block';

      const old_active = document.querySelector('.item.active');
      if (old_active) old_active.classList.remove('active');
      items[active].classList.add('active');

      leftTransform = width_item * (active - 1) * -1;
      list.style.transform = `translateX(${leftTransform}px)`;
    }

    runCarousel();

    // Circle Text Effect
    if (circle) {
      const textCircle = circle.innerText.split('');
      circle.innerText = '';
      textCircle.forEach((value, key) => {
        const newSpan = document.createElement("span");
        newSpan.innerText = value;
        const rotateThisSpan = (360 / textCircle.length) * (key + 1);
        newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
        circle.appendChild(newSpan);
      });
    }
  }, []);

  return (
    <div className="font-sans overflow-hidden">
      {/* Slider */}
      <div className="slider relative w-screen h-screen overflow-hidden mt-[-64px] flex justify-center items-center">
        {/* List */}
        <div className="list flex absolute h-full items-center transition-transform duration-800">
          {[{image:image1,title:"Savor the Flavor"},
           {image:image2,title:"A Feast Awaits"},
            {image:image3,title:"Hearty and Heavenly"},
             {image:image4,title:"Freshly Crafted"},
             {image:image5,title:"Taste the Tradition"}]
          .map((img, index) => (
            <div key={index} className={`item w-[33vw] text-center transition-transform duration-1000 ${index === 1 ? 'active rotate-0' : 'rotate-45'}`}>
              <img src={img.image} alt={`slide${index}`} className="w-4/5 drop-shadow-lg mx-auto animate-spin" style={{ animationDuration: "8s" }}/>
            </div>
          ))}
        </div>


        {/* Navigation Buttons */}
        <button id="prev" className="absolute left-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white text-xl font-mono backdrop-blur-md z-20">&lt;</button>
        <button id="next" className="absolute right-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white text-xl font-mono backdrop-blur-md z-20">&gt;</button>
      </div>
    </div>
  );
}
