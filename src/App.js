import { useEffect } from "react";
import SpotifyAPI from "spotify-web-api-js";
import Login from "./components/Login";
import Player from "./components/Player";
import { getToken } from "./config/spotify";
import { SET_PLAYLISTS, SET_TOKEN, SET_USER } from "./data/actionTypes";
import { useDataLayer } from "./data/DataLayer";

const spotifyApi = new SpotifyAPI();

function App() {
  const [{ user, token }, dispath] = useDataLayer();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = ""; // REMOVE THE TOKEN FROM URL AFTER GRABBING IT, FOR SECURITY
    const _token = hash.access_token;

    if (_token) {
      dispath({
        type: SET_TOKEN,
        payload: _token,
      });
      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then((user) => {
        dispath({
          type: SET_USER,
          payload: user,
        });
      });

      spotifyApi.getUserPlaylists().then((playlists) => {
        dispath({
          type: SET_PLAYLISTS,
          payload: playlists,
        });
      });
    }
  }, [token, dispath]);

  return (
    <div className="app">
      {!token ? <Login /> : <Player spotifyApi={spotifyApi} />}
    </div>
  );
}

export default App;
