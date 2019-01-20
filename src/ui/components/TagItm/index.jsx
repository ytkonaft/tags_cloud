import React from "react";
import { Link } from "react-router-dom";

const TagItm = ({ id, label, sentimentScore }) => (
  <Link to={`/tag/${id}`} style={{ fontSize: `${sentimentScore / 100}em` }}>
    {label}
  </Link>
);

export default TagItm;
