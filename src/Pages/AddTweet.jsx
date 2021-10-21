import React, { useState } from "react";
import axios from "axios";
import AddTweetCategory from "../Components/AddTweetCategory";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddTweet = (props) => {
  const [tweetCategory, setTweetCategory] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let tweet_link = e.target.elements.tweet_link?.value.trim();
    // console.log(tweetCategory);
    let aped = {
      data: tweet_link,
      categories: tweetCategory,
    };
    console.log(aped);
    const token = localStorage.getItem("token");
    var axiosConfig = {
      headers: {
        "auth-token": token,
      },
    };
    axios
      .post(
        "https://tweets-db-backend.herokuapp.com/addTweet",
        aped,
        axiosConfig
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Add Tweet
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="tweetLink">Tweet Link</label>
            <input
              type="url"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="tweet_link"
              placeholder="Tweet URL"
              required
            />
          </div>
          <div>
            <label htmlFor="categories">
              Categories
              <br />
            </label>
            {tweetCategory.map((e, i) => {
              return (
                <AddTweetCategory
                  item={e}
                  index={i}
                  setTweetCategory={setTweetCategory}
                />
              );
            })}
            <button
              onClick={() => {
                setTweetCategory((prev) => [...prev, { name: "", order: 0 }]);
              }}
              className={classNames(
                "bg-blue-500 text-white hover:bg-blue-200 px-3 py-2 rounded-md text-sm font-medium"
              )}
            >
              Add Category
            </button>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              className={classNames(
                "bg-blue-500 text-white hover:bg-blue-200 px-3 py-2 rounded-md text-sm font-medium"
              )}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTweet;
