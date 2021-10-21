import React, { useState } from "react";
import "../index.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function TweetCard(props) {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };
  // console.log(props.data);
  var text, date, time;
  //text
  text = props.data.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, "");
  //date
  date = props.data.created_at
    .match("[0-9]{4}([-/ .])[0-9]{2}[-/ .][0-9]{2}")
    .toString();
  date = date.substring(0, date.length - 2);
  let month = new Date(date).toLocaleString("en-us", { month: "short" });
  date =
    month +
    " " +
    date.substring(date.length - 2, date.length) +
    ", " +
    date.substring(0, 4);
  //time
  time = props.data.created_at.substring(11, 16);
  let a = parseInt(time.substring(0, 2));
  let suf;
  if (a >= 12) suf = "PM";
  else suf = "AM";
  time = ((a + 11) % 12) + 1 + ":" + time.substring(3, 6) + " " + suf;
  return (
    <>
      {openModal ? (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          user_name={props.data.user_name}
          tweet_id={props.data.tweet_id}
        />
      ) : (
        <></>
      )}
      <div className="card">
        {props.loggedIn ? (
          <div className="h-14 m-0 flex-row">
            {/* <div className="profile-pic">
              <Link
                to={{
                  pathname: "/updateTweet",
                  state: { tweetData: props.data },
                }}
              >
                Edit
              </Link>
            </div> */}
            <div className="profile-details">
              <button
                onClick={handleClick}
                className="w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
        <a
          href={`https://twitter.com/${props.data.user_name}/status/${props.data.tweet_id}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-head">
            <div className="profile-pic">
              <img src={props.data.profile_image_url} alt="img" />
            </div>
            <div className="profile-details">
              <div className="profile-name">{props.data.name}</div>
              <div className="profile-tw-id">@{props.data.user_name}</div>
            </div>
          </div>
          <div className="card-body-text">
            <p>{text}</p>
          </div>
          <div className="card-body-image">
            {props.data.image_url != null ? (
              <img src={props.data.image_url} alt="img" />
            ) : (
              <></>
            )}
          </div>
          <div className="card-tail text-sm pt-1.5">
            <p>
              {date}&#183;{time}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
