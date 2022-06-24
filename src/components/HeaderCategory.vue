<template>
  <router-link class="category" :to="to">
    <div>{{ text }}</div>
  </router-link>
</template>

<script>
export default {
  name: 'HeaderCategory',
  props: {
    to: {
      type: String,
      required: true,
      default: '/',
    },
    text: {
      type: String,
      required: true,
      default: '',
    },
    iconPath: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>

<style scoped>
.category {
  color: inherit;
  text-decoration: none;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
}

.category:hover {
  text-decoration: underline;
}
</style>
