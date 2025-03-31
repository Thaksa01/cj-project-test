"use client";
import styles from "./page.module.css";
import TagInput from "./components/input";
import Tag from "./components/tag";
import { useMemo, useState } from "react";
import { isColor } from "./utils";
import { TagData } from "./components/tag/tag.interface";
import List from "./components/list";
import React from "react"; 


export default function Home() {
  const [tags, setTags] = useState<TagData[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  const addTag = (tag: string) => {
    console.log("add tag", tag);
    if (isColor(tag) && !colors.includes(tag)) {
      console.log("add color tag", tag);
      setColors([...colors, tag]);
    }

    if (!tags.find((t) => t.text === tag)) {
      setTags([...tags, { text: tag, count: 1 }]);
    } else {
      const updatedTags = tags.map((t) => {
        if (t.text === tag) {
          return { ...t, count: t.count + 1 };
        }
        return t;
      });
      setTags(updatedTags);
    }
  };

  const removeTag = (index: number) => {
    const updatedTags = tags
      .map((tag, i) => {
        if (i === index) {
          if (tag.count > 1) {
            return { ...tag, count: tag.count - 1 };
          }else {
            return { ...tag, count: 0 };
          }
        }else{
          return tag;
        }
      })
      .filter((tag) => tag.count > 0);

      console.log(updatedTags);

    setTags(updatedTags);
  };

  const othersData = useMemo(() => {
    const list = tags.filter(tag => !colors.includes(tag.text));
    return list.map(tag => tag.text);
  }, [tags, colors]);

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <main className={styles.main}>
        <TagInput tags={tags} onAddTag={addTag}>
          <Tag tags={tags} removeTag={removeTag} />
        </TagInput>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <List dataList={colors} title={"Colors"}/>
          <List dataList={othersData} title={"Tags"}/>
        </div>
      </main>
    </div>
  );
}
