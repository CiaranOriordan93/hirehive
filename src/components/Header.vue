<template>
  <main class="main">
    <Search @searchString="(input = $event), sendString()"></Search>
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
  </main>
</template>

<script>
import Search from '../components/Search';
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
    sendString() {
      this.$emit('searchString', this.input);
    },
    sendFilter() {
      this.$emit('searchFilter', this.filter);
    },
    toggleButton(index) {
      for (let i = 0; i < this.buttons.length; i++) {
        // loop through all buttons that are not the one clicked on
        if (i !== index) {
          this.buttons[i].isActive = false;
          // toggle isActive on the button that was clicked
        } else {
          this.buttons[index].isActive = !this.buttons[index].isActive;
          if (
            this.filter.length > 0 &&
            this.filter === this.buttons[index].text.toLowerCase()
            // check to see if filter exists AND is the same value
            // as the button that was just clicked
          ) {
            this.filter = '';
            this.sendFilter();
          } else {
            this.filter = this.buttons[index].text.toLowerCase();
            this.sendFilter();
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
