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

          <Link to="https://www.facebook.com/profile.php?id=61551804243401&mibextid=LQQJ4d">
            <FacebookIcon />

            </Link>
          </div>

          <div className="icon">
            <Link to="https://twitter.com/realsteps2earn">
            <TwitterIcon />
            </Link>
          </div>

          <div className="icon">
            <Link to="https://t.me/steps2earn" >
              <LinkedinIcon />
            </Link>
          </div>
          <div className="icon">
          <Link to="https://www.youtube.com/@steps2earn" >
            <YoutubeIcon />
          </Link>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
