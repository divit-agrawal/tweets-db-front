import React from "react";
import SearchBar from "../Components/SearchBar";
import TweetCard from "../Components/TweetCard";

export default function Topics() {
  return (
    <div id="Topics">
      <div>
        <h1 className="head">Discover Best Tweets</h1>
      </div>
      <SearchBar />
      <div className="eg-search">
        <p>
          Try{" "}
          <a>
            <u>Bitcoin</u>
          </a>
          ,{" "}
          <a>
            <u>Trump</u>
          </a>
          ,{" "}
          <a>
            <u>Startup</u>
          </a>
          ,{" "}
          <a>
            <u>SpaceX</u>
          </a>
        </p>
      </div>
      <div className="flex flex-no-wrap">
        <div className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
          <div className="px-8">
            <ul className="mt-12">
              {[...Array(10)].map((e, i) => (
                <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                  <div className="flex items-center">
                    <span className="text-sm  ml-2">Category </span>
                  </div>
                  <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">
                    5
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section className="main-section">
          {[...Array(9)].map((e, i) => (
            <TweetCard />
          ))}
        </section>
      </div>
    </div>
  );
}
