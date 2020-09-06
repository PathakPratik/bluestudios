<template>
  <div class="main-container">
    <VueSlickCarousel v-if="dates" v-bind="settings" ref="carousel" :class="{'desktop-carousal': !detectMobile}">
      <nav v-for="(data,date) in dates" :key="date" class="pagination is-medium" :class="{'is-rounded': !detectMobile}">
        <div>
          <ul class="pagination-list">
            <li>
              <a 
              class="pagination-link" 
              :class="{'is-current':date === selectedDate, 'link-mobile-style': detectMobile, 'link-desktop-style': !detectMobile }"
              @click="handleClick"
              :data-index="data.index" 
              :data-date="date" 
              >
                {{ detectMobile ? data.day.substring(0,1) : data.day.substring(0,3) }}
                <br v-if="detectMobile">
                {{data.date}}
              </a>
            </li> 
          </ul>
        </div>
      </nav>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { detectMobile } from '@/helper.js'

export default {
  name: "DateCarousel",
  components:{
    VueSlickCarousel
  },
  updated(){
    this.moveToSlide();
  },
  methods: {
    showNext(index) {
        this.$refs.carousel.goTo(index);
    },
    moveToSlide(){
      const currentIndex = this.dates[this.selectedDate].index;
      this.showNext(currentIndex);
    },
    handleClick(e){
      const selectedIndex = e.target.getAttribute('data-index');
      const selectedDate = e.target.getAttribute('data-date');
      const card = document.querySelector('p[data-date*="'+selectedDate+'"]');
      
      card.scrollIntoView({behavior: "smooth"});
      this.$store.dispatch("setSelectedDate", selectedDate);
      this.showNext(selectedIndex);
    }
  },
  data() {
    return {
      settings:{
        slidesToShow: 5,
        slidesToScroll: 5,
        focusOnSelect: false,
        infinite: false
      }
    }
  },
  computed:{
    dates(){
      return this.$store.state.dates;
    },
    selectedDate(){
      return this.$store.state.selectedDate;
    },
    detectMobile(){
      return detectMobile();
    }
  }
};
</script>

<style scoped>
.link-mobile-style{
  padding: 30px 20px;
  margin: 15px 5px;
  border: none;
  border-radius: 10px;
}
.link-desktop-style{
  padding: 20px 30px;
  margin: 15px 5px;
  border: none;
  border-radius: 10px;
}
.link-style:active{
  box-shadow: none;
}
.main-container{
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 10;
  background: white;
  box-shadow: 0px 0px 13px rgba(0,0,0,0.1);
}
.pagination{
  outline: none;
}
.desktop-carousal{
  margin: 0% 20%;
}
</style>
