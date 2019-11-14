<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <input type="text" v-model="name">
    <!-- <button @click="createUser">Username</button> -->

    <button @click="createRoom">Create Room</button>
    <br>
    <input type="text" v-model="roomID">
    <button @click="joinRoom">Join Room</button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input type="text" v-model="score">
    <button @click="updateScore"></button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import db from '../config/firestore'
export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      name: '',
      user: '',
      roomID: ''
    }
  },
  methods: {
    createRoom () {
      this.$store.dispatch('createRoom', this.name)
      this.name = ''
    },
    joinRoom () {
      let payload = {
        id: this.roomID,
        user: this.name
      }
      this.$store.dispatch('joinRoom', payload)
    },
    updateScore () {
      localStorage.getItem('')
    }
  }
}
</script>
