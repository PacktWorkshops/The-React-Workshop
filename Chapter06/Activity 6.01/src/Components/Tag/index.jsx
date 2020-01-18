import React from "react";

import "./tag.css";

const Tag = props => (
  <button
    className={`tag ${props.selectedTag === props.children ? "active" : ""}`}
    onClick={props.handleTags(props.children)}
  >
    {props.children}
  </button>
);

export { Tag };
