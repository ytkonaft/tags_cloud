import React from "react";
import { Link } from "react-router-dom";

const TagItm = ({ id, label, fontSize }) => (
  <Link
    to={`/tag/${id}`}
    style={{
      lineHeight: fontSize,
      fontSize: fontSize
    }}
  >
    {label}
  </Link>
);

export default TagItm;
