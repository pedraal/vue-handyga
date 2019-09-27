<template>
  <div>
    <Toast />
  </div>
</template>

<script>
import Toast from "./components/Toast.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Toast
  },
  computed: {
    ...mapGetters("gaStore", [])
  },
  methods: {
    ...mapActions("gaStore", [])
  },
  data() {
    return {};
  },
  mounted() {
    this.$vueHandyGa.start();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
</style>
