<template>
  <div class="home">
    <Header />
    <div v-if="dates">
      <DateCarousel />
      <p class="heading">BOOK YOUR NEXT STEM ADVENTURE</p>
      <ClassesList />
      <Footer />
    </div>
    <div class="loader-style" v-if="!dates">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;"
        width="40px"
        height="40px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#00aeef"
          stroke-width="10"
          r="35"
          stroke-dasharray="164.93361431346415 56.97787143782138"
          transform="rotate(28.877 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DateCarousel from "@/components/DateCarousel.vue";
import ClassesList from "@/components/ClassesList.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  created() {
    this.$store.dispatch("fetchResult");
  },
  components: {
    DateCarousel,
    ClassesList,
    Footer,
    Header
  },
  computed: {
    dates() {
      return this.$store.state.dates;
    }
  }
};
</script>

<style scoped>
.link-style {
  padding: 30px 20px;
  margin: 15px 5px;
  border: none;
  border-radius: 10px;
}
.loader-style {
  position: fixed;
  top: 43%;
  left: 43%;
}
.heading {
  font-weight: 600;
  margin: 70px 5px 40px 5px;
  color: #00aeef;
  font-size: 22px;
}
</style>
