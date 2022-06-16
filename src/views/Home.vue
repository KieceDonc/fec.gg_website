<template>
  <div id="searchMainContainer">
    <div id="searchSecondContainer">
      <p id="searchPara">Trouver un coach <br /><b>pour vous</b> améliorer</p>

      <SearchBar />
      <div id="popularContainer">
        <p>Populaires :</p>
        <a>CS:GO</a>
        <a>Rocket League</a>
        <a>Valorant</a>
      </div>
    </div>
    <div id="searchImgContainer">
      <img
        class="searchImg"
        src="../assets/lol/background.jpg"
        alt="search background"
        style="display: flex"
      />
    </div>
  </div>

  <div id="tmp"></div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';

export default {
  name: 'Home',
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
#searchMainContainer {
  height: 500px;
  background-color: var(--main-background-color);
  padding-bottom: 36px;
  padding-top: 100px;
}

#searchSecondContainer {
  position: absolute;
  top: 150px;
  left: 100px;
  z-index: 100;
}

#searchPara {
  color: white;
  font-size: 4em;
  margin-top: 0;
  margin-bottom: 40px;
}

#popularContainer {
  display: flex;
  color: white;
  font-size: 0.9em;
  margin-top: 15px;
}

#popularContainer > p {
  margin-right: 5px;
  text-decoration: underline;
  text-underline-offset: 3px;
}

#popularContainer > a {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 16px;
  border: 1px solid white;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 4px;
  padding-bottom: 4px;
}

#searchImgContainer {
  height: 500px;
  background-color: #383838;
  display: flex;
  justify-content: center;
  z-index: 0;
}

.searchImg {
  filter: grayscale(0.6);
  opacity: 0.15;
  width: 100%;
  object-fit: cover;
  z-index: 50;
}

#tmp {
  height: 1000px;
}
</style>
