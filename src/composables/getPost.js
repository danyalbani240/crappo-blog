import { projectFirestore } from "../firebase/config";
const loadPost = async (id, theNode, error) => {
  try {
    const res = await projectFirestore
      .collection("articles")
      .doc(id)
      .get();
      if(!res.exists){
          throw Error('That post does not exist')
      }
    theNode.value = { ...res.data(), id: res.id };
  } catch (err) {
    error.value = err.message;
  }
};
export default loadPost;
