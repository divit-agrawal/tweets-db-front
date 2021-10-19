import React, { useEffect } from "react";
import "../index.css";
import axios from "axios";

export default function SearchBar(props) {
  useEffect(() => {});
  const handleChange = (e) => {
    e.preventDefault();
    let inputText = e.target.value;
    if (inputText === "") props.setIsSearched(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let inputText = e.target.elements.search?.value.trim().toString();
    // console.log(inputText);
    if (inputText.includes("https://twitter.com/")) {
      let apd = {
        data: inputText,
      };
      axios
        .post("https://tweets-db-backend.herokuapp.com/searchSingleTweet", apd)
        .then((data) => {
          // console.log(data);
          let d = [];
          d[0] = data.data;
          props.setSearchResult(d);
          props.setIsSearched(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (inputText.includes("#")) {
      let arr = inputText.split(" ");
      let apd = {
        tag: arr,
      };
      axios
        .post("https://tweets-db-backend.herokuapp.com/searchTag?limit=9", apd)
        .then((data) => {
          // console.log(data);
          props.setSearchResult(data.data);
          props.setIsSearched(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let arr = inputText.split(" ");
      let apd = {
        category: arr,
      };
      // console.log(apd);
      axios
        .post(
          "https://tweets-db-backend.herokuapp.com/searchCategory?limit=9",
          apd
        )
        .then((data) => {
          // console.log(data);
          props.setSearchResult(data.data);
          props.setIsSearched(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="search-bar">
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="bg-white flex items-center rounded shadow-xl">
            <input
              className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Twitter URL, keyword, hashtag..."
              onChange={handleChange}
            />

            <div className="p-4">
              <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
