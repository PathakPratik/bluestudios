<template>
  <div>
    <nav
      style="background-color: #f6f5f6;padding: 10px 5px;"
      class="navbar"
      role="navigation"
      aria-label="main navigation"
      v-if="detectMobile"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img
            src="https://dtsvkkjw40x57.cloudfront.net/198xnull/6550/uploads/b1cae72d-77bc-4299-ba87-77a25d4803e9.png"
            width="232"
            height="58"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          style="zoom: 2;color: #00aeef;"
          aria-expanded="false"
        >
          <span style="height: 2px;" aria-hidden="true"></span>
          <span style="height: 2px;" aria-hidden="true"></span>
          <span style="height: 2px;" aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <nav
      v-if="!detectMobile"
      class="navbar is-transparent"
      style="background-color: #f6f5f6;padding: 10px 9%;"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://dtsvkkjw40x57.cloudfront.net/198xnull/6550/uploads/b1cae72d-77bc-4299-ba87-77a25d4803e9.png"
            width="232"
            height="58"
          />
        </a>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a>
                  HOME
                </a>
              </p>
              <p class="control">
                <a>
                  COACHING
                </a>
              </p>
              <p class="control">
                <a>
                  LIVE
                </a>
              </p>
              <p class="control">
                <a>SIGN IN</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { detectMobile } from "@/helper.js";

export default {
  name: "Header",
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
