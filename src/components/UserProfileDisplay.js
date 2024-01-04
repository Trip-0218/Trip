import React from "react";
import Header from "./Header";
import "../Css/Profile.css";

const UserProfileDisplay = ({ users }) => {
  // You need logic here to find and display the specific user profile based on the route parameter

  return (
    <div>
      <Header />
      <div class="content-profile-page">
        <div class="profile-user-page card">
          <div class="img-user-profile">
            <img
              class="profile-bgHome"
              src="https://37.media.tumblr.com/88cbce9265c55a70a753beb0d6ecc2cd/tumblr_n8gxzn78qH1st5lhmo1_1280.jpg"
              alt=""
            />
            <img
              class="avatar"
              src="http://gravatar.com/avatar/288ce55a011c709f4e17aef7e3c86c64?s=200"
              alt="jofpin"
            />
          </div>
          <button>Follow</button>
          <div class="user-profile-data">
            <h1>Jose Pino</h1>
            <p>github.com/jofpin</p>
          </div>
          <div class="description-profile">
            Front-end | Security Researcher | CSS Warrior |{" "}
            <a href="https://twitter.com/bullgit" title="bullgit">
              <strong>@bullgit</strong>
            </a>{" "}
            | I love to create small things for the internet!
          </div>
          <ul class="data-user">
            <li>
              <a>
                <strong>3390</strong>
                <span>Posts</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDisplay;
