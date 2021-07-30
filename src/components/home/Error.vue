<template>
  <div class="error-wrapper">
    <div class="error">
      <span class="material-icons">warning</span> Please input a valid value
      <span class="material-icons">warning</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error-wrapper {
  position: fixed;
  width: 100%;
  top: 260px;
  position: fixed;
  width: 500px;
  height: 200px;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
}
.error {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: white;
  padding: 20px;
  font-weight: 200;
  font-size: 20px;
  margin: 0 auto;
  width: 500px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
}
.material-icons {
  margin: 0 20px;
}
</style>
