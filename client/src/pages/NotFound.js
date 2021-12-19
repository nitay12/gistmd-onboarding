import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      Oh, it looks like you got lost ...
      <br/>
      <Link to={"/"}>Take me back home</Link>
    </div>
  );
}

export default NotFound;
