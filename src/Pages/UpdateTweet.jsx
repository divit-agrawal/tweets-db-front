import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UpdateTweet = () => {
  const [categoryData, setCategoryData] = useState("");

  const location = useLocation();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let tweet_link = e.target.elements.tweet_link?.value.trim();
    let categories = e.target.elements.categories?.value;
    let featuring = e.target.elements.featuring?.value;
    var catArray = categories.split(",");
    //removing spaces in categories
    for (let i = 0; i < catArray.length; i++) {
      catArray[i] = catArray[i].trim();
    }
    var apd = {
      data: tweet_link,
      categories: catArray,
      is_featured: featuring,
    };
    console.log(apd);
    const token = localStorage.getItem("token");
    var axiosConfig = {
      headers: {
        "auth-token": token,
      },
    };
    axios
      .post(
        "https://tweets-db-backend.herokuapp.com/updateTweet",
        apd,
        axiosConfig
      )
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    var str = "";
    location.state.tweetData.categories.map((data) => {
      str = str + data + ",";
      return str;
    });
    str = str.substr(0, str.length - 1);
    setCategoryData(str);
  }, []);

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Update Tweet
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="tweetLink">Tweet Link</label>
            <input
              type="url"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="tweet_link"
              placeholder="Tweet URL"
              defaultValue={`https://twitter.com/${location.state.tweetData.user_name}/status/${location.state.tweetData.tweet_id}`}
              required
            />
          </div>
          <div>
            <label htmlFor="categories">Categories</label>
            <input
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="categories"
              placeholder="startups, mental health ..."
              required
              defaultValue={categoryData}
            />
          </div>
          <div>
            <label htmlFor="isFeatured">Featuring</label>
            <br />
            {location.state.tweetData.is_featured ? (
              <input
                type="radio"
                className={` p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="featuring"
                name="isFeatured"
                value="true"
                required
                defaultChecked
              />
            ) : (
              <input
                type="radio"
                className={` p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="featuring"
                name="isFeatured"
                value="true"
                required
              />
            )}

            <label
              className={` p-2 text-primary outline-none text-sm transition duration-150 ease-in-out mb-4`}
              htmlFor="featuring"
            >
              On
            </label>
            <br />
            {location.state.tweetData.is_featured ? (
              <input
                type="radio"
                className={` p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="featuring"
                name="isFeatured"
                value="false"
              />
            ) : (
              <input
                type="radio"
                className={` p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="featuring"
                name="isFeatured"
                value="false"
                defaultChecked
              />
            )}
            <label
              className={` p-2 text-primary outline-none text-sm transition duration-150 ease-in-out mb-4`}
              htmlFor="featuring"
            >
              Off
            </label>
            <br />
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

export default UpdateTweet;
