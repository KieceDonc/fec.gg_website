<template>
  <div>
    <a><slot></slot></a>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  border-radius: 8px;
  border: 2px solid var(--main-button-color);
  color: var(--main-button-color);
}

a {
  width: 100%;
  text-align: center;
  display: inline-block;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
