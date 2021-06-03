import React from "react";
import SideMenu from "./SideMenu";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { useDataLayer } from "../../data/DataLayer";
import "./_sideBar.scss";

const SideBar = ({ title, Icon }) => {
  const [{ playlists }, dispatch] = useDataLayer();
  console.log("the palyli", playlists);
  return (
    <div className="aga--spotify--sidebar">
      <img
        className="aga--spotify--sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideMenu Icon={AiFillHome} title="Home" />
      <SideMenu Icon={AiOutlineSearch} title="Search" />
      <SideMenu Icon={VscLibrary} title="Your Library" />

      <strong className="aga--spotify--sidebar__title">Playlists</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SideMenu title={playlist.name} />
      ))}
    </div>
  );
};

export default SideBar;
