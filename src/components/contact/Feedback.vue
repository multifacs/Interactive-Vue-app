<template>
  <ul class="feedback">
    <li v-for="feedback of feedbacks" :key="feedback.id">
      <h6>User: {{ feedback.user_id }}</h6>
      <h5>Title: {{ feedback.title }}</h5>
      <p>{{ feedback.body }}</p>
    </li>
  </ul>
</template>

<script>
import { ref, onMounted, inject, computed } from "vue";
export default {
  setup() {
    const store = inject("store");
    
    store.dispatch('getFeedback');
    //console.log(feedbacks);

    return { feedbacks: computed(() => store.state.feedbacks) };
  },
};
</script>

<style scoped>
.feedback li {
  list-style: none;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
}
</style>