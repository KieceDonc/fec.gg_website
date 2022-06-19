<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from './views/Shared/Header.vue';
import Footer from './views/Shared/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
}

* {
  --main-background-color: #181e29;
  --second-background-color: #eeeeee;
  --third-background-color: #f5f5f5;

  --main-button-color: #325aa5;

  --main-border-color: var(--main-button-color);
  --second-border-color: #cccccc;
  --third-border-color: #999999;
  --low-border-color: #eaeaea;

  --main-text-color: #000000;
  --second-text-color: #555555;
  --third-text-color: #3f3f3f;
  --highlight-text-color: var(--main-button-color);

  --orange-color: #ff7300;

  --header-height: 181px;
}
</style>

<!-- https://tabler-icons.io/i/mail -->
<!--  -->
