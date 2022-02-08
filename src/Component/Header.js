import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeActions } from "../Redux/ThemeSlice";
function Header() {
  let dispatch = useDispatch();
  let navigator = useNavigate();
  let isDark = useSelector((state) => state.Theme.isDark);
  return (
    <header className=" bg-yellow-300 p-6 w-full">
      <div className="  flex items-center justify-between">
        <h1 className=" font-bold text-xl italic ml-8 ">
          <i className="uil uil-utensils-alt"></i>CHEF
        </h1>
        <div className="flex font-bold ">
          <button
            className="mr-8 hover:text-blue-600 "
            onClick={() => {
              navigator("/");
            }}
          >
            Home
          </button>
          <button
            className="mr-5 hover:text-blue-600  ml-2"
            onClick={() => {
              navigator("/order");
            }}
          >
            <i className="uil uil-shopping-cart mr-2"></i>Order
          </button>
          <button
            className="hover:text-blue-600  "
            onClick={() => dispatch(ThemeActions.toggle())}
          >
            {isDark ? (
              <i className="uil uil-moon" />
            ) : (
              <i className="uil uil-sun" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
