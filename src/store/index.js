import { createStore } from "vuex"
import companies from "@/json/companies.json";

export default createStore({
  state: {
    todos: [
      { text: "make the bed", id: 1 },
      { text: "play some games", id: 2 },
    ],
    companies: companies,
    home: "bg1",
    about: "bg1",
    contact: "bg1",
    records: [
      {
        event: "Initial record",
        time: "Some time"
      }
    ],
    user: 36,
    feedbacks: []
  },
  mutations: {
    addTodo(state, newTodo) {
      const id = Math.floor(Math.random() * (10000 - 3)) + 3;
      state.todos = [
        { text: newTodo.trim(), id },
        ...state.todos,
      ]; //operator ...
    },

    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },

    deleteCompany(state, idx) {
      state.companies.splice(idx, 1);
    },

    addRecord(state, record) {
      state.records.push(record);
    },
    updateFeedback(state, feedbacks) {
      state.feedbacks = feedbacks;
    }
  },
  actions: {
    async getFeedback({ commit, state }) {
      let response = await fetch(
        `https://gorest.co.in/public/v1/users/${state.user}/posts`
      );

      let result = await response.json();
      console.log(result.data);
      commit('updateFeedback', result.data);
      //feedbacks.value = result.data;
    }
  },
  getters: {
    getPass() {
      return("pw");
    },
    getTime() {
      //Testing
      let currentdate = new Date();
      let datetime =
        "Time: " +
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds() +
        ":" +
        currentdate.getMilliseconds();

      console.log(datetime);

      return datetime;
    }
  },
  modules: {
  }
})