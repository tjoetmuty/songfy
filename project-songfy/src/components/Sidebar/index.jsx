import React from "react";
import micro from "../../assets/Micro.png"

const Sidebar = () => {
  return <>
  <div>
    <h1>
        Spotify
    </h1>
    <img src="" alt="" />
  </div>
  <div className="flex">
    <img src={micro} alt="" />
    <p>Top Artist</p>
  </div>
  <div>
    <img src="" alt="" />
    <p>Top Artist</p>
  </div>
  <div>
    <img src="" alt="" />
    <p>Top Music</p>
  </div>
  <div>
    <img src="" alt="" />
    <p>Recently Played</p>
  </div>
  </>;
};

export default Sidebar;
