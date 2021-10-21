import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import TweetCard from "../Components/TweetCard";
import axios from "axios";

// const categoryItems = ["All Tweets", "Crypto", "MBA", "Startups", "Life"];

export default function Topics(props) {
  const [tweetList, setTweetList] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [head, setHead] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const handleListItemClick = (e) => {
    if (e === "All Tweets") {
      // console.log("All tweets");
      setHead("All Tweets");
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
      let val;
      if (window.innerWidth > 768) val = e.target.innerHTML.trim();
      else val = e.target.value.trim();
      // console.log(val);
      if (val === "All Tweets") {
        setHead("All Tweets");
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
        var cat = val.toString().toLowerCase().trim().split(" ");
        let c =
          val.toString().toLowerCase().trim().substring(0, 1).toUpperCase() +
          val
            .toString()
            .toLowerCase()
            .trim()
            .substring(1, val.toString().toLowerCase().trim().length);
        setHead(c);
        var apd = { category: cat };
        axios
          .post("https://tweets-db-backend.herokuapp.com/searchCategory", apd)
          .then((data) => {
            // console.log(data.data);
            function compare(a, b) {
              if (a.order < b.order) {
                return -1;
              }
              if (a.order > b.order) {
                return 1;
              }
              return 0;
            }

            data.data.sort(compare);
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
  useEffect(() => {
    axios
      .get("https://tweets-db-backend.herokuapp.com/getCategories")
      .then((data) => {
        // console.log(data.data);
        setCategoryItems(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="Topics">
      <div className="bg">
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
      </div>
      {!isSearched ? (
        <h1 className="text-center text-3xl py-3">{head}</h1>
      ) : (
        <h1 className="text-center text-3xl py-3">Search Results:</h1>
      )}

      <div
        className={`flex flex-no-wrap ${
          window.innerWidth > 768 ? "" : "flex-col"
        }`}
      >
        {window.innerWidth > 768 ? (
          <div className=" absolute sm:relative shadow md:h-full flex-col justify-between hidden sm:flex">
            <main>
              <section className="category">
                <h2>Category List</h2>
                <ul className="">
                  <div
                    key={"allTweets"}
                    className="flex flex-row hover:bg-blue-500 rounded-md hover:text-white px-3 py-3"
                  >
                    <li
                      className="w-full cursor-pointer justify-start"
                      onClick={handleListItemClick}
                    >
                      All Tweets
                    </li>
                    {/* <span className="justify-end">{number.count}</span> */}
                  </div>

                  {/* normal-case text-center justify-items-center items-center
                  hover:bg-blue-400 rounded-md hover:text-white */}
                  {categoryItems.map((number) => (
                    <div
                      key={number.name.toString()}
                      className="flex flex-row hover:bg-blue-500 rounded-md hover:text-white px-3 py-3"
                    >
                      <li
                        className="w-full cursor-pointer justify-start"
                        onClick={handleListItemClick}
                      >
                        {number.name}
                      </li>
                      <span className="justify-end">{number.count}</span>
                    </div>
                  ))}
                </ul>
              </section>
            </main>
          </div>
        ) : (
          <section className="dropdown">
            <select className="selectColor" onChange={handleListItemClick}>
              <option>All Tweets</option>
              {categoryItems.map((number) => (
                <option>{number.name}</option>
              ))}
            </select>
          </section>
        )}
        {!isSearched ? (
          <section className="main-section">
            {tweetList.map((e, i) => (
              <TweetCard key={i} data={e} loggedIn={props.loggedIn} />
            ))}
          </section>
        ) : (
          <section className="main-section">
            {searchResult.map((e, i) => (
              <TweetCard key={i} data={e} loggedIn={props.loggedIn} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
