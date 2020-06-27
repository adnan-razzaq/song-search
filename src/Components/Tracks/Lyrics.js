import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Layout/Spinner";
import { Link } from "react-router-dom";

export default function Lyrics(props) {
  const { id } = props.match.params;
  const [lyrics, setlyrics] = useState({});
  const [track, settrack] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&f_has_lyrics=1&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((res) => setlyrics(res.data.message.body.lyrics))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_KEY}`
      )
      .then((res) => settrack(res.data.message.body.track))
      .catch((error) => console.log(error));
  }, []);

  return track === undefined ||
    lyrics === undefined ||
    Object.keys(track).length === 0 ||
    Object.keys(lyrics).length === 0 ? (
    <Spinner />
  ) : (
    <>
      <Link to="/">
        <button className="btn btn-danger mt-4">Go back</button>
      </Link>
      <div className="card border-danger text-dark bg-light mt-4">
        <div className="card-header">
          <h3>{track.track_name} by </h3>{" "}
          <span className="text-secondary">{track.artist_name}</span>
          <div className="card-body ">
            <h5 className="card-title">Lyrics</h5>
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>
      </div>
      <ul className="list-group">
        <li className="list-group-item ">
          <strong>album_name:{track.album_name}</strong>
        </li>
        <li className="list-group-item">
          <strong>track_rating:{track.track_rating}</strong>
        </li>
        <li className="list-group-item">
          <strong>track_id:{track.track_id}</strong>
        </li>
        <li className="list-group-item">
          <strong>
            music_genre_name:
            {track.primary_genres.music_genre_list.length === 0
              ? "No genere found"
              : track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name}
          </strong>
        </li>
        <li className="list-group-item">
          <strong>Release Date:{track.first_release_date}</strong>
        </li>
      </ul>
    </>
  );
}
