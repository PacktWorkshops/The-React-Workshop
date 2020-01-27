import React, { Component } from "react";
// component
import { Tag } from "../Tag";

class Tags extends Component {
  render() {
    const { tags, selectedTag, handleTags } = this.props;

    return (
      <div>
        Select Filter
        {tags.map((tag, key) => (
          <Tag
            key={`tag${key}`}
            selectedTag={selectedTag}
            handleTags={handleTags}
          >
            {tag}
          </Tag>
        ))}
      </div>
    );
  }
}

export { Tags };
