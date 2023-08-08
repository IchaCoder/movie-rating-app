import React from "react";
import { Link } from "react-router-dom";
import movies from "../../data";

export default function NowShowing() {
  return (
    <div className="mt-20 max-w-[90%] xl:max-w-[1200px] mx-auto">
      <h2 className="font-bold">NOW SHOWING</h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-8">
        {movies.slice(4, 8).map((movie, index) => {
          return (
            <Link to={"/"} className="relative" key={index}>
              <img src={movie.img} alt="mario" className="h-[300px]" />
              <h2 className="text-white font-Bungee text-lg sm:text-2xl absolute left-5 bottom-5">
                {movie.name}
              </h2>
              <div className="w-14 h-14 grid place-items-center bg-[#05161E] rounded-full absolute top-2 left-2 text-[#F5C518]">
                {movie.ratings}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
