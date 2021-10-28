const useTags = (array) => {
  const tagSet = new Set();
  array.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
  });
  return [...tagSet];
};
export default useTags;
