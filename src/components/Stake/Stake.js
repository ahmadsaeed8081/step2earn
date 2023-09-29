import React from "react";
import { ArrowRightIcon } from "../../assets/Icons";
const Stake = () => {
  return (
    <div id="stake" className="stake-section ">
      <div className="wrapWidth grid lg:grid-cols-2  stake-wrap">
        <div className="flex-1 stake-details ">
          <p className="stake-desc-main">
            <hr className="w-20 pb-2" />
            Staking
          </p>
          <h1 className="main-heading">How to Stake ?</h1>
          <h2 className="stake-heaing">Add Xyz Tokens</h2>
          <p className="stake-desc">
            You will need tokens in your wallet to stake. Once you purchase CIP
            tokens, make sure that you add the CIP token to your
            MetaMask/TrustWallet Wallet so you can view your CIP balance.
          </p>
          <h2 className="stake-heaing">Connect & Verify Wallet</h2>
          <p className="stake-desc">
            Click the "Connect Wallet" button at the upper right corner of the
            site and make sure you have the Arbitrum network selected in your
            MetaMask wallet.
          </p>
          <h2 className="stake-heaing">Stake Wallet</h2>
          <p className="stake-desc">
            You'll need to click the 'Stake CIP' and scroll to the top of the
            page to bring up the staking interface on the site.
          </p>
          <button className="stake-btn">
            <h1 className="btn">More Details</h1>
            <div className="btn-arrow">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center  stake-img ">
          <img
            src="./images/Stake-Design.png"
            alt="StakeImg"
            className="object-contain max-md:w-[250px] max-md:h-[250px] max-md:mx-auto "
          />
          <div className="stake-col"></div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
