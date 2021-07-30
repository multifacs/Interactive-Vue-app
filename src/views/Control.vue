<template>
  <div class="control">
    <div class="control-content" style="width: 80%; margin: 0 auto">
      <div>
        <h1>Control</h1>
        <div class="row my-3 h">
          <div class="col">
            <Events :store="store" />
          </div>
          <div class="col-3">
            <Todos :store="store" />
          </div>
          <div class="col">
            <Companies :store="store" />
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-4" style="width: 25rem">
            <div class="text-start">Controls for Home.vue:</div>
            <div
              class="col border border-danger border-3 rounded-3 p-3"
              style="height: 4rem; box-shadow: 1px 3px 5px rgba(255, 0, 0, 0.5)"
            >
              <select v-model="homeBG">
                <option>bg1</option>
                <option>bg2</option>
                <option>bg3</option>
              </select>
              Selected: {{ homeBG }}
            </div>
          </div>
          <div class="col-4" style="width: 25rem">
            <div class="text-start">Controls for About.vue:</div>
            <div
              class="col border border-danger border-3 rounded-3 p-3"
              style="box-shadow: 1px 3px 5px rgba(255, 0, 0, 0.5)"
            >
              <input type="radio" value="bg1" v-model="aboutBG" />
              <label>bg1</label>
              <br />
              <input type="radio" value="bg2" v-model="aboutBG" />
              <label>bg2</label>
              <br />
              <input type="radio" value="bg3" v-model="aboutBG" />
              <label>bg3</label>
              <br />
              Selected: {{ aboutBG }}
            </div>
          </div>
          <div class="col-4" style="width: 25rem">
            <div class="text-start">Controls for for Contact.vue:</div>
            <div
              class="col border border-danger border-3 rounded-3 p-3"
              style="height: 4rem; box-shadow: 1px 3px 5px rgba(255, 0, 0, 0.5)"
            >
              <select v-model="contactBG">
                <option>bg1</option>
                <option>bg2</option>
                <option>bg3</option>
              </select>
              Selected: {{ contactBG }}
            </div>
          </div>
        </div>

        <div>
          <router-link
            class="btn btn-danger my-5"
            style="width: 100px"
            @click="emitExit"
            tag="button"
            to="/"
            key="lorem1"
            >Exit</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, inject, onBeforeUnmount, watch } from "vue";
import Events from "@/components/control/Events.vue";
import Todos from "@/components/control/Todos.vue";
import Companies from "@/components/control/Companies.vue";
export default {
  name: "Control",
  components: {
    Events,
    Todos,
    Companies,
  },
  setup(_, { emit }) {
    const store = inject("store");
    const homeBG = ref(store.state.home);
    const aboutBG = ref(store.state.about);
    const contactBG = ref(store.state.contact);

    //!PREVIOUS WRAP-UP EMIT!
    // onBeforeUnmount(() => {
    //   emit("wrap-up");
    // });

    //ADD WATCHERS
    // const changeHomeBg = () => {
    //   console.log(homeBG.value);
    //   console.log(store.state.home);
    //   store.state.home = homeBG.value;
    //   console.log(store.state.home);
    // };
    // const changeAboutBG = () => {
    //   console.log(aboutBG.value);
    //   console.log(store.state.about);
    //   store.state.about = aboutBG.value;
    //   console.log(store.state.about);
    // };
    // const changeContactBG = () => {
    //   store.state.contact = contactBG.value;
    // };

    watch(homeBG, (bg, oldBG) => {
      console.log("in Home", oldBG, "changed to", bg);
      store.state.home = homeBG.value;
    });

    watch(aboutBG, (bg, oldBG) => {
      console.log("in About", oldBG, "changed to", bg);
      store.state.about = aboutBG.value;
    });

    watch(contactBG, (bg, oldBG) => {
      console.log("in Contact", oldBG, "changed to", bg);
      store.state.contact = contactBG.value;
    });

    const emitExit = () => {
      emit("wrap-up");
    };

    return {
      store,
      homeBG,
      aboutBG,
      contactBG,
      emitExit,
    };
  },
};
</script>

<style>
.control {
  background-image: linear-gradient(60deg, #16191b 0%, #101b27 100%);
  min-height: 90vh;
  color: red;
}

.control-content {
  padding: 30px;
}

.h {
  min-height: 40vh;
}

ul {
  list-style: none;
  margin: 0;
  padding: 10px;
}
</style>