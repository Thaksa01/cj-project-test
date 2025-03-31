export interface TagProps {
  tags: TagData[]
  removeTag: (index: number) => void
}

export type TagData = {
  text: string;
  count: number;
}