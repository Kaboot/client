<template>
  <div>
    <div id="race">
      <h1>{{mess}}</h1>
      <input v-model="score" type="text" />
      <!-- <button class="btn btn-success" id="myida" ref="myida" style="width: 100px; height:100px" v-on:click.prevent="addScore">Nyamuk</button> -->
      <input
        v-on:click.prevent="addScore"
        id="myida"
        type="image"
        src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png"
        style="width:100px"
      />
      <button
        class="btn btn-success"
        id="myidb"
        ref="myidb"
        style="width: 100px; height:100px"
        v-on:click.prevent="addScore"
      >Nyamuk</button>
      <button
        class="btn btn-success"
        id="myidc"
        ref="myidc"
        style="width: 100px; height:100px"
        v-on:click.prevent="addScore"
      >Nyamuk</button>
      <button
        class="btn btn-success"
        id="myidd"
        ref="myidd"
        style="width: 100px; height:100px"
        v-on:click.prevent="addScore"
      >Nyamuk</button>
      <button
        class="btn btn-success"
        id="myide"
        ref="myide"
        style="width: 100px; height:100px"
        v-on:click.prevent="addScore"
      >Nyamuk</button>
      <a v-if="!started" v-on:click.prevent="getStarted">Get Started</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Race",
  data() {
    return {
      score: 0,
      started: false,
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
      setTimeout(function() {
        this.messages.forEach(message => {
          this.mess = message;
        });
      }, 3000);
    },
    getStarted() {
      this.started = true;
      function RandomObjectMover(obj, container) {
        console.log(container);
        this.$object = obj;
        this.$container = container;
        this.pixels_per_second = 500;
        this.current_position = {
          x: 0,
          y: 0
        };
        this.is_running = false;
      }

      // Set the speed of movement in Pixels per Second.
      RandomObjectMover.prototype.setSpeed = function(pxPerSec) {
        this.pixels_per_second = pxPerSec;
      };

      RandomObjectMover.prototype._generateNewPosition = function() {
        // Get container dimensions minus div size
        var availableHeight = this.$container.innerHeight - 250;
        var availableWidth = this.$container.innerWidth - 500;

        // Pick a random place in the space
        var y = Math.floor(Math.random() * availableHeight);
        var x = Math.floor(Math.random() * availableWidth);

        return { x: x, y: y };
      };

      RandomObjectMover.prototype._calcDelta = function(a, b) {
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        return dist;
      };

      RandomObjectMover.prototype._moveOnce = function() {
        // Pick a new spot on the page
        var next = this._generateNewPosition();

        // How far do we have to move?
        var delta = this._calcDelta(this.current_position, next);

        // Speed of this transition, rounded to 2DP
        var speed = Math.round((delta / this.pixels_per_second) * 100) / 100;

        // console.log(this.current_position, next, delta, speed);

        this.$object.style.transition = "transform " + speed + "s linear";
        this.$object.style.transform =
          "translate3d(" + next.x + "px, " + next.y + "px, 0)";

        // Save this new position ready for the next call.
        this.current_position = next;
      };

      RandomObjectMover.prototype.start = function() {
        if (this.is_running) {
          return;
        }

        // Make sure our object has the right css set
        this.$object.willChange = "transform";
        this.$object.pointerEvents = "auto";

        this.boundEvent = this._moveOnce.bind(this);

        // Bind callback to keep things moving
        this.$object.addEventListener("transitionend", this.boundEvent);

        // Start it moving
        this._moveOnce();

        this.is_running = true;
      };

      RandomObjectMover.prototype.stop = function() {
        if (!this.is_running) {
          return;
        }

        this.$object.removeEventListener("transitionend", this.boundEvent);

        this.is_running = false;
      };

      // Init it
      var a = new RandomObjectMover(document.getElementById("myida"), window);
      var b = new RandomObjectMover(document.getElementById("myidb"), window);
      var c = new RandomObjectMover(document.getElementById("myidc"), window);
      var d = new RandomObjectMover(document.getElementById("myidd"), window);
      var e = new RandomObjectMover(document.getElementById("myide"), window);
      a.start();
      b.setSpeed(200);
      b.start();
      c.setSpeed(2000);
      c.start();
      d.start();
      e.start();
    },
    addScore() {
      this.score++;
      this.muncul = "none";
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
#id {
  padding: 0;
  margin: 0;
}
#myidc {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>