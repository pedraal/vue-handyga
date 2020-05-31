<template>
  <div>
    Hello {{ msg }}!
    <p></p>
    <vue-handy-ga :locales="{notification: 'Locales from prop'}"/>
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
