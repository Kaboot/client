<template>
<div>
  <Race v-if="raceNow"></Race>
  <div id="main">
    <h1 v-if="!raceNow && !ready">vroom vroom !</h1>
    <div v-if="!raceNow && !ready" class="startDiv">
      <sui-button size="huge" animated @click.prevent="start">
        <sui-button-content visible>START</sui-button-content>
        <sui-button-content hidden>
          <sui-icon name="play" />
        </sui-button-content>
      </sui-button>
    </div>
    <h1 v-if="!raceNow && !ready">click click !</h1>
    <Countdown v-if="ready"></Countdown>
  </div>
</div>
</template>

<script>
import Countdown from '@/components/Countdown'
import Race from '@/components/Race'

export default {
  name: 'Main',
  components: {
    Countdown,
    Race
  },
  data () {
    return {
      ready: false,
      raceNow: false
    }
  },
  methods: {
    start () {
      this.ready = true
      setTimeout(this.race, 3500)
    },
    race () {
      this.ready = false
      this.raceNow = true
    }
  }
}
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.startDiv {
  height: 46vh;
  width: 29.94%;
  background-image: url("../assets/bugatti_gif.gif");
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 800px) {
  #main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .startDiv {
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 50%;
    background-image: url("../assets/bugatti_gif.gif");
  }
}
</style>
