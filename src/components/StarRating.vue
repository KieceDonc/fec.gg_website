<template>
  <span class="rating" data-rating="0">
    <i class="star" data-checked="false" data-note="1">&#9733;</i>
    <i class="star" data-checked="false" data-note="2">&#9733;</i>
    <i class="star" data-checked="false" data-note="3">&#9733;</i>
    <i class="star" data-checked="false" data-note="4">&#9733;</i>
    <i class="star" data-checked="false" data-note="5">&#9733;</i>
  </span>
</template>

<script>
// https://codepen.io/andys-codepen/pen/MWrxGxb

export default {
  name: 'StarRating',
  mounted() {
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach((rating) =>
      rating.addEventListener('mouseleave', this.ratingHandler)
    );

    const stars = document.querySelectorAll('.rating .star');
    stars.forEach((star) => {
      star.addEventListener('mouseover', this.starSelection);
      star.addEventListener('mouseleave', this.starSelection);
      star.addEventListener('click', this.activeSelect);
    });
  },
  methods: {
    ratingHandler(e) {
      const childStars = e.target.children;
      for (let i = 0; i < childStars.length; i++) {
        const star = childStars.item(i);
        if (star.dataset.checked === 'true') {
          star.classList.add('hover');
        } else {
          star.classList.remove('hover');
        }
      }
    },
    starSelection(e) {
      const parent = e.target.parentElement;
      const childStars = parent.children;
      const dataset = e.target.dataset;
      const note = +dataset.note; // Convert note (string) to note (number)
      for (let i = 0; i < childStars.length; i++) {
        const star = childStars.item(i);
        if (+star.dataset.note > note) {
          star.classList.remove('hover');
        } else {
          star.classList.add('hover');
        }
      }
    },
    activeSelect(e) {
      const parent = e.target.parentElement;
      const childStars = parent.children;
      const dataset = e.target.dataset;
      const note = +dataset.note; // Convert note (string) to note (number)
      for (let i = 0; i < childStars.length; i++) {
        const star = childStars.item(i);
        if (+star.dataset.note > note) {
          star.classList.remove('hover');
          star.dataset.checked = 'false';
        } else {
          star.classList.add('hover');
          star.dataset.checked = 'true';
        }
      }
    },
  },
};
</script>

<style scoped>
.hover {
  color: orange;
}
</style>
