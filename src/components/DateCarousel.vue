<template>
  <div class="main-container" id="main-container">
    <div class="columns">
      <div class="column is-one-fifth" v-if="!detectMobile">
        <div class="columns is-four-fifths">
          <div class="column" />
          <div class="column">
            <div class="prev-arrow" @click="prevClick" />
          </div>
        </div>
      </div>
      <div class="column is-three-fifths">
        <VueSlickCarousel
          v-if="dates"
          v-bind="settings"
          ref="carousel"
          :class="{ 'desktop-carousal': !detectMobile }"
        >
          <nav
            v-for="(data, date) in dates"
            :key="date"
            class="pagination is-medium"
            :class="{ 'is-rounded': !detectMobile }"
          >
            <div>
              <ul class="pagination-list">
                <li>
                  <a
                    class="pagination-link"
                    :class="{
                      'is-current': date === selectedDate,
                      'link-mobile-style': detectMobile,
                      'link-desktop-style': !detectMobile
                    }"
                    @click="handleClick"
                    :data-index="data.index"
                    :data-date="date"
                  >
                    {{
                      detectMobile
                        ? data.day.substring(0, 1)
                        : data.day.substring(0, 3)
                    }}
                    <br v-if="detectMobile" />
                    {{ data.date }}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </VueSlickCarousel>
      </div>
      <div class="column is-one-fifth" v-if="!detectMobile">
        <div class="columns is-one-fifth">
          <div class="column">
            <div class="next-arrow" @click="nextClick" />
          </div>
          <div class="column" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { detectMobile } from "@/helper.js";

export default {
  name: "DateCarousel",
  components: {
    VueSlickCarousel
  },
  updated() {
    this.moveToSlide();
  },
  beforeMount() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    showNext(index) {
      this.$refs.carousel.goTo(index);
    },
    moveToSlide() {
      const currentIndex = this.dates[this.selectedDate].index;
      this.showNext(currentIndex);
    },
    prevClick() {
      this.$refs.carousel.prev();
    },
    nextClick() {
      this.$refs.carousel.next();
    },
    onScroll() {
      const top =
        window.scrollY ||
        window.scrollTop ||
        document.getElementsByTagName("html")[0].scrollTop;

      if (top > 40) {
        document.getElementById("main-container").style.position = "fixed";
        document.getElementById("main-container").style.boxShadow =
          "0px 0px 13px rgba(0, 0, 0, 0.1)";
      } else {
        document.getElementById("main-container").style.position = "static";
        document.getElementById("main-container").style.boxShadow = "initial";
      }
    },
    handleClick(e) {
      const selectedIndex = e.target.getAttribute("data-index");
      const selectedDate = e.target.getAttribute("data-date");
      const card = document.querySelector(
        'p[data-date*="' + selectedDate + '"]'
      );

      card.scrollIntoView({ behavior: "smooth" });
      this.$store.dispatch("setSelectedDate", selectedDate);
      this.showNext(selectedIndex);
    }
  },
  data() {
    return {
      settings: {
        slidesToShow: this.detectMobile ? 5 : 5,
        slidesToScroll: this.detectMobile ? 5 : 5,
        focusOnSelect: false,
        infinite: false
      }
    };
  },
  computed: {
    dates() {
      return this.$store.state.dates;
    },
    selectedDate() {
      return this.$store.state.selectedDate;
    },
    detectMobile() {
      return detectMobile();
    }
  }
};
</script>

<style scoped>
.link-mobile-style {
  padding: 30px 20px;
  margin: 15px 5px;
  border: none;
  border-radius: 10px;
}
.link-desktop-style {
  padding: 20px 30px;
  margin: 15px 5px;
  border: none;
  border-radius: 10px;
  height: 35px;
  width: 120px;
  font-size: 15px;
  text-transform: uppercase;
}
.link-style:active {
  box-shadow: none;
}
.main-container {
  position: static;
  width: 100%;
  top: 0px;
  z-index: 10;
  background: white;
}
.pagination {
  outline: none;
}
.desktop-carousal {
  margin: 0% 2%;
}
.prev-arrow {
  background: url(https://s3.amazonaws.com/unode1/assets/6550/eCKYjJ6TuypxTcTcKoDQ_slider-arrow-left.svg)
    center no-repeat;
  height: 20px;
  width: 25px;
  background-size: cover;
  font-size: 0;
  float: left;
  margin-top: 24px;
  cursor: pointer;
}
.next-arrow {
  background: url(https://s3.amazonaws.com/unode1/assets/6550/qfrXZZMQfOjuMEBQXiCA_slider-arrow-right.svg)
    center no-repeat;
  height: 20px;
  width: 25px;
  background-size: cover;
  font-size: 0;
  float: right;
  margin-top: 24px;
  cursor: pointer;
}
</style>
