<template>
  <div class="main-container">
    <div class="box">
        <article v-if="detectMobile" class="media">
            <div class="media-left" style="margin-left: 14px;">
                <h3><b style="color: #060606;">{{getFormattedTime(data.time)}}</b></h3>
            </div>
        </article>
        <article class="media" style="border-top: none; margin-top: 0px;">
            <div class="media-left">
                <div v-if="!detectMobile" class="columns">
                    <div class="column" style="margin: 25px 10px;white-space:nowrap;">
                        <h3><b style="color: #060606;">{{getFormattedTime(data.time)}}</b></h3>
                    </div>
                    <div class="column" style="margin: 8px 0px;">
                        <figure class="image is-64x64">
                            <img style="border-radius: 50%;" src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                        </figure>
                    </div>
                </div>
                <figure v-if="detectMobile" class="image is-64x64">
                    <img style="border-radius: 50%;margin-top: 15px;" src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                </figure>
            </div>
            <div class="media-content">
            <div class="content">
                <p>
                <h5 class="class-title">
                    {{data.title}}
                </h5>
                <p class="info">Kelley &amp; Jess, STEM Sisters! | K-5th Grade</p>
            </div>
            </div>
        </article>
        </div>
  </div>
</template>

<script>
import { detectMobile } from '@/helper.js'

export default {
  name: "ClassesCard",
  props: {
    data: Object
  },
  data() {
    return {
      settings:{
        slidesToShow: 5,
        slidesToScroll: 5,
        focusOnSelect: false,
        infinite: false,
        arrows: true,
        dots: true
      },
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  methods: {
    getFormattedTime(timeString){
        timeString = String(timeString)
        let H = +timeString.substring(0, 2);
        let h = H % 12 || 12;
        let ampm = H < 12 ? "AM" : "PM";
        return h + ":" + timeString.substring(2, 4) + " " + ampm;
    }
  },
  computed:{
    dates(){
      return this.$store.state.dates;
    },
    detectMobile(){
      return detectMobile();
    }
  }
};
</script>

<style scoped>
.main-container{
  margin: 8px 20px;
}
.info{
    text-transform: uppercase;
    font-size: 14px;
    text-align: left;
}
.class-title{
    margin-bottom: 5px;
    text-align: left;
    font-size: 15px;
    color: #060606;
}
</style>
