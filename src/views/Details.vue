<template>
  <div>
    <div class="text-Neutral-Red" v-if="error">{{ error }}</div>
    <div v-if="postDetails">
      <h1 class="text-4xl">{{ postDetails.title }}</h1>
      <p>{{ postDetails.body }}</p>
      <p
        class="bg-green-500 text-white rounded-lg py-2 px-5 cursor-pointer hover:bg-green-700 transition-all inline-block mt-5 mx-3"
        v-for="tag in postDetails.tags"
        :key="tag"
      >
        #{{ tag }}
      </p>
      <div>
        <button @click="deletePost">Delete</button>
      </div>
    </div>
    <div v-if="!error && postDetails == false">Loading...</div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import loadPost from "../composables/getPost";
import { projectFirestore } from "../firebase/config";
import { useRouter } from "vue-router";
export default {
  props: ["id"],

  setup(props) {
    let postDetails = ref(null);
    const error = ref(null);
    const router = useRouter();
    onMounted(() => {
      loadPost(props.id, postDetails, error);
    });
    const deletePost = async () => {
      await projectFirestore
        .collection("articles")
        .doc(props.id)
        .delete();
      router.push({ name: "Home" });
    };
    return { postDetails, error, deletePost };
  },
};
</script>

<style></style>
