<template>
  <div class="home">
    <DateCarousel />
    <p v-if="dates" class="heading">BOOK YOUR NEXT STEM ADVENTURE</p>
    <ClassesList />
  </div>
</template>

<script>
// @ is an alias to /src
import DateCarousel from "@/components/DateCarousel.vue";
import ClassesList from "@/components/ClassesList.vue";

export default {
  name: "Home",
  created() {
    this.$store.dispatch("fetchResult");
  },
  components: {
    DateCarousel,
    ClassesList
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
.heading {
  font-weight: 600;
  margin: 130px 5px 40px 5px;
  color: #00aeef;
  font-size: 22px;
}
</style>
