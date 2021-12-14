import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const ProfileNotFound = () => (
  <Fragment>
    <Spinner />
    <h4 style={{ textalign: "center" }}>User Not Created Profile</h4>
    <Link to="/posts" className="btn btn-primary">
      Go Back
    </Link>
  </Fragment>
);

export default ProfileNotFound;
