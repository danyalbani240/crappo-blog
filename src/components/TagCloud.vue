<template>
  <div>
    <h3>Tags</h3>
    <div class="tags" v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tags', params: { tag: tag } }"
        >#{{ tag }}</router-link
      >
    </div>
  </div>
</template>

<script>
import useTags from "../composables/useTags";
export default {
  props: ["posts"],
  setup(props) {
    const tags = useTags(props.posts);
    return { tags };
  },
};
</script>

<style>
div.tags a.router-link-active {
  background-color: green;
}
</style>
