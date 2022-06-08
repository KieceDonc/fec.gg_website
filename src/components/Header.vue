<template>
  <div
    id="headerContainer"
    v-bind:class="{
      headerBeforeScroll: isInBeforeScrollStateLvl1,
      headerNormal: !isInBeforeScrollStateLvl1,
    }"
  >
    <div id="headerUpContainer">
      <div id="headerUpLeftContainer">
        <router-link id="brand" to="/">
          <div class="brandName">Fec</div>
          <div
            id="brandPoint"
            v-bind:class="{
              brandPointBeforeScroll: isInBeforeScrollStateLvl1,
              brandPointNormal: !isInBeforeScrollStateLvl1,
            }"
          >
            .
          </div>
          <div class="brandName">gg</div>
        </router-link>
        <SearchBar
          id="headerSearchBar"
          v-bind:class="{
            headerSearchBarVisible: !isInBeforeScrollStateLvl2,
            headerSearchBarHidden: isInBeforeScrollStateLvl2,
          }"
        />
      </div>
      <div id="menu">
        <a class="menuButton">Français</a>
        <a class="menuButton">Donner des cours</a>
        <a class="menuButton">Se connecter</a>
        <a
          v-bind:class="{
            registerBeforeScroll: isInBeforeScrollStateLvl1,
            registerNormal: !isInBeforeScrollStateLvl1,
          }"
          class="menuButton"
          id="register"
          >S'inscrire</a
        >
      </div>
    </div>

    <div
      v-bind:class="{
        categoryContainerBeforeScroll: isInBeforeScrollStateLvl2,
        categoryContainerNormal: !isInBeforeScrollStateLvl2,
      }"
      id="categoryContainer"
    >
      <router-link class="category" to="/LoL">LoL</router-link>
      <router-link class="category" to="/LoL">Valorant</router-link>
      <router-link class="category" to="/LoL">TFT</router-link>
      <router-link class="category" to="/LoL">Wild Rift</router-link>
      <router-link class="category" to="/LoL">RL</router-link>
      <router-link class="category" to="/LoL">CS:GO</router-link>
      <router-link class="category" to="/LoL">OW</router-link>
      <router-link class="category" to="/LoL">SSBU</router-link>
      <router-link class="category" to="/LoL">Others</router-link>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
export default {
  name: 'Header',
  components: { SearchBar },
  data: function () {
    return {
      scrollPosition: 0,
      isInBeforeScrollStateLvl1: this.isInHomePage,
      isInBeforeScrollStateLvl2: this.isInHomePage,
      isInHomePage: true,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.isInBeforeScrollStateLvl1 =
        this.isInHomePage && this.scrollPosition == 0;
      this.isInBeforeScrollStateLvl2 =
        this.isInHomePage && this.scrollPosition < 225;
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

      if (to.fullPath === '/') {
        this.isInHomePage = true;
        this.addScrollListener();
        this.updateScroll();
      } else {
        this.isInHomePage = false;
        if (from.fullPath === '/') {
          this.removeScrollListener();
        }
      }
    },
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

.headerBeforeScroll {
  color: white;
  transition: background-color 400ms linear;
}

.headerNormal {
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

.brandPointBeforeScroll {
  color: white;
}

.brandPointNormal {
  color: var(--main-border-color);
}

#headerSearchBar {
  transform: scale(0.8);
  transition: opacity 400ms linear;
}

.headerSearchBarVisible {
  visibility: visible;
  opacity: 1;
}

.headerSearchBarHidden {
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
}

#register {
  border-radius: 4px;
  margin-right: 100px;
}

.registerBeforeScroll {
  border: 2px solid white;
}

.registerNormal {
  border: 2px solid var(--main-button-color);
}

#categoryContainer {
  display: flex;
  justify-content: space-evenly;
  transition: all 0.4s ease-in-out;
  color: var(--second-text-color);
}

.categoryContainerBeforeScroll {
  opacity: 0;
  height: 0;
  overflow: hidden;
  margin-top: 0px;
  border: 0;
}

.categoryContainerNormal {
  opacity: 1;
  height: auto;
  margin-top: 20px;
  border-top: 1px solid var(--second-border-color);
  border-bottom: 1px solid var(--second-border-color);
}

.category {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: auto;
  padding-right: auto;
  display: table-cell;
  width: 100%;
  text-align: center;
  color: inherit;
  text-decoration: none;
}

.category:hover {
  text-decoration: underline;
}
</style>
