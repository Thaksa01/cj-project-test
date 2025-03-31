import { isColor } from "@/app/utils";
import { TagProps } from "./tag.interface";
import React from "react"; 

const Tag: React.FC<TagProps> = ({ tags, removeTag }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tags.map((tag, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            background: isColor(tag.text) ? tag.text : "#f0f0f0",
            padding: "4px 8px",
            borderRadius: "12px",
            margin: "4px",
          }}
        >
          <span style={{ marginRight: "8px", color: "black" }}>
            {tag.text} {tag.count > 1 && `x ${tag.count}`}
          </span>
          <button
            onClick={() => {
              console.log(index);
              removeTag(index);
            }}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "black",
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tag;
