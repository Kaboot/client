<template>
  <div class="formUsername">
    <sui-form v-show="createOpt" size="huge">
      <sui-form-field @submit.stop.prevent="createRoom" style="align-text: center;">
        <input placeholder="enter your name" type="text" v-model="name" class="btn-join" />
      </sui-form-field>
      <sui-button
        type="submit"
        class="btn-enter"
        size="large"
        animated
        @click.prevent="createRoom"
      >
        <sui-button-content visible>Enter</sui-button-content>
        <sui-button-content
          hidden
          style="display: flex; text-align: center; justify-content: center;"
        >
          <sui-icon size="large" name="plus square" />
        </sui-button-content>
      </sui-button>
    </sui-form>

    <sui-form v-show="joinOpt" size="huge">
      <sui-form-field @submit.stop.prevent="joinRoom" style="align-text: center;">
        <input placeholder="enter key room" type="text" v-model="roomID" class="btn-join" />
      </sui-form-field>
      <sui-button
        type="submit"
        class="btn-enter"
        size="large"
        animated
        @click.prevent="joinRoom"
      >
        <sui-button-content visible>Join</sui-button-content>
        <sui-button-content hidden>
          <sui-icon size="large" name="sign in alternate" />
        </sui-button-content>
      </sui-button>
    </sui-form>

    <div v-if="!joinOpt && !createOpt" is="sui-button-group" size="huge">
      <sui-form size="huge">
        <sui-form-field @submit.stop.prevent="opt" style="align-text: center;">
          <input placeholder="enter your name" v-model="name" class="btn-join" />
        </sui-form-field>
        <div is="sui-button-group">
          <sui-button class="btn-enter" @click.stop.prevent="created">Create</sui-button>
          <sui-button-or />
          <sui-button class="btn-enter" @click.stop.prevent="joined">Join</sui-button>
        </div>
      </sui-form>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: 'UsernameForm',
  data () {
    return {
      name: '',
      user: '',
      roomID: '',
      createOpt: false,
      joinOpt: false
    }
  },
  methods: {
    created () {
      if (this.name.length > 0) this.$store.dispatch('createRoom', this.name)
      else {
        swal.fire({
          title: 'input your name'
        })
      }
    },
    joined () {
      if (this.name.length > 0) this.joinOpt = true
      else {
        swal.fire({
          title: 'input your name'
        })
      }
    },
    createRoom () {
      if (this.name.length > 0) this.$store.dispatch('createRoom', this.name)
      else {
        swal.fire({
          title: 'input your name'
        })
      }
      // this.name = ''
    },
    joinRoom () {
      if (this.name.length > 0) {
        let payload = {
          id: this.roomID,
          user: this.name
        }
        this.$store.dispatch('joinRoom', payload)
      } else {
        swal.fire({
          title: 'input your name'
        })
      }
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
