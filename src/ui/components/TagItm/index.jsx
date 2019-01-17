import React from "react";
import { Link } from "react-router-dom";

const TagItm = ({ id, label, fontSize }) => (
  <Link to={`/tag/${id}`} style={{ fontSize: `${fontSize / 1.8}px` }}>
    {label}
  </Link>
);

export default TagItm;
