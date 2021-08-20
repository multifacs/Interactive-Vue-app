<template>
  <h3>Leave feedback</h3>

  <div class="myform">
    <form id="formElem">
      <div class="mb-3">
        <label for="validationDefaultUsername" class="form-label"
          >Title</label
        >
        <input
          id="validationDefaultUsername"
          type="text"
          name="title"
          class="form-control"
          placeholder="Some title"
          v-model="form.title"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Feedback</label
        >
        <textarea
          id="validationDefault01"
          type="text"
          name="body"
          class="form-control"
          rows="3"
          v-model="form.body"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary" @click="$emit('change')">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { ref, inject, onMounted } from "vue";

export default {
  emits: ["change"],
  setup() {
    const store = inject("store");

    const form = ref({
      user_id: store.state.user,
      title: '',
      body: '',
    });

    console.log('123', form.value);

    const test = ref('');
    onMounted(() => {
      const formElem = document.getElementById("formElem");
      console.log(formElem);
      formElem.onsubmit = async (e) => {
        e.preventDefault();

        //Working with formData
        //let object = {};
        //new FormData(formElem).forEach((value, key) => (object[key] = value));
        //let json = JSON.stringify(object);
        //object["title"] = "feedback";

        console.log('check', JSON.stringify(form.value));

        let response = await fetch(
          `https://gorest.co.in/public/v1/users/${store.state.user}/posts`,
          {
            method: "POST",
            body: JSON.stringify(form.value),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization:
                "Bearer 51372d4d5960f5ce835f368c5ca46738666dedd400ac5e662ba6920ee625758b",
            },
          }
        );

        let result = await response.json().then(store.dispatch('getFeedback'));
        console.log(result.data);
      };
    });

    return { form, test };
  },
};
</script>

<style>
.myform {
  width: 600px;
  margin: 20px auto;
}
</style>