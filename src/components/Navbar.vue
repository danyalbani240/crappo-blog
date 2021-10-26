<template>
  <div>
    <nav class="flex justify-around">
      <router-link
        class="text-accent hover:border-indigo-700 hover:text-primary"
        :to="{ name: 'Home' }"
        >Home</router-link
      >
      <router-link
        class="text-accent hover:text-primary"
        :to="{ name: 'Create' }"
        >Create</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.router-link-exact-active {
  border-bottom: 2px solid gray;
  padding-bottom: 5px;
}
</style>
