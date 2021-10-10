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
          <a >
            <u>Bitcoin</u>
          </a>
          ,{" "}
          <a >
            <u>Trump</u>
          </a>
          ,{" "}
          <a >
            <u>Startup</u>
          </a>
          ,{" "}
          <a >
            <u>SpaceX</u>
          </a>
        </p>
      </div>
      <section className="main-section">
        {[...Array(9)].map((e, i) => (
          <TweetCard />
        ))}
      </section>
      <div className="popular-hashtags">
        <section className="main-section">
          {[...Array(23)].map((e, i) => (
            <Capsule />
          ))}
        </section>
      </div>
    </div>
  );
}
