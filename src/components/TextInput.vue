<template>
  <div class="textInputContainer">
    <mail-icon style="color: gray" class="textInputIcon" />
    <input
      type="text"
      :placeholder="placeholder"
      v-on:focus="onFocus"
      v-on:blur="onBlur"
    />
  </div>
</template>

<script>
import { MailIcon } from 'vue-tabler-icons';

export default {
  name: 'TextInput',
  components: { MailIcon },
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    borderColorOnFocus: {
      type: String,
      required: true,
    },
    borderColorOnBlur: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      borderColorOnFocus: window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--main-border-color'),
      borderColorOnBlur: window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--second-border-color'),
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
.textInputContainer {
  display: flex;
  border: 2px solid var(--second-border-color);
  border-radius: 5px;
  width: fit-content;
  align-items: center;
  height: 40px;
}

input {
  border: none;
}

input:focus {
  outline: none;
}

.textInputIcon {
  margin: 5px;
}
</style>
