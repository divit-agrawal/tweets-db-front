import React from "react";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddTweet = (props) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let categoryName = e.target.elements.category_name?.value.trim();
    // console.log(categoryName);
    let aped = {
      name: categoryName,
    };
    const token = localStorage.getItem("token");
    var axiosConfig = {
      headers: {
        "auth-token": token,
      },
    };
    axios
      .post(
        "https://tweets-db-backend.herokuapp.com/addCategory",
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
          Add Category
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Category Name</label>
            <input
              type="text"
              className={`w-full mt-2 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="category_name"
              placeholder="eg- education"
              required
            />
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
