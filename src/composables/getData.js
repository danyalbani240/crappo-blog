const loadData = async (url, theNode) => {
  try {
    let data = await fetch(url);
    if (!data.ok) {
      throw Error("No data available");
    }
    theNode.value = await data.json();
  } catch (err) {
    error.value = err.message;
  }
};
export default loadData