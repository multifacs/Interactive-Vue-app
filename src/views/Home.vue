<template>
  <div class="home">
    <div class="home-content">
      <div class="row d-flex justify-content-center w-100">
        <div class="col-3 lorem">
          {{ lorem }}
        </div>
        <div id="main" class="col-4">
          <img alt="Vue logo" src="../assets/logo.png" />
          <HelloWorld msg="Welcome to this demo" />
          <transition name="error">
            <Error v-if="showError" />
          </transition>
          <Todos
            @errorOccured="triggerError"
            @activateControl="triggerControl"
          />
        </div>
        <div class="col-3 lorem">
          {{ lorem }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, inject, onMounted } from "vue";

import HelloWorld from "@/components/home/HelloWorld.vue";
import Error from "@/components/home/Error.vue";
import Todos from "@/components/home/Todos.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Todos,
    Error,
  },
  setup(_, { emit }) {
    const store = inject("store");
    const showError = ref(false);

    //recording
    store.journal.records.push({
      event: "Home.vue created()",
      time: store.methods.getTime(),
    });

    const triggerError = () => {
      showError.value = true;
      setTimeout(() => (showError.value = false), 1000); // setTimeout function use
    };

    const lorem = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          adipisci eos corrupti eveniet consequatur? Libero laborum optio
          placeat tempora veritatis commodi praesentium ipsa nemo velit
          doloribus? Fugiat dolor et ipsa? Consequatur repudiandae non, veniam
          adipisci, dicta aliquam debitis quae amet est voluptatum corrupti
          asperiores expedita necessitatibus ratione rem, libero beatae. Ullam,
          nobis!`;

    const triggerControl = () => {
      console.log("Activating...");
      emit("triggerControl");
    };

    onMounted(() => {
      let home = document.getElementsByClassName("home");
      console.log(home[0].classList);
      home[0].classList.add(store.state.home);
    });

    return { showError, triggerError, lorem, triggerControl };
  },
};
</script>

<style scoped>
.row {
  margin-left: 0;
}

.home {
  /* background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */
  /*padding: 10px;*/
  min-height: 90vh;
}

.bg1 {
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.bg2 {
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
}

.bg3 {
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
}

.home-content {
  padding: 30px 0;
}

.error-wrapper {
  z-index: 99;
}

.lorem {
  font-size: 30px;
  opacity: 0.3;
  background: -webkit-linear-gradient(
    rgba(37, 37, 37, 1),
    rgba(201, 200, 200, 0.3)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 900px) {
  .lorem {
    display: none;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  #main {
    width: 90%;
  }

  /* .home {
    min-height: 80vh;
  } */
}

.error-enter-active,
.error-leave-active {
  transition: all 0.3s ease;
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(-17.5px);
}
</style>