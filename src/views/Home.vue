<template>
  <div>
    <div id="homepage">
      <br />
      <br />
      <br />
      <!-- <sui-icon name="spinner" size="huge" loading /> -->
      <img src="../assets/image1.jpg" alt style="width:300px" />
      <h1>Ka-Boot !</h1>
      <UsernameForm></UsernameForm>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import db from '../config/firestore'
import UsernameForm from "@/components/UsernameForm";
export default {
  name: "Home",
  components: {
    // HelloWorld
    UsernameForm
  },
  data() {
    return {
      name: "",
      user: "",
      roomID: ""
    };
  },
  methods: {
    createRoom() {
      this.$store.dispatch("createRoom", this.name);
      this.name = "";
    },
    joinRoom() {
      let payload = {
        id: this.roomID,
        user: this.name
      };
      this.$store.dispatch("joinRoom", payload);
    },
    updateScore() {
      localStorage.getItem("");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Caveat+Brush|Covered+By+Your+Grace|Gloria+Hallelujah|Holtwood+One+SC|Patrick+Hand+SC&display=swap");

#homepage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  height: 100vh;
  width: 100%;
  background-color: rgb(26, 26, 26);
}

#homepage h1 {
  /* font-family: 'Gloria Hallelujah', cursive; */
  font-family: "Caveat Brush", cursive;
  /* font-family: 'Gloria Hallelujah', cursive;
    font-family: 'Gloria Hallelujah', cursive; */
  animation: 3s ease 0s infinite alternate none running logos;
  font-size: 70px;
  margin-top: 0;
  font-size: 100px;
}

@keyframes logos {
  0% {
    color: crimson;
  }
  25% {
    color: orangered;
  }

  50% {
    color: goldenrod;
  }

  75% {
    color: black;
  }

  100% {
    color: darkcyan;
  }
}
</style>
