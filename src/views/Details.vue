<template>
  <div>
    detail {{ id }}
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
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import getData from "../composables/getData";
export default {
  props: ["id"],

  setup(props) {
    let postDetails = ref(null);

    onMounted(() => {
      getData(`http://localhost:3000/posts/${props.id}`, postDetails);
    });

    return { postDetails };
  },
};
</script>

<style></style>
