<template>
  <div class="displayInline">
    <slot></slot>
    <div class="orangeText marginLeft">*</div>
  </div>
</template>

<style scoped>
.orangeText {
  color: var(--orange-color);
}

.marginLeft {
  margin-left: 8px;
}
</style>
