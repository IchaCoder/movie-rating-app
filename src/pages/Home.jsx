import React from "react";
import Nav from "../components/nav/Nav";
import HeroMovies from "../components/hero-movies/HeroMovies";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Trending from "../components/trending/Trending";
import NowShowing from "../components/now-showing/NowShowing";
import PopularReviews from "../components/popular-reviews/PopularReviews";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="bg-[#05161E] text-white">
      <div className="bg-[url(/assets/mario.webp)]  h-screen bg-cover bg-center bg-no-repeat relative">
        <div className="max-w-[95%] sm:max-w-[90%] xl:max-w-[1200px] mx-auto ">
          <Nav />
          <div className="bg-[rgba(0,0,0,.6)] p-4 sm:p-6 text-white w-max text-lg md:text-4xl font-Bungee mt-[300px]">
            {" "}
            THE SUPER MARIO BROS. MOVIE
          </div>
        </div>
      </div>
      <HeroMovies />
      <Trending />
      <NowShowing />
      <PopularReviews />
      <div className="mt-20 max-w-[90%] items-center xl:max-w-[60%] mx-auto flex flex-col sm:flex-row  justify-center gap-8">
        <img
          src="/like.png"
          alt="subscribe to trailers"
          className="w-[100px] h-[100px] sm:w-auto sm:h-auto"
        />
        <div>
          <p className="mb-1">The best movie reviews in your inbox</p>
          <input
            type="text"
            placeholder="Enter your email address"
            className="p-2 md:w-[350px] rounded-md"
          />
          <button className="bg-[#1897C2] p-2 rounded-md ml-2">
            Subscribe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
