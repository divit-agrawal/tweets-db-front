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
          Try <u>Bitcoin</u>, <u>Trump</u>, <u>Startup</u>, <u>SpaceX</u>
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
