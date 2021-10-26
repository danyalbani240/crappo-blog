<template>
  <div class="flex items-center flex-col">
    <label :for="id" v-if="label">{{ label }}</label>

    <input
      v-model="tag"
      @keydown.enter.prevent="addTag"
      :id="id"
      type="text"
      :class="{
        'placeholder-white': placeholderWhite,
        'placeholder-black': !placeholderWhite,
      }"
      :placeholder="placeholder"
      class="placeholder-black md:w-80 w-64 outline-none py-3 border-b-2 border-Neutral-Grey5 bg-transparent"
    />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: ["placeholder", "placeholderWhite", "label", "id"],
  setup(props, { emit }) {
    const tags = ref([]);
    const tag = ref("");
    const addTag = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/);
        tags.value.push(tag.value);
        emit("updateTags", tag.value);
      }
      tag.value = "";
    };
    return { tag, tags, addTag };
  },
};
</script>
