import React from "react";

import "./style.css";

export const Comment = ({ comment, level }) => (
  <div className="comment">
    <div className="comment_container">
      <img className="comment_profile" src={comment.image} alt={comment.name} />
      <div className="comment_content">
        <h2 className="comment_name">{comment.name}</h2>
        <strong className="comment_time">{comment.time}</strong>
        <p>{comment.text}</p>
        {level === 1 && <button className="comment_button">Reply</button>}
      </div>
    </div>

    {comment.comments &&
      comment.comments.map((comment, key) => (
        <Comment key={`comment_${key}`} comment={comment} />
      ))}
  </div>
);
