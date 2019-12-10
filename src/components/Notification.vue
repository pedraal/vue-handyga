<template>
  <div class="notification-wrapper" @click.stop>
    <div class="text">
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
          />
        </svg>
      </div>
      <p v-if="!$handyga.options.mandatory">
        TEXT TO DO, FIND I18N PLUGIN
      </p>
      <p v-else>
        TEXT TO DO, FIND I18N PLUGIN
      </p>
    </div>
    <div v-if="!$handyga.options.advanced" class="action">
      <div @click="accept" class="action-primary">Accept</div>
      <div
        v-if="!$handyga.options.mandatory"
        @click="reject"
        class="action-secondary"
      >
        Refuse
      </div>
    </div>
    <div v-else class="action">
      <div @click="accept" class="action-primary">Accept</div>
      <div
        v-if="!$handyga.options.mandatory"
        @click="openModal"
        class="action-secondary"
      >
        More info
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('gaStore', [])
  },
  methods: {
    ...mapActions('gaStore', ['updateUI']),
    accept() {
      this.$handyga.accept();
    },
    reject() {
      this.$handyga.reject();
    },
    openModal() {
      this.$store.dispatch('gaStore/updateUI', 'modal');
    }
  },
  mounted() {
    let self = this;
    if (this.$handyga.options.mandatory) {
      window.addEventListener('click', () => {
        self.accept();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.notification-wrapper {
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 600px;
  color: white;
  background: #5c6bc0;
  border-radius: 3px;
  padding: 15px;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  margin: 0 20px 0 10px;
}
svg {
  fill: #ffffff;
}

.text {
  display: flex;
  text-align: justify;
  align-items: center;
}

.action .action-primary,
.action .action-secondary {
  cursor: pointer;
  margin: 0 20px;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  text-align: center;
}
.action .action-primary {
  font-weight: bold;
  background: rgba(40, 40, 40, 0.15);
  padding: 7px 12px;
}

.action .action-secondary {
  font-weight: 300;
  font-size: 12px;
  margin-top: 5px;
  padding: 7px 4px;
  background: rgba(0, 0, 0, 0);
}

.action .action-primary:hover {
  background: rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 720px) {
  .notification-wrapper {
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    width: 100%;
    display: block;
  }
  .action {
    margin-top: 10px;
  }
}
</style>
