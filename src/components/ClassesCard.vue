<template>
  <div class="main-container">
    <div class="box">
      <div class="columns">
        <div class="column is-three-quarters">
          <article v-if="detectMobile" class="media">
            <div class="media-left" style="margin-left: 14px;">
              <h3>
                <b
                  style="color: #060606;position: relative; right: 20px;"
                  v-html="getFormattedTime(data.time)"
                ></b>
              </h3>
            </div>
          </article>
          <article
            class="media"
            style="border-top: none; margin-top: 0px;padding-top: 0px;"
          >
            <div class="media-left">
              <div v-if="!detectMobile" class="columns">
                <div
                  class="column"
                  style="margin: 25px 10px;white-space:nowrap;"
                >
                  <h3>
                    <b
                      style="color: #060606;"
                      v-html="getFormattedTime(data.time)"
                    ></b>
                  </h3>
                </div>
                <div class="column" style="margin: 8px 0px;">
                  <figure class="image is-64x64">
                    <img
                      style="border-radius: 50%;"
                      src="https://dtsvkkjw40x57.cloudfront.net/images/author/15435/small_J9oH8nBQtmLv86OSJQ0w_Screen_20Shot_202020-05-23_20at_205.11.10_20PM.png"
                      alt="Image"
                    />
                  </figure>
                </div>
              </div>
              <figure v-if="detectMobile" class="image is-64x64">
                <img
                  style="border-radius: 50%;margin-top: 15px;"
                  src="https://dtsvkkjw40x57.cloudfront.net/images/author/15435/small_J9oH8nBQtmLv86OSJQ0w_Screen_20Shot_202020-05-23_20at_205.11.10_20PM.png"
                  alt="Image"
                />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p></p>
                <h5 class="class-title">
                  {{ data.title }}
                </h5>
                <p class="info">
                  Kelley &amp; Jess, STEM Sisters! | K-5th Grade
                </p>
              </div>
            </div>
          </article>
          <div v-if="detectMobile">
            <button class="button is-danger is-rounded join-btn">
              JOIN CLASS
            </button>
            <button class="button is-rounded count-me-btn">COUNT ME IN</button>
          </div>
        </div>
        <div class="column" v-if="!detectMobile">
          <button class="button is-danger is-rounded join-btn">
            JOIN CLASS
          </button>
          <button class="button is-rounded count-me-btn">COUNT ME IN</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { detectMobile } from "@/helper.js";

export default {
  name: "ClassesCard",
  props: {
    data: Object
  },
  data() {
    return {
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        focusOnSelect: false,
        infinite: false,
        arrows: true,
        dots: true
      },
      items: [{ message: "Foo" }, { message: "Bar" }]
    };
  },
  methods: {
    getFormattedTime(timeString) {
      timeString = String(timeString);
      let H = +timeString.substring(0, 2);
      let h = H % 12 || 12;
      let ampm = H < 12 ? "AM" : "PM";
      let singleDigit = h < 10 ? "&nbsp;&nbsp;" : "";
      return singleDigit + h + ":" + timeString.substring(2, 4) + " " + ampm;
    }
  },
  computed: {
    dates() {
      return this.$store.state.dates;
    },
    detectMobile() {
      return detectMobile();
    }
  }
};
</script>

<style scoped>
.main-container {
  margin: 8px 20px;
}
.info {
  text-transform: uppercase;
  font-size: 14px;
  text-align: left;
}
.class-title {
  margin-bottom: 5px;
  text-align: left;
  font-size: 15px;
  color: #060606;
}
.count-me-btn {
  font-size: 15px;
  height: 32px;
  padding-top: 4px;
  margin: 15px 1px 15px 8px;
  background-color: #ffcb05;
  border-color: #ffcb05;
  color: white;
  width: 125px;
}
.join-btn {
  height: 32px;
  padding-top: 4px;
  font-size: 15px;
  margin: 14px 8px 14px 1px;
  width: 125px;
}
</style>
