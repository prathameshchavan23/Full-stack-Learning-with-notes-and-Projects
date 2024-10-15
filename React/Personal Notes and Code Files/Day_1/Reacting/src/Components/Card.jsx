import React from "react";
function Card() {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-200">
        Hello
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 md:w-96">
        <div className="h-48 bg-zinc-300"></div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Card Title</h3>
          <p className="text-gray-600 mb-4">
            This is a simple card component with a title, image, and description.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
