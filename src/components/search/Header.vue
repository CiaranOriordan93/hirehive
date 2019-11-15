<template>
  <div class="header">
    <Search></Search>
    <div class="filters">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        class="filters__button"
        :class="{ active: button.isActive }"
        @click="toggleButton(index)"
      >
        #{{ button.text.toUpperCase() }}
      </button>
    </div>
  </div>
</template>

<script>
import Search from '../search/Search';
export default {
  components: {
    Search
  },
  data() {
    return {
      input: '',
      filter: '',
      buttons: [
        {
          isActive: false,
          text: 'Hr'
        },
        {
          isActive: false,
          text: 'Finance'
        },
        {
          isActive: false,
          text: 'Sales'
        },
        {
          isActive: false,
          text: 'Technology'
        }
      ]
    };
  },
  methods: {
    send() {
      this.$emit('searchString', this.input);
      this.$emit('call');
    },
    toggleButton(index) {
      for (let i = 0; i < this.buttons.length; i++) {
        if (i !== index) {
          this.buttons[i].isActive = false;
        } else this.buttons[index].isActive = !this.buttons[index].isActive;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
