<template>
  <div>
    <form @submit.prevent>
      <Input
        label="Post Title"
        form="Title"
        id="title"
        placeholder="Vue js best charts"
        :model="title"
        placeholderWhite
      />
      <div class="flex flex-col items-center my-10">
        <label for="body">post Body</label>
        <textarea
          v-model="postBody"
          placeholder="enter the post things"
          id="body"
        ></textarea>
      </div>
      <TagsInput
        @updateTags="updateTags"
        placeholder="ui"
        id="inputTag"
        label="Tags"
        :tag="true"
      />
      <p v-for="tag in tags" :key="tag">{{ tag }}</p>
      <Button :blue="true" name="Submit" />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import Input from "../components/input.vue";
import TagsInput from "../components/TagsInput";
import Button from "../components/Button";
export default {
  components: {
    Input,
    Button,
    TagsInput,
  },
  setup() {
    const title = ref("");
    const postBody = ref("");
    const tags = ref([]);
    const updateTags = (e) => {
      tags.value.push(e);
    };
    return { title, postBody, tags, updateTags };
  },
};
</script>

<style></style>
