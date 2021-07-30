<template>
  <div class="text-start">Todos: {{ store.state.todos.length }}</div>
  <div class="segment border border-danger border-3 rounded-3">
    <ul>
      <li v-for="(todo, idx) in store.state.todos" :key="idx" class="event">
        <div class="row" @click="deleteTodo(todo.id)">
          <div class="col text-end">
            {{ todo.text }}
          </div>
          <div class="col text-start">
            {{ todo.id }}
          </div>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script scoped>
export default {
  name: "Todos",
  props: {
    store: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const deleteTodo = (id) => {
      props.store.methods.deleteTodo(id);
    };

    return { deleteTodo };
  },
};
</script>

<style scoped>
.segment {
  box-shadow: 1px 3px 5px rgba(255, 0, 0, 0.5);
}

hr {
  margin: 5px 0;
  margin-top: 3px;
}

.event:hover {
  text-decoration: line-through;
  color: white;
}
</style>