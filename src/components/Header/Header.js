import React from "react";
import { useDataLayer } from "../../data/DataLayer";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "./_header.scss";

const Header = () => {
  const [{ user }, dispatch] = useDataLayer();
  return (
    <div className="aga--spotify--header">
      <div className="aga--spotify--header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for songs, Artists, or podcasts"
        />
      </div>
      <div className="aga--spotify--header__right">
        {user?.images[0]?.url ? (
          <Avatar src={user?.images[0]?.url} />
        ) : (
          <Avatar />
        )}
        <h6 className="profile-name">{user?.display_name}</h6>
      </div>
    </div>
  );
};

export default Header;
