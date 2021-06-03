import React from "react";
import "./_sideMenu.scss";

const SideMenu = ({ title, Icon }) => {
  return (
    <div className="aga--spotify--sideMenu">
      {Icon && <Icon className="aga--spotify--sideMenu__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SideMenu;
