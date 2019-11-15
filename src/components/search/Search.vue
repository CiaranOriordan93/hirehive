<template>
  <div class="search">
    <div class="search__error" v-if="display">
      <span class="search__error__text">Must enter 2 or more characters</span>
    </div>
    <button class="search__button" @click="inputCheck">
      <img
        src="../../assets/icons/magnifying-glass.svg"
        class="search__button__icon"
      />
    </button>
    <input
      type="text"
      class="search__field"
      placeholder="Search by keyword, technology or job title"
      v-model.lazy="input"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      display: false
    };
  },
  methods: {
    inputCheck() {
      if (this.input.length < 2) {
        this.display = true;
      } else this.display = false;
    }
    // formatTitle() {
    //   this.title.push(this.result[0].title.split(' '));
    // },
    // formatDescription() {
    //   this.description.push(this.result[0].description.text.split(' '));
    // },
    // weightCounter() {},
    // displayListing() {},
    // search() {
    //   console.log('hello');
    // }
  }
};
</script>

<style lang="scss" scoped></style>
