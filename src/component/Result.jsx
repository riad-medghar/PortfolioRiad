import React from "react";

const keys = ["title", "description", "price", "rating", "category"];

const Result = (props) => (
  <div>
    {keys.map((key) => (
      <div key={key}>
        <span>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${props[key]}`}</span>
      </div>
    ))}
  </div>
);

export default Result;
