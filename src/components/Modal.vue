<template>
  <div class="modal-container">
    <div class="modal-wrapper">
      <div class="modal-header">
        <h2>Cookies</h2>
      </div>
      <div class="divider"></div>
      <div class="modal-body">
        <p></p>
        TEXT TO DO, FIND I18N PLUGIN
      </div>
      <div class="divider"></div>
      <div class="modal-action">
        <div @click="accept" class="modal-action-primary">Accept</div>
        <div @click="reject" class="modal-action-secondary">Reject</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions('gaStore', ['updateUI']),
    accept() {
      this.$handyga.accept();
    },
    reject() {
      this.$handyga.reject();
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in;
  background: rgba(black, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-wrapper {
    max-width: 60%;
    background: #5c6bc0;
    border-radius: 3px;
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    color: white;
    padding: 5px 15px;

    .modal-header {
      h2 {
        margin-bottom: 0;
      }
    }
    .divider {
      width: 100%;
      height: 1px;
      background: rgba(black, 0.1);
      margin: 5px 0 10px 0;
    }
    .modal-body {
      line-height: 1.4rem;
    }
    .modal-action {
      .modal-action-primary,
      .modal-action-secondary {
        display: inline-block;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border-radius: 5px;
        text-align: center;
        font-weight: bold;
        background: rgba(40, 40, 40, 0.15);
        padding: 7px 12px;
      }
    }
  }
}
</style>
