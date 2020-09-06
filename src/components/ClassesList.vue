<template>
  <div :class="{ 'main-container': !detectMobile }">
    <div v-for="(data, date) in list" :key="date" class="card-top">
      <p
        ref="dateBlock"
        :class="{
          'date-mobile-heading': detectMobile,
          'date-heading': !detectMobile
        }"
        class=""
        :data-date="date"
      >
        {{ formatDate(date) }}
      </p>
      <div v-for="(classes, index) in data" :key="index">
        <ClassesCard :data="classes" />
      </div>
    </div>
  </div>
</template>

<script>
import ClassesCard from "@/components/ClassesCard.vue";
import { detectMobile } from "@/helper.js";

export default {
  name: "ClassesList",
  components: {
    ClassesCard
  },
  beforeMount() {
    window.addEventListener("scroll", this.selectDate);
  },
  afterMount() {
    this.selectDate();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.selectDate);
  },
  methods: {
    selectDate() {
      const dateBlocks = this.$refs.dateBlock;
      let current = 0;

      for (const n in dateBlocks) {
        const top =
          window.scrollY ||
          window.scrollTop ||
          document.getElementsByTagName("html")[0].scrollTop;
        const sectionOffsetTop = dateBlocks[n].offsetTop - 220;
        if (top > sectionOffsetTop) {
          current = n;
        }
      }

      this.$store.dispatch(
        "setSelectedDate",
        dateBlocks[current].getAttribute("data-date")
      );
    },
    formatDate(date) {
      const stdDate =
        date.substring(0, 4) +
        "-" +
        date.substring(4, 6) +
        "-" +
        date.substring(6, 8);
      const d = new Date(stdDate);
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      return days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate();
    }
  },
  computed: {
    list() {
      return this.$store.state.result;
    },
    detectMobile() {
      return detectMobile();
    }
  }
};
</script>

<style scoped>
.date-mobile-heading {
  margin-left: 30px;
  margin-bottom: 8px;
  text-align: left;
  scroll-margin-top: 120px;
  text-transform: uppercase;
  color: #060606;
}
.date-heading {
  margin: 0% 8%;
  margin-bottom: 8px;
  text-align: left;
  scroll-margin-top: 120px;
  text-transform: uppercase;
  color: #060606;
}
.card-top {
  margin-top: 40px;
}
.main-container {
  margin: 0% 8%;
}
</style>
