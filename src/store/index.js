import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firestore'
import swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomID: '',
    roomName: '',
    name: '',
    member: [],
    status: false
  },
  mutations: {
    CREATE_ROOM (state, payload) {
      state.roomID = payload
    },
    JOIN_ROOM (state, payload) {
      state.member.push(payload)
    },
    UPDATE_SCORE (state, payload) {

    },
    UPDATE_NAME (state, payload) {
      state.name = payload
    },
    UPDATE_STATUS (state, payload) {
      state.status = payload
    }
  },
  actions: {
    createRoom ({ commit }, payload) {
      db.collection('rooms').add({ 'member0': { 'username': payload, 'score': 0 }, count: 0, status: false })
        .then(result => {
          commit('CREATE_ROOM', result.id)
          localStorage.setItem('roomID', result.id)
          localStorage.setItem(`member`, `member0`)
          commit('UPDATE_NAME', payload)
          let temp = {
            'member0': {
              'username': payload,
              'score': 0
            }
          }
          commit('JOIN_ROOM', temp)
          swal.fire({
            title: `Room ID: ${result.id}`
          })
          router.push('/race')
        })
    },
    joinRoom ({ commit }, payload) {
      let count
      commit('CREATE_ROOM', payload.id)
      localStorage.setItem('roomID', payload.id)
      db.collection('rooms').doc(payload.id).get()
        .then(result => {
          console.log(result.data().count)
          count = Number(result.data().count)
          count++
          if (count < 4) {
            return db.collection('rooms').doc(payload.id).update({ [`member${count}`]: { 'username': payload.user, 'score': 0 }, count })
          } else {
            console.log('masuk else')
            throw {
              'title': 'ruang sudah penuh'
            }
          }
        })
        .then(result => {
          let temp = {
            [`member${count}`]: {
              'username': payload.user,
              'score': 0
            }
          }
          commit('UPDATE_NAME', payload.user)
          commit('JOIN_ROOM', temp)
          localStorage.setItem(`member`, `member${count}`)
          console.log(result, 'sukses')
          swal.fire({
            title: 'You joined the room',
            icon: 'success',
            timer: 2000
          })
          router.push('/race')
        })
        .catch(err => {
          swal.fire({
            title: err.title,
            icon: 'error',
            timer: 2000
          })
          console.log(err, 'gagal')
        })
    },
    updateScore ({ commit }, payload) {
      db.collection('rooms').doc(payload.id).get()
        .then(result => {
          let temp = result.data()
          let score = temp[`${localStorage.getItem('member')}`].score + payload.score
          console.log(temp[`${localStorage.getItem('member')}`].score)
          db.collection('rooms').doc(payload.id).update({
            [`${localStorage.getItem('member')}`]: {
              score: score, username: payload.username
            }
          })
        })
        .then(doc => {
          console.log('sukses update')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {

  },
  modules: {
  }
})
