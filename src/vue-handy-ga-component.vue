<template>
  <div>
    <transition name="notification">
      <Notification v-if="UIstate === 'notification'" />
    </transition>
    <transition name="modal">
      <Modal v-if="UIstate === 'modal'" />
    </transition>
  </div>
</template>

<script>
import Notification from './components/Notification.vue'
import Modal from './components/Modal.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    Notification,
    Modal
  },
  computed: {
    ...mapGetters('gaStore', ['UIstate'])
  },
  mounted () {
    this.$handyga.processConsent()

    let self = this
    if (this.$handyga.options.mandatory) {
      window.addEventListener('click', () => {
        self.$handyga.accept()
      })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.notification-enter-active {
  animation: notification-in 0.5s ease-in-out;
}

.notification-leave-active {
  animation: notification-out 0.5s ease-in-out;
}
.modal-enter-active {
  animation: modal-in 0.5s ease-in-out;
}

.modal-leave-active {
  animation: modal-out 0.5s ease-in-out;
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
@keyframes modal-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modal-out {
  from {
  }
  to {
    opacity: 0;
  }
}
</style>
