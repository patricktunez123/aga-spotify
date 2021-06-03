import React from "react";
import Header from "../Header";
import "./_appBody.scss";

const AppBody = ({ spotifyApi }) => {
  return (
    <div className="aga--spotify--body">
      <Header spotifyApi={spotifyApi} />
    </div>
  );
};

export default AppBody;
