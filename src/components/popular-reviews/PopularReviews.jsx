import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function PopularReviews() {
  return (
    <div className="mt-20 max-w-[90%] xl:max-w-[60%] mx-auto">
      <h2 className="font-bold text-center">POPULAR REVIEWS</h2>
      <div className="mt-8 main-section-movies gap-8">
        <Link to="/">
          <img src="/assets/mario.jpg" alt="mario" />
          <div className="py-2">
            <h2 className="font-Bungee">Super Mario</h2>
            <div className="flex gap-8">
              <p>2023</p>
              <p className="flex gap-2 items-center">
                <AiFillStar className="text-[#F5C518]" /> 4.0
              </p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <img src="/assets/mario.jpg" alt="mario" />
          <div className="py-2">
            <h2 className="font-Bungee">Super Mario</h2>
            <div className="flex gap-8">
              <p>2023</p>
              <p className="flex gap-2 items-center">
                <AiFillStar className="text-[#F5C518] " /> 4.0
              </p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <img src="/assets/mario.jpg" alt="mario" />
          <div className="py-2">
            <h2 className="font-Bungee">Super Mario</h2>
            <div className="flex gap-8">
              <p>2023</p>
              <p className="flex gap-2 items-center">
                <AiFillStar className="text-[#F5C518] " /> 4.0
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
