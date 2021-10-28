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
        <label for="body">body</label>
        <textarea
          required
          v-model="body"
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
    <div>{{ title }},{{ body }},{{ tags }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import Input from "../components/input.vue";
import TagsInput from "../components/TagsInput";
import Button from "../components/Button";

import { useRouter } from "vue-router";
import { projectFirestore, timestamp } from "../firebase/config";

export default {
  components: {
    Input,
    Button,
    TagsInput,
  },
  setup() {
    const title = ref("");
    const body = ref("");
    const tags = ref([]);
    const router = useRouter();

    const updateTags = (e) => {
      tags.value.push(e);
    };
    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp(),
      };
      const res = await projectFirestore.collection("articles").add(post);
      router.push({ name: "Home" });
    };
    return { title, body, tags, updateTags, handleSubmit };
  },
};
</script>
