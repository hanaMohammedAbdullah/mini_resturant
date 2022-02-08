import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderActions } from "../Redux/OrderSlice";
function Card(Props) {
  let isDark = useSelector((state) => state.Theme.isDark);
  let isOrderd = useSelector((state) => state.Store.Order);
  let isOrder = useState({});
  let dispatch = useDispatch();
  const onOrder = () => {
    if (isOrder.id) {
      console.log("hello");
    }
    let number = Math.round(Math.random() * 10000);
    isOrder = {
      id: number,
      name: Props.name,
      img: Props.img,
      desc: Props.desc,
      price: Props.price,
    };

    dispatch(OrderActions.add(isOrder));
    console.log(isOrderd);
  };
  // dispatch(OrderActions.add(isOrderd));

  useEffect(() => {}, []);
  return (
    <div
      className={`${
        isDark ? "Card__Border" : "Card__Border_dark"
      }  Hover:shadow-xl`}
    >
      <div className="w-fit m-auto mt-9">
        <img className="w-fit h-48 rounded" src={Props.img} alt={Props.name} />
      </div>
      <h1 className="text-lg font-mono italic text-center">{Props.name}</h1>
      <p className="">it is made with meat {Props.desc}</p>
      <div className="my-1">
        <button
          onClick={() => onOrder()}
          className="border rounded border-black bg-yellow-500 relative px-2
   right-6"
        >
          Add to list
        </button>
        <small
          className={`${
            isDark ? " text-slate-700" : "text-white"
          }  relative left-12   `}
        >
          <i className="uil uil-dollar-sign-alt "></i>
          {Props.price}
        </small>
      </div>
    </div>
  );
}

export default Card;
