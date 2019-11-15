<template>
  <div class="formUsername">
    <sui-form size="huge">
      <sui-form-field @submit.stop.prevent="userJoined" style="align-text: center;">
        <input placeholder="enter your name" v-model="user.name" class="btn-join" />
      </sui-form-field>
      <div is="sui-button-group">
        <sui-button class="btn-enter">Create</sui-button>
        <sui-button-or />
        <sui-button class="btn-enter">Join</sui-button>
      </div>
    </sui-form>
  </div>
</template>

<script>
export default {
  name: 'UsernameForm',
  data () {
    return {
      user: {
        name: ''
      }
    }
  },
  methods: {
    userJoined () {
      db.collection('users')
        .add({
          name: this.user.name
        })
        .then(docRef => {})
        .catch(error => {})
    }
  }
}
</script>

<style scoped>
.formUsername {
  /* display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center; */
  /* background-color: rgb(138, 154, 158); */
  flex: 1 0 auto;
  /* animation: 5s ease 0s infinite alternate none running colorful; */
  /* height: 50px; */
  /* padding: 50px; */
  /* width: 50%; */
}
.btn-enter {
  animation: 5s ease 0s infinite alternate none running colorful;
}
@keyframes colorful {
  0% {
    background: rgb(138, 154, 158);
  }
  25% {
    background: rgb(166, 233, 246);
  }

  50% {
    background: rgb(193, 233, 129);
  }

  75% {
    background: rgb(235, 210, 85);
  }

  100% {
    background: rgb(236, 156, 112);
  }
}
</style>
