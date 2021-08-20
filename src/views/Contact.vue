<template>
  <div class="contact">
    <div class="contact-content">
      <div>
        <h1>Contact</h1>
        <transition-group
          appear
          tag="ul"
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <li
            v-for="(icon, index) in icons"
            :key="icon.name"
            :data-index="index"
          >
            <span class="material-icons">{{ icon.name }}</span>
            <div>{{ icon.text }}</div>
          </li>
        </transition-group>
      </div>
      <Form @change="update"/>
      <Feedback></Feedback>
    </div>
  </div>
</template>

<script>
import { ref, inject, onMounted } from "vue";
import gsap from "gsap";

export default {
  name: "Contact",
  components: {
    'Form': require('@/components/contact/Form.vue').default,
    'Feedback': require('@/components/contact/Feedback.vue').default
  },
  setup() {
    const store = inject("store");
    const elem = ref(null);

    const icons = ref([
      { name: "alternate_email", text: "by email" },
      { name: "local_phone", text: "by phone" },
      { name: "local_post_office", text: "by post" },
      { name: "local_fire_department", text: "by smoke signal" },
    ]);

    //recording
    store.commit("addRecord", {
      event: "Contact.vue created()",
      time: store.getters.getTime,
    });

    onMounted(() => {
      let contact = document.getElementsByClassName("contact");
      console.log(contact[0].classList);
      contact[0].classList.add(store.state.contact);
      console.log("CHECKING REF " + elem.value);
    });

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });
    };

    const update = () => {
      console.log("updated");
      //setTimeout(() => {store.dispatch('getFeedback')}, 2000);
    }

    return { icons, beforeEnter, enter, update, elem };
  },
};
</script>

<style scoped>
.contact {
  /* background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%); */
  min-height: 90vh;
}

.contact-content {
  padding: 30px;
}

.bg1 {
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
}

.bg2 {
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
}

.bg3 {
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}

.contact ul {
  padding: 0;
  /* Here's the proper way to do columns */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-width: 400px;
  margin: 60px auto;
}
.contact li {
  list-style-type: none;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  line-height: 1.5em;
}
</style>