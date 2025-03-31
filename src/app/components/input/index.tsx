"use client";
import React, { useState } from "react";
import { TagInputProps } from "./input.interface";

const TagInput: React.FC<TagInputProps> = ({  separator = ",", children, onAddTag }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    console.log("handleAddTag");
    let newTags = inputValue
      .split(new RegExp(`[${separator} ]+`))
      .map(tag => tag.trim()).filter(tag => tag.length > 0);

    if (newTags.length > 0) {
      console.log("newTags", newTags);
      newTags.forEach(tag => onAddTag(tag)); 
    }
    setInputValue("");
  };

  return (
    <div style={{ padding: 10, display: "flex", flexWrap: "wrap", border: "1px solid #ccc", borderRadius: "4px", paddingInline: "8px", alignItems: "center" }}>
      {children}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" || e.key === "," || e.key === " ") && handleAddTag()}
        onBlur={handleAddTag}
        placeholder="Enter tags..."
        style={{ flex: "1", padding: "5px", border: "none", outline: "none", background: "transparent" }}
      />
    </div>
  );
};

export default TagInput;
