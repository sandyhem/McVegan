import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-6 h-6 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.148 6.6h6.785c.969 0 1.371 1.24.588 1.81l-5.49 4.002 
              2.148 6.601c.3.92-.755 1.688-1.54 1.117L12 18.347l-5.49 4.002c-.785.571-1.84-.197-1.54-1.117l2.148-6.601
              -5.49-4.002c-.783-.57-.38-1.81.588-1.81h6.785l2.148-6.6z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
