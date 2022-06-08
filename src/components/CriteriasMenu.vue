<template>
  <div id="tmpmargin"></div>
  <div class="sharedPropertiesForContainers">
    {{ frontName }}
  </div>
  <div class="sharedPropertiesForContainers">
    <div v-for="(criteriaName, index) in criteriasName">{{ criteriaName }}</div>
  </div>
</template>

<script>
export default {
  name: 'CriteriasMenu',
  props: {
    frontName: {
      type: String,
      required: true,
    },
    criteriasName: {
      type: Array[String],
      required: true,
    },
    criterias: {
      type: Array[Array],
      required: true,
    },
  },
};
</script>

<style scoped>
#tmpmargin {
  margin-top: 100px;
}

.sharedPropertiesForContainers {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--second-background-color);
  border: 1px solid var(--second-border-color);
  width: fit-content;
  color: black;
}
</style>
