import React, { useEffect, useState } from "react";
import "../index";
import SearchBar from "../Components/SearchBar";
import TweetCard from "../Components/TweetCard";
// import Capsule from "../Components/Capsule";
import axios from "axios";

export default function Home(props) {
  const [trending, setTrending] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    var apd = { category: ["trending"] };
    axios
      .post(
        "https://tweets-db-backend.herokuapp.com/searchCategory?limit=3",
        apd
      )
      .then((data) => {
        setTrending(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") != null) props.setLoggedIn(true);
  }, []);
  // useEffect(() => {}, [isSearched]);
  return (
    <div className="Home">
      <div>
        <h1 className="head">Discover Best Tweets</h1>
      </div>
      <SearchBar
        isSearched={isSearched}
        setIsSearched={setIsSearched}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      <div className="eg-search">
        <p>
          Try <u>Bitcoin</u>, <u>Trump</u>, <u>Startup</u>, <u>SpaceX</u>
        </p>
      </div>

      {!isSearched ? (
        <>
          {/* <div className="Trending">
            <div className="trending-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div> */}
          <div className="trending-text">
            <h2>Trending</h2>
          </div>
          <section className="main-section">
            {trending.map((e, i) => (
              <TweetCard key={i} data={e} loggedIn={props.loggedIn} />
            ))}
          </section>
        </>
      ) : (
        <section className="main-section">
          {searchResult.map((e, i) => (
            <TweetCard key={i} data={e} loggedIn={props.loggedIn} />
          ))}
        </section>
      )}

      {/* <div className="popular-hashtags">
        <section className="main-section">
          {[...Array(23)].map((e) => (
            <Capsule key={e} />
          ))}
        </section>
      </div> */}
    </div>
  );
}
