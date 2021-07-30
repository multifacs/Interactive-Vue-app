<template>
  <div class="card" style="width: 18rem">
    <!-- Use require() for relative image paths in v-bind -->
    <img
      :src="require('../../assets/' + card.img)"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ card.name }}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <Modal :card="card"/>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/about/Modal.vue"
export default {
  name: "CompanyCard",
  components: {
    Modal
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  setup() {},
};
</script>

<style>
</style>