import React, { useState } from "react";


const products = [
  {
    category: "Shoes",
    items: [
      {
        name: "Nike Air Jordan",
        price: "₹12,000",
        brand: "Nike",
        image: "image.png", // Replace with actual image
      },
      {
        name: "Nike Dunk Low",
        price: "₹8,000",
        brand: "Nike",
        image: "image.png", // Replace with actual image
      },
    ],
  },
  {
    category: "T-shirt",
    items: [],
  },
];

export default function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-11/12 bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Products</h2>
          <div className="space-x-2">
            <button  onClick={() => setIsPopupOpen(true)}className="bg-gray-100 text-blue-600 px-4 py-2 rounded-md text-sm">
              Add Category
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              Add Product
            </button>
          </div>
        </div>
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
              <h3 className="text-lg font-semibold mb-4">Add New Product</h3>

              {/* Product Form */}
              <input 
                type="text" 
                placeholder="Product Name" 
                className="w-full p-2 border rounded mb-3"
              />
              <input 
                type="number" 
                placeholder="Price" 
                className="w-full p-2 border rounded mb-3"
              />
              <button className="w-full bg-blue-600 text-white p-2 rounded-md">
                Save
              </button>

              {/* Close Button */}
              <button 
                onClick={() => setIsPopupOpen(false)} 
                className="absolute top-2 right-2 text-gray-500 text-xl"
              >
                ×
              </button>
            </div>
          </div>
        )}
        <div className="flex gap-4">
          {products.map((category, index) => (
            <div key={index} className="w-1/3 bg-gray-100 rounded-lg p-4 min-h-[400px]">
              <h3 className="text-sm font-semibold mb-3">{category.category}</h3>
              {category.items.map((item, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg shadow mb-3 flex items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-3" />
                  <div>
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <p className="text-gray-600 text-xs">{item.price}</p>
                    <span className="text-blue-600 text-xs bg-gray-100 px-2 py-1 rounded-md">
                      {item.brand}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
