<template>
  <div>
    <div v-if="resultPosts.length">
      <PostList :posts="resultPosts" />
      <TagCloud :posts="posts" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import TagCloud from "../components/TagCloud";
export default {
  components: { PostList, TagCloud },
  setup() {
    const posts = ref([]);
    const route = useRoute();

    const resultPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });
    onMounted(() => {
      getPosts(posts);
    });
    return { resultPosts, posts };
  },
};
</script>

<style></style>
