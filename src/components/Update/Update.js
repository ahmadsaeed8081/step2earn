import React from "react";
import {
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
} from "../../assets/Icons";
import { Link } from "react-router-dom";

const Update = () => {
  return (
    <div id="update" className="update-section">
      <div className="update-details wrapWidth">
        <h1 className="update-heading">Don't miss out, Stay updated</h1>
        <p className="update-desc">
          Don’t hesitate to subscribe to latest news about ICo markets as well
          as crucial financial knowledge to become successful investors globally
        </p>
        <div className="update-icons">
        
          <div className="icon">

            <FacebookIcon />

          </div>

          <div className="icon">
            <TwitterIcon />
          </div>
          <div className="icon">
            {" "}
            <InstagramIcon />
          </div>
          <div className="icon">
            <LinkedinIcon />
          </div>
          <div className="icon">
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
