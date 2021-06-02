import { useEffect, useState } from "react";
import Login from "./components/Login";
import { getToken } from "./config/spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getToken();
    window.location.hash = ""; // REMOVE THE TOKEN FROM URL AFTER GRABBING IT, FOR SECURITY
    const _token = hash.access_token;
    if (_token) setToken(_token);
  }, [token]);

  return <div className="app">{!token ? <Login /> : <h1>Logged</h1>}</div>;
}

export default App;
