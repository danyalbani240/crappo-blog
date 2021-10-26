<template>
  <div class="flex w-full">
    <div class=" w-3/12 mx-3" v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup() {},
};
</script>

<style></style>
