import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();
export function ContextController({ children }) {
  const [tracks, settracks] = useState([]);
  const [heading, setheading] = useState("Top 10 tracks");

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=PK&f_has_lyrics=1&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((res) => settracks(res.data.message.body.track_list))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Context.Provider value={{ tracks, heading, settracks, setheading }}>
      {children}
    </Context.Provider>
  );
}
