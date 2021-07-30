<template>
  <div class="text-start">Companies: {{ store.state.companies.length }}</div>
  <div class="segment border border-danger border-3 rounded-3">
    <ul>
      <li v-for="(company, idx) in store.state.companies" :key="idx" class="event">
        <div class="row" @click="deleteCompany(idx)">
          <div class="col-2 text-end">
            {{ company.id }}
          </div>
          <div class="col-3 text-start">
            {{ company.name }}
          </div>
          <div class="col-3 text-start">
            {{ company.img }}
          </div>
          <div class="col-4 text-start">
            {{ company.url }}
          </div>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Companies",
  props: {
    store: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const deleteCompany = (idx) => {
      props.store.methods.deleteCompany(idx);
    };

    return { deleteCompany };
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