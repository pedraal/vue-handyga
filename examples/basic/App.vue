<template>
  <div>
    <h1>Hello {{ msg }}!</h1>
    <a @click="accept">accept</a>
    <a @click="reject">reject</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'world',
      consent: false
    }
  },
  methods: {
    accept () {
      this.$handyga.accept()
    },
    reject () {
      this.$handyga.reject()
    }
  },
  mounted () {
    this.$handyga.processConsent(() => alert('No consent cookie found')) // callback called if there is no consent setting stored
  }
}
</script>

<style>
h1 {
  margin: 15px 30px;
  width: 300px;
  text-align: center;
}
a {
  display: block;
  font-weight: bold;
  cursor: pointer;
  margin: 15px 30px;
  width: 300px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 5px;
}
</style>
