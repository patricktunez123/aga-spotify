import React from "react";
import Footer from "../Footer";
import SideBar from "../SideBar";
import AppBody from "../AppBody";
import "./_player.scss";

const Player = ({ spotifyApi }) => {
  return (
    <div className="aga--spotify--player">
      <div className="aga--spotify--player__body">
        <SideBar />
        <AppBody spotifyApi={spotifyApi} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
