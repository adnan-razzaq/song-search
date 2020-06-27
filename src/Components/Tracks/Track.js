import React from "react";
import { Link } from "react-router-dom";

export default function Track(props) {
  return (
    <div className="col-md-6">
      <div className="card mb-4 bg-light">
        <h5>{props.track.track.artist_name}</h5>
        <p className="card-text">
          <strong>Track:{props.track.track.track_name} </strong>
          <br />
          <strong>Album:{props.track.track.album_name} </strong>
        </p>
        <Link to={`lyrics/tracks/${props.track.track.track_id}`}>
          <button className="btn btn-danger btn-block">See more details</button>
        </Link>
      </div>
    </div>
  );
}
