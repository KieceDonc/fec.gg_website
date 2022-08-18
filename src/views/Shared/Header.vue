<template>
  <div
    id="headerContainer"
    v-bind:class="{
      headerLvl0: !(scrollLvl1 || scrollLvl2),
      headerLvl1: scrollLvl1 || scrollLvl2,
    }"
  >
    <div id="headerUpContainer">
      <div id="headerUpLeftContainer">
        <router-link id="brand" to="/">
          <div class="brandName">Fec</div>
          <div
            id="brandPoint"
            v-bind:class="{
              brandPointLvl0: !(scrollLvl1 || scrollLvl2),
              scrollLvl1: scrollLvl1 || scrollLvl2,
            }"
          >
            .
          </div>
          <div class="brandName">gg</div>
        </router-link>
        <SearchBar
          id="headerSearchBar"
          v-bind:class="{
            headerSearchLvl0: !scrollLvl2 && isInHomePage,
            headerSearchLvl2: scrollLvl2 || !isInHomePage,
          }"
        />
      </div>
      <div id="menu">
        <a class="menuButton">Français</a>
        <a class="menuButton">Donner des cours</a>
        <router-link class="menuButton" to="/Login">Se connecter</router-link>
        <a
          v-bind:class="{
            registerLvl0: !(scrollLvl1 || scrollLvl2),
            registerLvl1: scrollLvl1 || scrollLvl2,
          }"
          class="menuButton"
          id="register"
        >
          S'inscrire
        </a>
      </div>
    </div>

    <div
      v-bind:class="{
        categoryContainerLvl2: scrollLvl2,
        categoryContainerLvl0: !scrollLvl2,
      }"
      id="categoryContainer"
    >
      <HeaderCategory to="/lol" text="Lol" />
      <HeaderCategory to="/valorant" text="Valorant" />
      <HeaderCategory to="/tft" text="TFT" />
      <HeaderCategory to="/wildRift" text="Wild Rift" />
      <HeaderCategory to="rl" text="RL" />
      <HeaderCategory to="/csgo" text="CS:GO" />
      <HeaderCategory to="/ow" text="OW" />
      <HeaderCategory to="/ssbu" text="SSBU" />
      <HeaderCategory to="/Others" text="Others" />
    </div>
  </div>
</template>

<script>
import SearchBar from '../../components/SearchBar.vue';
import HeaderCategory from '@/components/HeaderCategory.vue';

export default {
  name: 'Header',
  components: { SearchBar, HeaderCategory },
  data: function () {
    return {
      scrollPosition: 0,
      scrollLvl0: this.isInHomePage,
      scrollLvl1: this.isInHomePage,
      scrollLvl2: this.isInHomePage,
      isInHomePage: true,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.scrollLvl1 =
        (this.isInHomePage &&
          this.scrollPosition >= 100 &&
          this.scrollPosition < 200) ||
        (!this.isInHomePage && this.scrollPosition >= 100);
      this.scrollLvl2 =
        (this.isInHomePage && this.scrollPosition >= 200) ||
        (!this.isInHomePage && this.scrollPosition < 100);
    },
    addScrollListener() {
      window.addEventListener('scroll', this.updateScroll);
    },
    removeScrollListener() {
      window.removeEventListener('scroll', this.updateScroll);
    },
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0, 0);
      this.isInHomePage = to.fullPath === '/';
      this.updateScroll();
    },
  },
  mounted() {
    this.addScrollListener();
  },
  destroy() {
    if (this.isInHomePage) {
      this.removeScrollListener();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#headerContainer {
  padding-top: 20px;
  padding-bottom: 20px;
  position: fixed;
  width: 100%;
}

.headerLvl0 {
  color: white;
  transition: background-color 400ms linear;
}

.headerLvl1 {
  background-color: var(--second-background-color);
  z-index: 200;
  color: black;
  transition: background-color 400ms linear;
}

#headerUpContainer {
  display: flex;
  justify-content: space-between;
}

#headerUpLeftContainer {
  display: flex;
  font-weight: bold;
  margin-left: 100px;
  align-items: center;
}

#brand {
  color: inherit;
  display: inherit;
  align-items: inherit;
  text-decoration: none;
}

.brandName {
  font-size: 30px;
}

#brandPoint {
  font-size: 58px;
  display: inline-table;
  line-height: 0;
}

.brandPointLvl0 {
  color: white;
}

.scrollLvl1 {
  color: var(--main-border-color);
}

#headerSearchBar {
  transform: scale(0.8);
  transition: opacity 400ms linear;
}

.headerSearchLvl2 {
  visibility: visible;
  opacity: 1;
}

.headerSearchLvl0 {
  visibility: hidden;
  opacity: 0;
}

#menu {
  margin-top: auto;
  margin-bottom: auto;
}

.menuButton {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 18px;
  text-decoration: none;
  color: unset;
}

.menuButton:visited {
  color: inherit;
}

#register {
  border-radius: 4px;
  margin-right: 100px;
}

.registerLvl0 {
  border: 2px solid white;
}

.registerLvl1 {
  border: 2px solid var(--main-button-color);
}

#categoryContainer {
  display: flex;
  justify-content: space-evenly;
  transition: all 0.4s ease-in-out;
  color: var(--second-text-color);
}

.categoryContainerLvl0 {
  opacity: 0;
  height: 0;
  overflow: hidden;
  margin-top: 0px;
  border: 0;
}

.categoryContainerLvl2 {
  opacity: 1;
  height: auto;
  margin-top: 20px;
  border-top: 1px solid var(--second-border-color);
  border-bottom: 1px solid var(--second-border-color);
}
</style>
