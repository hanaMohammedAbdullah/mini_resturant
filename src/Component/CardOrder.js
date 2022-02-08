import React from "react";
import { useSelector } from "react-redux";

function CardOrder(props) {
  let isDark = useSelector((state) => state.Theme.isDark);

  return (
    <div className={`${isDark ? "card__order" : "card__order_dark"}`}>
      <div>
        <img className="w-48 m-2" src={props?.img} alt={"ndjkn"} />
      </div>
      <div className=" m-auto">
        <h1>{props?.name} </h1>
        <div className=" m-5">{props?.desc}</div>

        <button
          onClick={props.delete}
          className="border-2 w-fit rounded-lg px-10 bg-red-500 m-auto"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CardOrder;
