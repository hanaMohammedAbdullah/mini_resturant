import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardOrder from "../Component/CardOrder";
import { OrderActions } from "../Redux/OrderSlice";

function Order() {
  let isDark = useSelector((state) => state.Theme.isDark);
  let isOrderd = useSelector((state) => state.Store.Order);
  let dispatch = useDispatch();

  let [total, settotal] = useState(0);
  useEffect(() => {
    let amount = 0;
    isOrderd.map((data) => {
      amount += data.price;
    });
    console.log(amount);
    settotal(amount);
  }, [isOrderd]);

  const onDelete = (id) => {
    dispatch(OrderActions.dec(id));
  };
  return (
    <div
      className={`${isOrderd.length >= 3 ? "h-full" : "h-screen"} ${
        isDark ? "bg-gray-700  text-gray-200" : "bg-gray-200 "
      }  `}
    >
      <div className="grid grid-cols-2 ">
        <div className="grid grid-col items-center">
          {/* card__order */}
          {isOrderd?.map((data) => {
            return (
              <CardOrder
                img={data?.img}
                name={data.name}
                desc={data.desc}
                count={1}
                delete={() => onDelete(data.id)}
              />
            );
          })}
        </div>
        <div className="grid grid-col ">
          {/* card__order */}
          <div>
            <div className={`${isDark ? "count__order_dark" : "count__order"}`}>
              <h2 className="m-4">
                Subtotal ( {isOrderd?.length} item) : {total}$
              </h2>
              <button
                className={`${isDark ? "order__button_dark" : "order__button"}`}
              >
                payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
