<template>
  <div class="toast-wrapper" :style="{background: '#5c6bc0'}">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
        />
      </svg>
    </div>
    <div
      class="text"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum accusamus, tempora pariatur reprehenderit modi blanditiis quis sunt nulla sequi laborum, ipsum corporis, odio aliquid et perspiciatis minima doloribus soluta!</div>
    <div class="action">
      <div @click="start">Accept</div>
      <div @click="info">More info</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("gaStore", [])
  },
  methods: {
    ...mapActions("gaStore", ["updateUI"]),
    start() {
      this.$vueHandyGa.start();
      this.updateUI("none");
    },
    info() {}
  }
};
</script>

<style scoped>
.toast-wrapper {
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 600px;
  color: white;
  border-radius: 3px;
  padding: 15px;
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  margin: 0 10px;
}
svg {
  fill: #ffffff;
}

.action div {
  cursor: pointer;
  margin: 0 20px;
  font-weight: bold;
  text-align: center;
  background: rgba(40, 40, 40, 0.15);
  transition: all 0.3s ease-in-out;
  padding: 7px 12px;
  border-radius: 5px;
}

.action div:last-of-type {
  font-weight: 300;
  font-size: 12px;
  margin-top: 5px;
  padding: 7px 4px;
  background: rgba(0, 0, 0, 0);
}

.action div:hover {
  background: rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 720px) {
  .toast-wrapper {
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    width: 100%;
  }
}
</style>