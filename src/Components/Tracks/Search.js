import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../../ContextController";

export default function Search() {
  const { tracks, heading, settracks, setheading } = useContext(Context);
  console.log(heading);

  const [input, setinput] = useState("");
  const [trackTitle, settrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((res) => {
        settracks(res.data.message.body.track_list);
        setheading("Searched results");
      })
      .catch((error) => console.log(error));
  }, [trackTitle]);

  const handlesubmit = (e) => {
    e.preventDefault();
    settrackTitle(input);
  };

  return (
    <div className="card mb-4 mt-2 p-2 bg-light">
      <div className="card-body text-center">
        <h1 className="display-4 text-center">Search a song</h1>
        <p className="lead">Search for Lyrics</p>
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Song Title..."
              value={input}
              name="input"
              onChange={(e) => setinput(e.target.value)}
            />
          </div>
          <button className="btn btn-danger btn-block btn-lg mb-5">
            Search for Songs
          </button>
        </form>
      </div>
    </div>
  );
}
