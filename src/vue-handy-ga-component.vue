<template>
  <div>
    <transition name="toast">
      <Toast v-if="UIstate === 'toast'" />
    </transition>
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
    ...mapGetters("gaStore", ["UIstate"])
  },
  methods: {
    ...mapActions("gaStore", [])
  },
  data() {
    return {
      toast: true
    };
  },
  mounted() {
    console.log(this.$test);
    this.$test.three();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

.toast-enter-active {
  animation: toast-in 0.5s ease-in-out;
}

.toast-leave-active {
  animation: toast-out 0.5s ease-in-out;
}

@keyframes toast-in {
  from {
    transform: translateY(28px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes toast-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(28px);
    opacity: 0;
  }
}
</style>
