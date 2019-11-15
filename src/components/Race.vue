<template>
  <div id="race">
    <h1>{{mess}}</h1>
  </div>
</template>

<script>
export default {
  name: "Race",
  data() {
    return {
      messages: [
        "NGUEENG!!",
        "WHOOOZZ!",
        "VROOM VROOMM!",
        "CKIIITTT!",
        "DUAAARR!"
      ],
      mess: ""
    };
  },
  methods: {
    showmess() {
      this.messages.forEach(message => {
        this.mess = message;
        setTimeout(function() {
          return this.mess;
        }, 3000);
      });
    }
  },
  created() {
    this.showmess();
  },
  computed() {
    this.showmess();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Caveat+Brush|Covered+By+Your+Grace|Gloria+Hallelujah|Holtwood+One+SC|Patrick+Hand+SC&display=swap");
h1 {
  font-family: "Patrick Hand SC";
  color: rgb(35, 35, 33);
  font-weight: bolder;
  background-color: rgba(250, 235, 215, 0.571);
  width: auto;
}
#race {
  background-image: url("../assets/Space-Phone-Wallpaper.jpg");
  background-attachment: fixed;
  background-blend-mode: soft-light;
  background-size: contain;
  width: 100%;
  height: 100vh;
}
</style>