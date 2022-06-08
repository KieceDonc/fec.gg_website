<template>
  <div id="LolContainer">
    <CriteriasMenu
      :frontName="criteriasfrontName"
      :criteriasName="criteriasName"
      :criterias="criterias"
    />
  </div>
</template>

<script>
import CriteriasMenu from '@/components/CriteriasMenu.vue';

export default {
  name: 'Lol',
  components: { CriteriasMenu },
  data: function () {
    return {
      criteriasfrontName: 'Profil du coach',
      criteriasName: ['Avis', 'Langues', 'Rank', 'Région'],
      criterias: [
        ['< 3', '3', '4', '5'],
        ['Fr', 'En', 'Es', 'De', 'It'],
        [
          'Iron',
          'Bronze',
          'Silver',
          'Gold',
          'Platinum',
          'Diamond',
          'Master',
          'Grand Master',
          'Challenger',
        ],
        ['EUW', 'EUNE', 'RU', 'TR', 'KR', 'OCE', 'BR', 'LAS', 'LAN'],
      ],
    };
  },
};
</script>

<style scoped>
#LolContainer {
  height: 1000px;
  padding-top: 181px;
}
</style>
