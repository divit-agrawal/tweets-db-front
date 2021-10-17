import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import TweetCard from "../Components/TweetCard";
import DropDown from "../Components/DropDown";
import axios from "axios";

const categoryItems = ["All Tweets", "Crypto", "MBA", "Startups", "Life"];

export default function Topics(props) {
  const [tweetList, setTweetList] = useState([]);
  // const [isSearched, setIsSearched] = useState(false);
  // const [searchResult, setSearchResult] = useState([]);

  const handleListItemClick = (e) => {
    if (e === "All Tweets") {
      // console.log("All tweets");
      axios
        .get("https://tweets-db-backend.herokuapp.com/getAllTweets")
        .then((data) => {
          // console.log(data);
          setTweetList(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (e.target.innerHTML.trim() === "All Tweets") {
        axios
          .get("https://tweets-db-backend.herokuapp.com/getAllTweets")
          .then((data) => {
            // console.log(data);
            setTweetList(data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        const cat = e.target.innerHTML
          .toString()
          .toLowerCase()
          .trim()
          .split(" ");
        var apd = { category: cat };
        axios
          .post(
            "https://tweets-db-backend.herokuapp.com/searchCategory?limit=9",
            apd
          )
          .then((data) => {
            // console.log(data);
            setTweetList(data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  useEffect(() => {
    handleListItemClick("All Tweets");
  }, []);

  return (
    <div id="Topics">
      <div>
        <h1 className="head">Discover Best Tweets</h1>
      </div>
      <SearchBar
      // isSearched={isSearched}
      // setIsSearched={setIsSearched}
      // searchResult={searchResult}
      // setSearchResult={setSearchResult}
      />
      <div className="eg-search">
        <p>
          Try <u>Bitcoin</u>, <u>Trump</u>, <u>Startup</u>, <u>SpaceX</u>
        </p>
      </div>

      <div className="flex flex-no-wrap">
        {window.innerWidth > 800 ? (
          <div className=" absolute sm:relative shadow md:h-full flex-col justify-between hidden sm:flex">
            <main>
              <section className="category">
                <h2>Category List</h2>
                <ul>
                  {categoryItems.map((number) => (
                    <li key={number.toString()} onClick={handleListItemClick}>
                      {number}
                    </li>
                  ))}
                </ul>
              </section>
            </main>
          </div>
        ) : (
          // <section className="dropdown">
          //   <select className="selectColor">
          //     {categoryItems.map((number) => (
          //       <option>{number}</option>
          //     ))}
          //   </select>
          // </section>
          <div className=" absolute sm:relative shadow md:h-full flex-col justify-between hidden sm:flex">
            <main>
              <section className="category">
                <h2>Category List</h2>
                <ul>
                  {categoryItems.map((number) => (
                    <li key={number.toString()} onClick={handleListItemClick}>
                      {number}
                    </li>
                  ))}
                </ul>
              </section>
            </main>
          </div>
        )}

        <section className="main-section">
          {tweetList.map((e, i) => (
            <TweetCard key={i} data={e} loggedIn={props.loggedIn} />
          ))}
        </section>
      </div>
    </div>
  );
}
