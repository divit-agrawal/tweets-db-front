import React, { useState } from "react";
import "../index.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function TweetCard(props) {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };
  
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
          <div className="card-head">
            <div className="profile-pic">
              <Link
                to={{
                  pathname: "/updateTweet",
                  state: { tweetData: props.data },
                }}
              >
                Edit
              </Link>
            </div>
            <div className="profile-details">
              <button onClick={handleClick}>Delete</button>
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
            <p>{props.data.text}</p>
          </div>
          <div className="card-body-image">
            <img src={props.data.image_url} alt="img" />
          </div>
          <div className="card-tail">
            <p>{props.data.created_at}</p>
          </div>
        </a>
      </div>
    </>
  );
}
