<template>
  <div>
    <transition name="notification">
      <Notification v-if="UIstate === 'notification'" @updateUI='UIstate = $event'/>
    </transition>
    <transition name="modal">
      <Modal v-if="UIstate === 'modal'" @updateUI='UIstate = $event'/>
    </transition>
  </div>
</template>

<script>
import Notification from './components/Notification.vue'
import Modal from './components/Modal.vue'

export default {
  components: {
    Notification,
    Modal
  },
  data () {
    return {
      UIstate: 'none'
    }
  },
  computed: {
  },
  mounted () {
    this.$handyga.processConsent(() => { this.UIstate = 'notification' })

    const self = this
    if (this.$handyga.options.mandatory) {
      window.addEventListener('click', function me () {
        self.$handyga.accept(() => { self.UIstate = 'none' })
        console.log('test')
        window.removeEventListener('click', me)
      })
    }
  }
}
</script>

<style lang="scss">
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
