import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="">
      <div className="w-full background-img text-center bg-gray-600 py-14">
        <h1 className="text-white text-6xl font-bold">Todo App</h1>
      </div>

      <p className="bg-green-800 py-2 px-4 text-white text-sm mt-10 w-32 text-center m-auto rounded-md hover:cursor-pointer">
        Today
      </p>
    </div>
  );
}

export default Header;
