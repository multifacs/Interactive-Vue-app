<template>
  <transition-group tag="header" name="nav">
    <router-link to="/" key="lorem1">Home</router-link
    ><span key="lorem2">|</span>
    <router-link to="/about" key="lorem3">About</router-link
    ><span key="lorem4">|</span>
    <router-link to="/contact" key="lorem5">Contact</router-link>
    <span v-if="showControl" key="lorem6">|</span>
    <router-link to="/control" v-if="showControl" key="lorem7"
      >Control Panel</router-link
    >
  </transition-group>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" @triggerControl="trigger" @wrap-up="wrapUp" />
      </transition>
    </router-view>

  <footer>
    <h4>
      All rights reserved ©
    </h4>
  </footer>
</template>

<script>
import { ref, provide } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    provide("store", store);
    const showControl = ref(false);

    const trigger = () => {
      // ALWAYS REFER TO A VAR VIA .value IN COMPOSITION API
      showControl.value = true;
      console.log("changing");

      let d = document.getElementById("app");
      d.className += " ctrl";

      let body = document.body;
      body.classList.add("ctrl");

      // let nav = document.getElementById("nav");
      // let a = nav.getElementsByTagName("*");
      // a.forEach(element => element.className = "b");
    };

    const wrapUp = () => {
      showControl.value = false;
      console.log("changing");

      let d = document.getElementById("app");
      d.className -= " ctrl";

      let body = document.body;
      body.classList.remove("ctrl");
    };

    return { trigger, wrapUp, showControl };
  },
};
</script>

<style>
* {
  margin: 0;
  font-family: Candara;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100vh;
  display: flex;
  flex-direction: column;
}

.ctrl {
  transition: all 0.8s ease;
  background-color: rgb(39, 39, 39);
  color: red;
}

header {
  /*padding: 30px;*/
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  margin-inline: auto;
  flex-shrink: 0;
  padding: 10px;
}

header a {
  font-weight: bold;
  color: #2c3e50;
}

.b {
  color: white;
}

header a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

footer {
  display: inline;
  vertical-align: 0%;
  align-items: center;
  flex-shrink: 0;
}

@media screen and (max-width: 1200px) {
  #nav {
    width: 50%;
  }
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
/* .nav-enter-to, .nav-leave-from {
  opacity: 1;
  transform: translateY(0px);
} */
.nav-enter-active {
  transition: all 0.4s ease;
}
.nav-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}
.nav-move {
  transition: all 0.3s ease;
}
</style>
