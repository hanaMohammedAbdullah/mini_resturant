import React from "react";
import { useSelector } from "react-redux";
import Card from "../Component/Card";
import food from "../Data";
import Footer from "../Component/Footer";

function Home() {
  let isDark = useSelector((state) => state.Theme.isDark);

  return (
    <>
      <div className={` ${isDark ? "bg-gray-200" : "bg-gray-700 "}        `}>
        <div className="  screen_home">
          <h1
            className={`${
              isDark
                ? "text-xl text-black"
                : "text-white text-xl font-extralight"
            }`}
          >
            Food
          </h1>
          <div className={`${isDark ? "Food__border" : "Food__border_dark"} `}>
            {food.map((data) => {
              return (
                <Card
                  key={data.key}
                  id={data.key}
                  name={data.name}
                  desc={data.desc}
                  img={data.img}
                  price={data.price}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
