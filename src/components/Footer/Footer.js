import React from "react";
import { Grid, Slider } from "@material-ui/core";
import { PlaylistPlay, VolumeDown } from "@material-ui/icons";
import { AiFillPlayCircle } from "react-icons/ai";
import {
  BsShuffle,
  BsFillSkipStartFill,
  BsFillSkipEndFill,
} from "react-icons/bs";
import { IoRepeat } from "react-icons/io5";
import "./_footer.scss";

const Footer = () => {
  return (
    <div className="aga--spotify--footer">
      <div className="aga--spotify--footer__left">
        <img
          className="footer-logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <div className="song-info">
          <h4>Justin Bieber - Peaches ft. Daniel Caesar, Giveon</h4>
          <p>Justin Bieber</p>
        </div>
      </div>
      <div className="aga--spotify--footer__center">
        <BsShuffle className="green" />
        <BsFillSkipStartFill className="icon" />
        <AiFillPlayCircle className="icon" size="40" />
        <BsFillSkipEndFill className="icon" />
        <IoRepeat className="green" />
      </div>
      <div className="aga--spotify--footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
