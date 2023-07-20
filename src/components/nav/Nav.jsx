import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="max-w-[90%] xl:max-w-[1200px] mx-auto flex justify-between items-center p-4">
        <div className="bg-[rgba(0,0,0,.5)] p-2 text-white text-sm rounded-xl">
          The <br /> <span className="text-3xl">Trailers</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter movie"
            className="bg-[rgba(0,0,0,.5)] rounded-xl p-2 placeholder:text-white"
          />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
