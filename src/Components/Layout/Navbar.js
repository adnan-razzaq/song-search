import React, { useContext } from "react";
import { Context } from "../../ContextController";

export default function Navbar() {
  // const context = useContext(Context);
  // console.log(context);

  return (
    <nav className="navbar navbar-light bg-danger">
      <h1 className="navbar-brand mb-0 mx-auto h1 text-white">Lyrics Search</h1>
    </nav>
  );
}
