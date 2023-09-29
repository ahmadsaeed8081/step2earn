import React from "react";
import { CheckIcon } from "../../assets/Icons";
const Token = () => {
  return (
    <div>
      <div id="token" className="token-section  ">
        <div className="token-wrap wrapWidth grid lg:grid-cols-2 ">
          <div className="token-details flex-1 max-md:mx-auto">
            <p className="token-desc text-white flex justify-start items-end gap-1 ">
              <hr className="w-20 pb-2" />
              How to Purchaise
            </p>
            <h1 className="token-heading">Buy Token Easy</h1>
            <p className="token-desc">
              Here is our full documents that help you to understand <br />
              deeply about us and our operation
            </p>
            <div className="token-checked grid lg:grid-cols-2 max-md:grid-cols-2 gap-10 max-md:gap-3">
              <div className="check-wrap ">
                <div className="check">
                  <CheckIcon />
                </div>
                <h2 className="check-desc">Easy Purchaise</h2>
              </div>
              <div className="check-wrap ">
                <div className="check">
                  <CheckIcon />
                </div>
                <h2 className="check-desc">Simple Option</h2>
              </div>
              <div className="check-wrap ">
                <div className="check">
                  <CheckIcon />
                </div>
                <h2 className="check-desc">Privaci & Policy</h2>
              </div>
              <div className="check-wrap ">
                <div className="check">
                  <CheckIcon />
                </div>
                <h2 className="check-desc">One Pager</h2>
              </div>
            </div>
            <button className="token-button">
              Buy Sale Token <select className="select"></select>
            </button>
          </div>
          <div className="flex-1 py-7 px-7 max-md:p-0">
            <img
              src="./images/hand.png"
              alt="Hand"
              className="object-contain max-md:w-[250px] max-md:h-[250px] max-md:mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
