import React, { useState, useEffect } from "react";

export default function AddTweetCategory(props) {
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");
  const handleChange = (name, order) => {
    // console.log(name, order);
    props.setTweetCategory((tweetCategory) => {
      var currCat = tweetCategory[props.index];
      var restVal = tweetCategory.filter((item, index) => {
        return index != props.index;
      });
      currCat.name = name;
      currCat.order = parseInt(order);
      return [...restVal, currCat];
    });
  };
  const deleteFunc = () => {
    // console.log(name, order);
    props.setTweetCategory((tweetCategory) => {
      var restVal = tweetCategory.filter((item, index) => {
        return item.name != name;
      });
      return [...restVal];
    });
  };
  useEffect(() => {
    setName(props.item.name);
    setOrder(props.item.order.toString());
  }, [props.item]);
  return (
    <div className="flex flex-row mt-6">
      <input
        type="text"
        className={`w-1/3 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
        id="category"
        placeholder="startups"
        onChange={(e) => {
          setName(e.target.value.trim());
          handleChange(e.target.value.trim(), order);
        }}
        value={name}
        required
      />

      <input
        type="text"
        className={`w-1/3 p-2 mx-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
        id="order"
        placeholder="24"
        onChange={(e) => {
          setOrder(e.target.value);
          console.log(e.target.value);
          handleChange(name, e.target.value);
        }}
        value={order}
        required
      />
      <button
        onClick={deleteFunc}
        className="bg-blue-500 h-10 w-9 grid justify-items-center items-center text-white hover:bg-blue-200 px-1 py-1 rounded-md text-sm"
      >
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
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}
