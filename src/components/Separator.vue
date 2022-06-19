<template>
  <div class="separator">
    <span class="slot"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'Separator',
};
</script>

<style scoped>
.separator {
  color: var(--second-text-color);
  width: 100%;
  text-align: center;
  margin: 10px 0 20px;
  position: relative;
}

.separator:before,
.separator:after {
  content: '';
  position: absolute;
}

.separator:before {
  top: 50%;
  background: var(--second-border-color);
  height: 1px;
  left: 0;
  right: 0;
}

.slot {
  background: #fff;
  padding: 0 10px;
  position: relative;
  z-index: 1;
}
</style>
