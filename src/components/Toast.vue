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
    <div class="action">Accept</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.toast-wrapper {
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 400px;
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

.action {
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.7s ease;
  text-align: center;
}

.action:hover {
  font-weight: bold;
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