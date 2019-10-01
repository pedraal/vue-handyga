<template>
  <div>
    <h1>Hello {{ msg }}!</h1>
    <a @click="$handyga.start">start</a>
    <a @click="$handyga.reject">block</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "world"
    };
  },
  mounted() {}
};
</script>

<style>
a {
  display: block;
  font-weight: bold;
  cursor: pointer;
  margin: 30px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 5px;
}
</style>
