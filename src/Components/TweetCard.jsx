import React from "react";
import "../index.css";

export default function TweetCard() {
  return (
    <a href="https://twitter.com/kunalb11/status/1438769770187214854">
      <div class="card">
        <div className="card-head">
          <div className="profile-pic">
            <img src={"./Kshah.jpg"} />
          </div>
          <div className="profile-details">
            <div className="profile-name">kunal Shah</div>
            <div className="profile-tw-id">@kunalb11</div>
          </div>
        </div>
        <div className="card-body-text">
          <p>
            SEO Flowcharts To Support SEO Decision Making: A compilation of my
            top 10 ones 👀
            <br /> 🔥 Should you prioritize an SEO Task?
            <br /> 🔥 What to do when hit by Core Update? <br /> 🔥 Should you
            prune or optimize a page?
            <br /> 🔥 Should you migrate a Page to the New Web?
            <br /> More 👇
          </p>
        </div>
        <div className="card-body-image">
          <img src={"./card_img.jpg"} />
        </div>
        <div className="card-tail">
          <p>7:17 Am : Oct 9, 2021</p>
        </div>
      </div>
    </a>
  );
}
