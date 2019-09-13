<template>
  <div></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("gaStore", [])
  },
  methods: {
    ...mapActions("gaStore", [])
  },
  data() {
    return {};
  }
};
</script>
