import { TagData } from "../tag/tag.interface";

export interface TagInputProps {
  tags?: TagData[];
  maxTags?: number;
  separator?: string;
  onTagsChange?: (tags: string[]) => void;
  children?: React.ReactNode;
  onAddTag: (tag: string) => void;
}