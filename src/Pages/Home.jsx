import React from "react";
import "../index";
import SearchBar from "../Components/SearchBar";
import TweetCard from "../Components/TweetCard";
import Capsule from "../Components/Capsule";

export default function Home() {
  return (
    <div className="Home">
      <div>
        <h1 className="head">Discover Best Tweets</h1>
      </div>
      <SearchBar />
      <div className="eg-search">
        <p>
          Try{" "}
          <a href="#">
            <u>Bitcoin</u>
          </a>
          ,{" "}
          <a href="#">
            <u>Trump</u>
          </a>
          ,{" "}
          <a href="#">
            <u>Startup</u>
          </a>
          ,{" "}
          <a href="#">
            <u>SpaceX</u>
          </a>
        </p>
      </div>
      <section class="main-section">
        {[...Array(9)].map((e, i) => (
          <TweetCard />
        ))}
      </section>
      <div className="popular-hashtags">
        <section class="main-section">
          {[...Array(20)].map((e, i) => (
            <Capsule />
          ))}
        </section>
      </div>
    </div>
  );
}
