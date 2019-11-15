<template>
  <div class="search">
    <div class="search__error" v-if="display">
      <span class="search__error__text">{{ errorText }}</span>
    </div>
    <button class="search__button" @click="submit">
      <img
        src="../assets/icons/magnifying-glass.svg"
        class="search__button__icon"
      />
    </button>
    <input
      type="text"
      class="search__field"
      placeholder="Search by keyword, technology or job title"
      v-model="input"
      @keyup="keyMonitor"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      display: false,
      qualify: false,
      errorText: 'Must enter 2 or more characters'
    };
  },
  methods: {
    inputCheck() {
      if (this.input.length < 2) {
        this.qualify = false;
        this.display = true;
      } else {
        this.qualify = true;
        this.display = false;
      }
    },
    keyMonitor(event) {
      if (event.key === 'Enter') {
        this.submit();
      }
    },
    submit() {
      this.inputCheck();
      if (this.qualify === true) {
        this.$emit('searchString', this.input);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
