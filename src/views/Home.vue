<template>
  <div>
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>Loading..</div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import PostList from "../components/PostList";
import TagCloud from "../components/TagCloud";

import loadPosts from "../composables/getPosts";
export default {
  components: { PostList, TagCloud },
  name: "Home",
  setup() {
    const posts = ref([]);
    const error = ref(null);

    onMounted(() => {
      loadPosts(posts);
    });
    return { posts, error };
  },
};
</script>
