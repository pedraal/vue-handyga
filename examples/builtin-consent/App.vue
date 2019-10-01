<template>
  <div>
    Hello {{ msg }}!
    <vue-handy-ga />
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
</style>
