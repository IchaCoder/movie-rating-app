import React from "react";
import { Link } from "react-router-dom";

export default function NowShowing() {
  return (
    <div className="mt-20 max-w-[90%] xl:max-w-[1200px] mx-auto">
      <h2 className="font-bold">NOW SHOWING</h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-8">
        <Link to={"/"} className="relative">
          <img src="/assets/mario.jpg" alt="mario" />
          <h2 className="text-white font-Bungee text-lg sm:text-2xl absolute left-5 bottom-5">
            Super Mario Bros
          </h2>
          <div className="w-14 h-14 grid place-items-center bg-[#05161E] rounded-full absolute top-2 left-2 text-[#F5C518]">
            9.4
          </div>
        </Link>
        <Link to={"/"} className="relative">
          <img src="/assets/mario.jpg" alt="mario" />
          <h2 className="text-white font-Bungee text-lg sm:text-2xl absolute left-5 bottom-5">
            Super Mario Bros
          </h2>
          <div className="w-14 h-14 grid place-items-center bg-[#05161E] rounded-full absolute top-2 left-2 text-[#F5C518]">
            9.4
          </div>
        </Link>
        <Link to={"/"} className="relative">
          <img src="/assets/mario.jpg" alt="mario" />
          <h2 className="text-white font-Bungee text-lg sm:text-2xl absolute left-5 bottom-5">
            Super Mario Bros
          </h2>
          <div className="w-14 h-14 grid place-items-center bg-[#05161E] rounded-full absolute top-2 left-2 text-[#F5C518]">
            9.4
          </div>
        </Link>
        <Link to={"/"} className="relative">
          <img src="/assets/mario.jpg" alt="mario" />
          <h2 className="text-white font-Bungee text-lg sm:text-2xl absolute left-5 bottom-5">
            Super Mario Bros
          </h2>
          <div className="w-14 h-14 grid place-items-center bg-[#05161E] rounded-full absolute top-2 left-2 text-[#F5C518]">
            9.4
          </div>
        </Link>
      </div>
    </div>
  );
}
