<template>
  <div
    class="border items-center flex-col flex justify-center  w-full h-44 rounded shadow"
  >
    <router-link
      class="hover:text-green-500"
      :to="{ name: 'Details', params: { id: post.id } }"
    >
      <h3 class="text-3xl">{{ post.title }}</h3>
      <p>{{ snippet }}</p>
    </router-link>

    <div class="flex mt-5 w-full justify-around">
      <p
        class="bg-green-500 text-white rounded-lg py-2 px-5 cursor-pointer hover:bg-green-700 transition-all"
        v-for="tag in post.tags"
        :key="tag"
      >
        {{ tag }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 10) + "...";
    });
    return { snippet };
  },
};
</script>
