import React from "react";
import { Link } from "react-router-dom";
import movies from "../../data";

export default function HeroMovies() {
  return (
    <div className="max-w-[90%] xl:max-w-[1200px] mx-auto hero-section-movies justify-between gap-8 mt-20 xl:-mt-20">
      {movies.slice(4, 7).map((movie, index) => {
        return (
          <Link to={"/"} key={index} className="relative">
            <img
              src={movie.img}
              alt="mario"
              className="aspect-square object-cover"
            />
            <h2 className="text-white font-Bungee text-lg sm:text-2xl absolute left-5 bottom-5">
              {movie.name}
            </h2>
          </Link>
        );
      })}
    </div>
  );
}
