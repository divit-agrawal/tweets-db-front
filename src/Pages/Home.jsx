import React from "react";
import Navbar from "../Components/Navbar";
import "../index";

export default function Home() {
  return (
    <div className="Home">
      <div>
        <h1 className="head">Discover Best Tweets</h1>
      </div>
      <div className="search-bar">
        <div class="p-8">
          <div class="bg-white flex items-center rounded shadow-xl">
            <input
              class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
            />

            <div class="p-4">
              <button class="bg-blue-500 text-white rounded p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                icon
              </button>
            </div>
          </div>
        </div>
      </div>
      <section class="main-section">
        {/* <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div> */}
        {[...Array(9)].map((e, i) => (
          <div class="card"></div>
        ))}
      </section>
    </div>
  );
}
