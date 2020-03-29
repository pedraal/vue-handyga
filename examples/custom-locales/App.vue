<template>
  <div>
    Hello {{ msg }}!
    <vue-handy-ga />
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'world'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
</style>
