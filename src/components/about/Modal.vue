<template>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + card.id">
  Website
</button>

<!-- Modal -->
<div class="modal fade" :id="'exampleModal' + card.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Proceed</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Do you with to go to the website of {{card.name}}?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a type="button" :href="card.url" class="btn btn-primary" >Follow</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "Modal",
    props: {
      card: {
      type: Object,
      required: true,
    },
    }
}
</script>

<style>

</style>