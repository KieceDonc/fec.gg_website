<template>
  <div id="criteriasContainer">
    <div id="budget">
      <h3>Budget</h3>
      <div id="budgetSecondContainer">
        <div>
          <p>MIN.</p>
          <input type="number" id="budgetMin" placeholder="Montant" />
        </div>
        <div>
          <p>MAX.</p>
          <input type="number" id="budgetMax" placeholder="Montant" />
        </div>
      </div>
    </div>
    <div id="comments">
      <h3>Avis</h3>
      <div>5</div>
      <div>4</div>
      <div>3</div>
      <diV>Tout</diV>
    </div>
    <div id="languages">
      <h3>Langues</h3>
      <div>FR</div>
      <div>EN</div>
      <div>ES</div>
      <div>DN</div>
    </div>
    <div id="ranks">
      <h3>Rank</h3>
      <div v-for="(rank, index) in ranks">
        <div>
          <img
            :src="ranksImgs[index]"
            alt="rank img"
            style="width: 50px; height: 50px"
          />
          {{ rank }}
        </div>
      </div>
    </div>
    <div id="regions">
      <h3>Régions</h3>
      <div v-for="(region, index) in regions">
        <div>
          <img
            :src="regionsImgs[index]"
            alt="regions img"
            style="width: 50px; height: 50px"
          />
          {{ region }}
        </div>
      </div>
    </div>
    <div id="platform">
      <h3>Platforme</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CriteriasMenu',
  props: {
    ranks: {
      type: Array[String],
      required: true,
    },
    ranksImgs: {
      type: Array[String],
      required: true,
    },
    regions: {
      type: Array[String],
      required: true,
    },
    regionsImgs: {
      type: Array[String],
      required: true,
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 0;
  padding-bottom: 10px;
}

#criteriasContainer {
  background-color: var(--third-background-color);
  width: 400px;
  padding: 20px;
  margin: 40px;
}

#criteriasContainer > div {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 2px solid var(--second-border-color);
}

#budget {
  border-top: 2px solid var(--second-border-color);
}

#budgetSecondContainer {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  color: var(--second-text-color);
}

#budget input {
  margin-top: 10px;
  width: 120px;
  height: 30px;
  border-radius: 4px;
  border: 2px solid var(--second-border-color);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
}

#budget input:focus {
  appearance: none;
  outline: 2px solid var(--second-border-color);
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
}

#budget p {
  margin: 0;
}
</style>
