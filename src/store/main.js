//Replacing VueX
import { reactive } from 'vue'
import companies from "@/json/companies.json";

const pass = "pw";

const state = reactive({
  todos: [
    { text: "make the bed", id: 1 },
    { text: "play some games", id: 2 },
  ],
  companies: companies,
  home: "bg1",
  about: "bg1",
  contact: "bg1"
})

const methods = {
  addTodo(newTodo) {
    const id = Math.floor(Math.random() * (10000 - 3)) + 3;
    state.todos = [
      { text: newTodo.trim(), id },
      ...state.todos,
    ]; //operator ...
  },

  deleteTodo(id) {
    state.todos = state.todos.filter((todo) => todo.id != id);
  },

  deleteCompany(idx) {
    state.companies.splice(idx, 1);
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
}

const journal = reactive({
  records: [
    {
      event: "Initial record",
      time: "Some time"
    }
  ],
})

export default {
  pass,
  state,
  methods,
  journal
}