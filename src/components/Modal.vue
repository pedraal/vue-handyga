<template>
  <div class="modal-container">
    <div class="modal-wrapper" @click.stop :style="{background: $handyga.options.bgColor, color: $handyga.options.textColor}">
      <div class="modal-header">
        <h2>{{locales.title}}</h2>
      </div>
      <div class="divider"></div>
      <div class="modal-body handyga-modal-body">
        <p v-html="parseMD(locales.body)"></p>
      </div>
      <div class="divider"></div>
      <div class="modal-action">
        <div @click="accept" class="modal-action-primary">{{locales.accept}}</div>
        <div @click="refuse" class="modal-action-secondary">{{locales.refuse}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    locales: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    accept () {
      this.$handyga.accept(() => this.$emit('updateUI', 'none'))
    },
    refuse () {
      if (this.$handyga.options.mandatory) {
        this.$handyga.leave()
      } else {
        this.$handyga.reject(() => this.$emit('updateUI', 'none'))
      }
    },
    parseMD (str) {
      return marked(str)
    }
  }
}
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
    border-radius: 3px;
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
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

<style lang="scss">
.handyga-modal-body a,
.handyga-modal-body a:link,
.handyga-modal-body a:visited{
  color: white;
  text-decoration: underline;
}
</style>
