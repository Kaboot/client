<template>
  <div style="border:none;">
    <div id="dashboard">
      <sui-table unstackable class="dash">
        <sui-table-header class="dash-head">
          <!-- <sui-icon name="trophy icon" size="small" /> -->
          <strong>SCORE</strong>
        </sui-table-header>
        <sui-table-body style="display: flex; justify-content: space-evenly;">
          <sui-table-row>
            <sui-table-cell>
              <h4 is="sui-header" image>
                <sui-image
                  src="https://semantic-ui.com/images/avatar/small/jenny.jpg"
                  shape="rounded"
                  size="mini"
                />
                <sui-header-content style="font-size:18px;">
                  {{user1}}
                  <sui-header-subheader
                    v-model="score"
                    style="font-size:18px;"
                    placeholder="your score"
                  >{{score1}}</sui-header-subheader>
                </sui-header-content>
              </h4>
            </sui-table-cell>
            <sui-table-cell>
              <h4 is="sui-header" image>
                <sui-image
                  src="https://semantic-ui.com/images/avatar/small/steve.jpg"
                  shape="rounded"
                  size="mini"
                />
                <sui-header-content style="font-size:18px;">
                  {{user2}}
                  <sui-header-subheader
                    style="font-size:18px;"
                    v-model="score"
                    placeholder="your score"
                  >{{score2}}</sui-header-subheader>
                </sui-header-content>
              </h4>
            </sui-table-cell>
            <sui-table-cell>
              <h4 is="sui-header" image>
                <sui-image
                  src="https://semantic-ui.com/images/avatar/small/elliot.jpg"
                  shape="rounded"
                  size="mini"
                />
                <sui-header-content style="font-size:18px;">
                  {{user3}}
                  <sui-header-subheader
                    v-model="score"
                    style="font-size:18px;"
                    placeholder="your score"
                  >{{score3}}</sui-header-subheader>
                </sui-header-content>
              </h4>
            </sui-table-cell>
            <sui-table-cell>
              <h4 is="sui-header" image>
                <sui-image
                  src="https://semantic-ui.com/images/avatar/small/veronika.jpg"
                  shape="rounded"
                  size="mini"
                />
                <sui-header-content style="font-size:18px;">
                  {{user4}}
                  <sui-header-subheader
                    style="font-size:18px;"
                    v-model="score"
                    placeholder="your score"
                  >{{score4}}</sui-header-subheader>
                </sui-header-content>
              </h4>
            </sui-table-cell>
          </sui-table-row>
        </sui-table-body>
      </sui-table>
    </div>

    <div id="race">
      <!-- <button class="btn btn-success" id="myida" ref="myida" style="width: 100px; height:100px" v-on:click.prevent="addScore">Nyamuk</button> -->
      <input
        v-on:click.prevent="addScore(1)"
        id="myida"
        type="image"
        src="https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png"
        style="width:100px"
      />
      <button
        class="btn btn-success"
        id="myidb"
        ref="myidb"
        style="width: 100px; 
        height:100px
        background-image: url(../assets/nyamuk1.jpg)"
        v-on:click.prevent="addScore(10)"
      >Nyamuk</button>
      <button
        class="btn btn-success"
        id="myidc"
        ref="myidc"
        style="width: 100px; height:100px"
        v-on:click.prevent="addScore(1)"
      >Nyamuk</button>
      <button
        class="btn btn-success"
        id="myidd"
        ref="myidd"
        style="width: 100px; height:100px"
        v-on:click.prevent="addScore(1)"
      >Nyamuk</button>
      <button
        class="btn btn-success"
        id="myide"
        ref="myide"
        style="width: 100px; height:100px"
        v-on:click.prevent="addScore(1)"
      >Nyamuk</button>
      <a v-if="!started" v-on:click.prevent="getStarted">Get Started</a>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
import db from "../config/firestore";
export default {
  name: "Race",
  data() {
    return {
      score: 0,
      started: false,
      user1: "",
      score1: 0,
      user2: "",
      score2: 0,
      user3: "",
      score3: 0,
      user4: "",
      score4: 0,
      check: false
    };
  },
  methods: {
    getStarted() {
      if (this.check) {
        console.log("masuk sini");
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
      } else {
        db.collection("rooms")
          .doc(this.$store.state.roomID)
          .update({ status: true })
          .then(() => {
            this.started = true;
            this.check = true;
          })
          .catch(err => {
            this.check = false;
            this.started = false;
          });
      }
    },
    addScore(input) {
      if (this.started) {
        let payload = {
          id: localStorage.getItem("roomID"),
          score: input,
          username: this.$store.state.name
        };
        console.log(payload);
        this.$store.dispatch("updateScore", payload);
      } else {
        swal.fire({
          title: "You need to start first"
        });
      }
    }
  },
  created() {
    if (this.check) {
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
    }
    db.collection("rooms")
      .doc(this.$store.state.roomID)
      .onSnapshot(querySnapshot => {
        let temp = querySnapshot.data();
        console.log(temp);
        this.check = temp.status;
        this.status = temp.status;
        console.log(this.check);
        if (temp.member0 !== undefined) {
          this.user1 = temp.member0.username;
          this.score1 = temp.member0.score;
        }
        if (temp.member1 !== undefined) {
          this.user2 = temp.member1.username;
          this.score2 = temp.member1.score;
        }
        if (temp.member2 !== undefined) {
          this.user3 = temp.member3.username;
          this.score3 = temp.member3.score;
        }
        if (temp.member3 !== undefined) {
          this.user4 = temp.member4.username;
          this.score4 = temp.member4.score;
        }
      });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Caveat+Brush|Covered+By+Your+Grace|Gloria+Hallelujah|Holtwood+One+SC|Patrick+Hand+SC&display=swap");

* {
  font-family: "Patrick Hand SC";
  color: rgb(209, 157, 16);
  font-weight: bolder;
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
#dashboad {
  border: none;
}
.dash {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  border: none;
}
.dash-head {
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  color: rgb(255, 208, 0);
  font-size: 18px;
  padding: 2px;
  border: none;
}
</style>
