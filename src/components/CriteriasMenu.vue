<template>
  <div id="criteriasContainer">
    <div id="budget">
      <h3>Budget</h3>
      <div id="budgetSecondContainer">
        <div>
          <p class="budgetDescription">MIN.</p>
          <input type="number" id="budgetMin" placeholder="Montant" />
        </div>
        <div>
          <p class="budgetDescription">MAX.</p>
          <input type="number" id="budgetMax" placeholder="Montant" />
        </div>
      </div>
    </div>
    <div id="comments">
      <h3>Avis</h3>
      <p>Montrer les avis supérieurs à :</p>
      <div id="starRatingContainer">
        <StarRating />
      </div>
    </div>
    <div id="languages">
      <h3>Langues</h3>
      <div>FR</div>
      <div>EN</div>
      <div>ES</div>
      <div>DN</div>
    </div>
    <div id="ranks">
      <h3>Rang</h3>
      <div v-for="(rank, index) in ranks">
        <div
          class="criteria"
          v-bind:class="{
            hiddenCriterias: !(index < baseShowedRanks),
          }"
        >
          <img :src="ranksImgs[index]" alt="rank img" class="imgs" />
          <span>
            {{ rank }}
          </span>
        </div>
      </div>
      <div
        id="rankMoreCriterias"
        class="moreCriterias"
        v-on:click="
          moreCriteriasHandler('ranks', 'hiddenCriterias', 'rankMoreCriterias')
        "
      >
        + ({{ ranks.length - baseShowedRanks }}) critères
      </div>
    </div>
    <div id="regions">
      <h3>Régions</h3>
      <div v-for="(region, index) in regions">
        <div
          class="criteria"
          v-bind:class="{
            hiddenCriterias: !(index < baseShowedRegions),
          }"
        >
          <img :src="regionsImgs[index]" alt="regions img" class="imgs" />
          <span>
            {{ region }}
          </span>
        </div>
      </div>
      <div
        id="regionMoreCriterias"
        class="moreCriterias"
        v-on:click="
          moreCriteriasHandler(
            'regions',
            'hiddenCriterias',
            'regionMoreCriterias'
          )
        "
      >
        + ({{ regions.length - baseShowedRegions }}) critères
      </div>
    </div>
    <div id="platform">
      <h3>Platforme</h3>
    </div>
  </div>
</template>

<script>
import StarRating from './StarRating.vue';

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
  methods: {
    moreCriteriasHandler(containerID, hiddenClassName, moreCriteriasID) {
      let hiddenElements = document
        .getElementById(containerID)
        .querySelectorAll('.' + hiddenClassName);
      // We check if there is more hidden elements than the base showed elements
      let toShowLength = hiddenElements.length >= 3 ? 3 : hiddenElements.length;
      // We show 3 hidden elements
      for (let index = 0; index < toShowLength; index++) {
        hiddenElements[index].classList.remove(hiddenClassName);
      }
      // We update the more criterias button
      let moreCriteriasElement = document.getElementById(moreCriteriasID);
      if (toShowLength == hiddenElements.length) {
        moreCriteriasElement.innerHTML = 'Plus aucun critères';
      } else {
        let hiddenLength = document
          .getElementById(containerID)
          .querySelectorAll('.' + hiddenClassName).length;
        moreCriteriasElement.innerHTML = '+ (' + hiddenLength + ') critères';
      }
    },
  },
  data() {
    return {
      baseShowedRanks: 4,
      baseShowedRegions: 4,
    };
  },
  components: { StarRating },
};
</script>

<style scoped>
h3 {
  margin: 0;
  padding-bottom: 10px;
}

#criteriasContainer {
  background-color: var(--third-background-color);
  width: fit-content;
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

.budgetDescription {
  font-size: 0.8em;
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

#comments > *:not(h3) {
  color: var(--second-text-color);
}

#comments > p {
  margin-bottom: 0;
  margin-top: 8px;
  font-size: 0.95em;
}

#starRatingContainer {
  font-size: 30px;
}

.criteria {
  cursor: pointer;
}

.hiddenCriterias {
  display: none;
}

.moreCriterias {
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--highlight-text-color);
  font-size: 1em;
  cursor: pointer;
}

.imgs {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-top: 2px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
