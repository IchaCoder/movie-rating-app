import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import movies from "../../data";

export default function Trending() {
  return (
    <div className="mt-32 md:mt-20 max-w-[90%] xl:max-w-[1200px] mx-auto">
      <h2 className="font-bold">TRENDING THIS WEEK</h2>
      <div className="mt-8 main-section-movies gap-8">
        {movies.slice(0, 4).map((movie, id) => {
          return (
            <Link to="/" key={id} className="">
              <img
                src={movie.img}
                alt="mario"
                className="object-cover h-[200px]"
              />
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
          );
        })}
      </div>
    </div>
  );
}
