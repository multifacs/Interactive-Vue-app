<template>
  <div class="text-start">Events: {{ store.journal.records.length }}</div>
  <div class="segment border border-danger border-3 rounded-3">
    <ul>
      <li v-for="(record, idx) in store.journal.records" :key="idx" class="event">
        <div class="row">
          <div class="col text-end">
            {{ record.event }}
          </div>
          <div class="col text-start">
            {{ record.time }}
          </div>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Events",
  props: {
    store: {
      type: Object,
      required: true,
    },
  },
  setup() {},
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
    color: white;
}
</style>