<template>
  <div>
    <transition name="notification">
      <Notification v-if="UIstate === 'notification'" />
    </transition>
  </div>
</template>

<script>
import Notification from "./components/Notification.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Notification
  },
  computed: {
    ...mapGetters("gaStore", ["UIstate"])
  },
  methods: {
    ...mapActions("gaStore", [])
  },
  mounted() {
    this.$handyga.processConsent();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

.notification-enter-active {
  animation: notification-in 0.5s ease-in-out;
}

.notification-leave-active {
  animation: notification-out 0.5s ease-in-out;
}

@keyframes notification-in {
  from {
    transform: translateY(28px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes notification-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(28px);
    opacity: 0;
  }
}
</style>
