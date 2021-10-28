import { projectFirestore } from "../firebase/config";
const loadPosts = async (theNode) => {
  try {
    const res = await projectFirestore
      .collection("articles")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let docs = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log(docs);
        theNode.value = docs;
      });
    // .get();
    // theNode.value = res.docs.map((doc) => {
    //   return { ...doc.data(), id: doc.id };
    // });
  } catch (err) {
    //error.value = err.message;
    console.log(err);
  }
};
export default loadPosts;
