<template>
  <div>
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading..</div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import PostList from "../components/PostList";
import loadData from "../composables/getData";
export default {
  components: { PostList },
  name: "Home",
  setup() {
    const posts = ref([]);
    const error = ref(null);

    onMounted(() => {
      loadData("http://localhost:3000/posts", posts);
    });
    return { posts, error };
  },
};
</script>
