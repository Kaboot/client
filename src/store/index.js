import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firestore'
import swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomID: '',
    roomName: '',
    member: []
  },
  mutations: {
    CREATE_ROOM (state, payload) {
      state.roomID = payload
    },
    JOIN_ROOM (state, payload) {
      state.member.push(payload)
    }
  },
  actions: {
    createRoom ({ commit }, payload) {
      db.collection('rooms').add({ 'member0': { 'username': payload, 'score': 0 }, count: 0 })
        .then(result => {
          commit('CREATE_ROOM', result.id)
          localStorage.setItem('roomID', result.id)
          localStorage.setItem(`member`, `member0`)
          swal.fire({
            title: `Room IDnya adalah ${result.id}`
          })
        })
    },
    joinRoom ({ commit }, payload) {
      let count
      db.collection('rooms').doc(payload.id).get()
        .then(result => {
          console.log(result.data().count)
          count = Number(result.data().count)
          count++
          return db.collection('rooms').doc(payload.id).update({ [`member${count}`]: { 'username': payload.user, 'score': 0 }, count })
        })
        .then(result => {
          commit('JOIN_ROOM', { 'username': payload.user, 'score': 0 })
          localStorage.setItem(`member`, `member${count}`)
          console.log(result, 'sukses')
          swal.fire({
            title: 'You joined the room',
            icon: 'success',
            timer: 2000,
            showConfirmationButton: false
          })
        })
        .catch(err => {
          console.log(err, 'gagal')
        })
    },
    updateScore ({ commit }, payload) {

    }
  },
  modules: {
  }
})
