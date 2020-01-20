import React, { Component } from "react";
// styles
import "./styles.css";
// components
import { Comment } from "../Comment";

class CommentSection extends Component {
  render() {
    const { comments } = this.props;
    if (!comments || comments.length === 0) {
      return null;
    }
    return (
      <section className="comments">
        <h1>Comments</h1>
        {comments.map((comment, key) => (
          <Comment key={`comment_${key}`} comment={comment} level={1} />
        ))}
      </section>
    );
  }
}

export default CommentSection;
