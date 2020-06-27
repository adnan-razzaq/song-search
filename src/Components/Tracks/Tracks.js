import React, { useContext } from "react";
import { Context } from "../../ContextController";
import Spinner from "../Layout/Spinner";
import Track from "./Track";

export default function Tracks() {
  const tracks = useContext(Context);

  const data =
    tracks.tracks.length === 0 ? (
      <Spinner />
    ) : (
      <React.Fragment>
        <h3 className="text-center mb-4">{tracks.heading}</h3>
        <div className="row">
          {tracks.tracks.map((track, index) => (
            <Track track={track} key={index} />
          ))}
        </div>
      </React.Fragment>
    );

  return <div>{data}</div>;
}
