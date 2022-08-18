<template>
  <div
    class="MoneyInputContainer"
    v-bind:class="{
      MoneyInputContainerFocus: focus,
    }"
  >
    <input
      type="number"
      :placeholder="placeholder"
      v-on:focus="onFocus"
      v-on:blur="onBlur"
    />
    €
  </div>
</template>

<script>
export default {
  name: 'MoneyInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      focus: false,
    };
  },
  methods: {
    onFocus: function () {
      this.focus = true;
    },
    onBlur: function () {
      this.focus = false;
    },
  },
};
</script>

<style scoped>
.MoneyInputContainer {
  margin-top: 10px;
  width: 120px;
  height: 30px;
  border-radius: 4px;
  border: 2px solid var(--second-border-color);
  display: inline-flex;
  background-color: white;
  align-items: center;
}

input {
  width: 100px;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
}

.MoneyInputContainerFocus {
  appearance: none;
  outline: 2px solid var(--second-border-color);
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
}

input:focus {
  appearance: none;
  outline: none;
  border-radius: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
}
</style>
