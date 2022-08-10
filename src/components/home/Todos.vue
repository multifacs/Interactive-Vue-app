<template>
  <div class="todos">
    <input
      ref="input"
      type="text"
      placeholder="Something to do..."
      v-model="newTodo"
      @keypress.enter="addTodo"
    />
    <transition name="switch" mode="out-in">
      <div v-if="store.state.todos.length">
        <div>Left to do: {{ store.state.todos.length }}</div>
        <transition-group tag="ul" name="list" appear>
          <li
            v-for="todo in store.state.todos"
            :key="todo.id"
            @click="deleteTodo(todo.id)"
          >
            {{ todo.text }}
          </li>
        </transition-group>
        <!-- Transition doesn't work, why? -->
        <transition name="list">
          <button class="btn btn-danger" @click="deleteAll">Clear all</button>
        </transition>
      </div>
      <div v-else>Nothing left to do!</div>
    </transition>
  </div>
</template>

<script>
import { ref, inject, onMounted } from "vue";

const requestURL = "https://jsonplaceholder.typicode.com/todos";

const sendRequest = (method, url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send();
  });
};

export default {
  name: "Todos",
  setup(_, context) {
    const store = inject("store");
    const newTodo = ref("");
    const input = ref(null);

    const addTodo = () => {
      if (newTodo.value.trim() === store.getters.getPass) {
        listen();
        newTodo.value = "";
      } else if (newTodo.value.trim()) {
        store.commit('addTodo', newTodo.value);
        newTodo.value = "";
      } else {
        context.emit("errorOccured");
      }
      if (store.state.todos.length > 0) {
        // using ref to get access to an element
        input.value.placeholder = "Something to do...";
      }
    };

    const deleteTodo = (id) => {
      store.commit('deleteTodo', id);
      if (store.state.todos.length === 0) {
        // using ref to get access to an element
        input.value.placeholder = "Hurry up and add something!";
      }
    };

    const deleteAll = () => {
      store.state.todos.forEach((element) => {
        deleteTodo(element.id);
      });
    };

    const listen = () => {
      console.log("Heard!");
      context.emit("activateControl");
    };

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      //console.log(input.value); // <div>This is a root element</div>
      if (store.state.todos.length === 0) {
        // using ref to get access to an element
        input.value.placeholder = "Hurry up and add something!";
      }

      console.log(input.value);

      sendRequest("GET", requestURL)
      .then(data => {
        //console.log(data[0]);

        for(let i = data.length - 5; i < data.length; i++) {
          console.log(i);
          //console.log(data[i].title);
          newTodo.value = data[i].title;
          addTodo();
        }
      });
    });

    return { store, addTodo, newTodo, deleteTodo, input, listen, deleteAll };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todos {
  max-width: 400px;
  position: relative;
  margin: 20px auto;
}

input {
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border: 1px solid #eee;
  padding: 12px;
}

.todos ul {
  position: relative;
  margin-top: 1rem;
  padding: 0;
}

.todos li {
  list-style-type: none;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  background: white;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
/* .list-enter-to, .list-leave-from {
  opacity: 1;
  transform: scale(1);
} */
.list-enter-active {
  transition: all 0.4s ease;
}
.list-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}
.list-move {
  transition: all 0.3s ease;
}

.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
/* .switch-enter-to,
.switch-leave-from {
  opacity: 1;
  transform: translateY(0px);
} */
.switch-enter-active,
.switch-leave-active {
  transition: all 0.5s ease;
}
</style>
