<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <Input
        :required="true"
        label="Post Title"
        form="Title"
        id="title"
        placeholder="Vue js best charts"
        v-model="title"
        placeholderWhite
      />
      <div class="flex flex-col items-center my-10">
        <label for="body">post Body</label>
        <textarea
          required
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
import axios from "axios";
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
    const handleSubmit = () => {
      axios
        .post("http://localhost:3000/posts", {
          title: title.value,
          body: postBody.value,
          tags: tags.value,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    return { title, postBody, tags, updateTags, handleSubmit };
  },
};
</script>

<style></style>
