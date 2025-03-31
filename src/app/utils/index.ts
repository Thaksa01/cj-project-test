export const isColor = (index: string) => {
  const s = new Option().style;
  s.color = index;
  return s.color !== "";
}