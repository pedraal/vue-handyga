<template>
  <div>
    <transition name="notification">
      <Notification v-if="UIstate === 'notification'" @updateUI='UIstate = $event' :locales="notificationLocales"/>
    </transition>
    <transition name="modal">
      <Modal v-if="UIstate === 'modal'" @updateUI='UIstate = $event' :locales="modalLocales"/>
    </transition>
  </div>
</template>

<script>
import Notification from './components/Notification.vue'
import Modal from './components/Modal.vue'

export default {
  props: {
    locales: {
      type: Object,
      default: () => {}
    }
  },
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
    LOCALES () {
      return this.$handyga.localesBuilder({ ...this.$handyga.options.customLocales, ...this.locales })
    },
    notificationLocales () {
      return {
        notification: this.$handyga.options.mandatory ? this.LOCALES.mandatoryNotification : this.LOCALES.notification,
        accept: this.LOCALES.accept,
        more: this.LOCALES.more
      }
    },
    modalLocales () {
      return {
        title: this.LOCALES.modalTitle,
        body: this.LOCALES.modalBody,
        accept: this.$handyga.options.mandatory ? this.LOCALES.mandatoryAccept : this.LOCALES.accept,
        refuse: this.$handyga.options.mandatory ? this.LOCALES.mandatoryRefuse : this.LOCALES.refuse
      }
    }
  },
  mounted () {
    this.$handyga.processConsent(() => { this.UIstate = 'notification' })

    const self = this
    if (this.$handyga.options.mandatory && !!this.$handyga.options.gaID) {
      window.addEventListener('click', function me () {
        self.$handyga.accept(() => { self.UIstate = 'none' })
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
