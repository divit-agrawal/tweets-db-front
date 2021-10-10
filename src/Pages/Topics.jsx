import React from "react";
import SearchBar from "../Components/SearchBar";
import TweetCard from "../Components/TweetCard";
import DropDown from "../Components/DropDown";

export default function Topics() {
  return (
    <div id="Topics">
      <div>
        <h1 className="head">Discover Best Tweets</h1>
      </div>
      <SearchBar />
      <div className="eg-search">
        <p>
          Try <u>Bitcoin</u>, <u>Trump</u>, <u>Startup</u>, <u>SpaceX</u>
        </p>
      </div>
      <DropDown />
      <div className="flex flex-no-wrap">
        <div className=" absolute sm:relative shadow md:h-full flex-col justify-between hidden sm:flex">
          <main>
            <section class="category">
              <h2>Category List</h2>
              <ul>
                <li>
                  National<span>69</span>
                </li>
                <li>
                  National<span>25</span>
                </li>
                <li>
                  Sports<span>18</span>
                </li>
                <li>
                  Megazine<span>37</span>
                </li>
                <li>
                  Health<span>12</span>
                </li>
                <li>
                  National<span>69</span>
                </li>
                <li>
                  National<span>25</span>
                </li>
                <li>
                  Sports<span>18</span>
                </li>
                <li>
                  Megazine<span>37</span>
                </li>
                <li>
                  Health<span>12</span>
                </li>
                <li>
                  National<span>69</span>
                </li>
                <li>
                  National<span>25</span>
                </li>
                <li>
                  Sports<span>18</span>
                </li>
                <li>
                  Megazine<span>37</span>
                </li>
                <li>
                  Health<span>12</span>
                </li>
              </ul>
            </section>
          </main>
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
