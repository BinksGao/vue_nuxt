// import Vue from 'vue'
// import vuex from 'vuex'
// Vue.use(vuex)


// const store = () => new vuex.Store({
//     state: {
//         count: 1
//     },
//     mutations: {
//         add(state) {
//             state.count++
//         }
//     },

// })

// export default store

export const state = () => ({
    count: 1
})

export const mutations = {
    add(state) {
        state.count++
    }
}