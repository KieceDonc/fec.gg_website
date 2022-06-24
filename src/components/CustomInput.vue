<template>
  <div class="CustomInputContainer">
    <div class="CustomInputIcon">
      <component :is="icon"></component>
    </div>
    <input
      :type="type"
      :placeholder="placeholder"
      v-on:focus="onFocus"
      v-on:blur="onBlur"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
      required: false,
    },
    icon: {
      type: Object,
      required: false,
    },
  },
  data: function () {
    return {
      borderColorOnFocus: window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--main-border-color'),
      borderColorOnBlur: window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--low-border-color'),
    };
  },
  methods: {
    onFocus: function (event) {
      event.target.parentElement.style.borderColor = this.borderColorOnFocus;
    },
    onBlur: function (event) {
      event.target.parentElement.style.borderColor = this.borderColorOnBlur;
    },
  },
};
</script>
<style scoped>
.CustomInputContainer {
  display: flex;
  border: 2px solid var(--low-border-color);
  border-radius: 5px;
  height: 40px;
  width: 100%;
}

input {
  border: none;
  font-size: 0.9em;
}

input:focus {
  outline: none;
}

.CustomInputIcon {
  margin: 0 0 0 5px;
  display: flex;
  align-items: center;
}
</style>
