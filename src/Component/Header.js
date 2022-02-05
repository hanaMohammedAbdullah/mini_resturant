import React from "react";

function Header() {
  let isDark = true;
  return (
    <header className=" bg-yellow-300 p-6 w-full">
      <div className="  flex items-center justify-between">
        <h1 className=" font-bold text-xl italic ml-8 ">
          <i class="uil uil-utensils-alt"></i>CHEF
        </h1>
        <div className="flex font-bold ">
          <h1 className="mr-8 hover:text-blue-600 ">Home</h1>
          <h1 className="mr-5 hover:text-blue-600  ml-2">
            <i class="uil uil-shopping-cart mr-2"></i>Order
          </h1>
          <button className="hover:text-blue-600  ">
            {isDark ? <i class="uil uil-moon" /> : <i class="uil uil-sun" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
