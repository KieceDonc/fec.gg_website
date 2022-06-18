<template>
  <MainContainer>
    <CriteriasMenu
      :ranks="criteriasRanks"
      :ranksImgs="criteriasRanksImg"
      :regions="criteriasRegions"
      :regionsImgs="criteriasRegionsImg"
    />
  </MainContainer>
</template>

<script>
import CriteriasMenu from '@/components/CriteriasMenu.vue';
import MainContainer from './Shared/MainContainer.vue';

export default {
  name: 'Lol',
  components: { CriteriasMenu, MainContainer },
  data: function () {
    return {
      criteriasRanks: [
        'Pro',
        'Challenger',
        'Grand Master',
        'Master',
        'Diamond',
        'Platinum',
        'Gold',
        'Silver',
        'Bronze',
        'Iron',
      ],
      criteriasRanksImg: [
        require('@/assets/lol/ranks/pro.png'),
        require('@/assets/lol/ranks/challenger.webp'),
        require('@/assets/lol/ranks/grandmaster.webp'),
        require('@/assets/lol/ranks/master.webp'),
        require('@/assets/lol/ranks/diamond.webp'),
        require('@/assets/lol/ranks/platinum.webp'),
        require('@/assets/lol/ranks/gold.webp'),
        require('@/assets/lol/ranks/silver.webp'),
        require('@/assets/lol/ranks/bronze.webp'),
        require('@/assets/lol/ranks/iron.webp'),
      ],
      criteriasRegions: [
        'EUW',
        'EUNE',
        'NA',
        'KR',
        'RU',
        'TR',
        'OCE',
        'BR',
        'LAS',
        'LAN',
        'JP',
      ],
      criteriasRegionsImg: [
        require('@/assets/lol/regions/euw.webp'),
        require('@/assets/lol/regions/eune.webp'),
        require('@/assets/lol/regions/na.webp'),
        require('@/assets/lol/regions/kr.png'),
        require('@/assets/lol/regions/ru.webp'),
        require('@/assets/lol/regions/tr.webp'),
        require('@/assets/lol/regions/oce.webp'),
        require('@/assets/lol/regions/br.webp'),
        require('@/assets/lol/regions/las.webp'),
        require('@/assets/lol/regions/lan.webp'),
        require('@/assets/lol/regions/jp.webp'),
      ],
    };
  },
};
</script>

<style scoped>
#LolContainer {
  padding-top: var(--header-height);
}
</style>
