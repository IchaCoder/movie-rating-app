import React from "react";

const Nav = () => {
  return (
    <>
      <nav className=" flex justify-between items-center py-4">
        <div className="bg-[rgba(0,0,0,.5)] p-2 text-white text-sm rounded-xl">
          The <br />{" "}
          <span className="text-lg md:text-3xl font-Bungee">Trailers</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search movie"
            className="bg-[rgba(0,0,0,.5)] rounded-xl p-2 border border-solid border-white placeholder:text-white"
          />
        </div>
      </nav>
    </>
  );
};

export default Nav;
