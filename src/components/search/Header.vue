<template>
  <div class="header">
    <Search></Search>
    <div class="filters">
      <button class="filters__button">#HR</button>
      <button class="filters__button">#FINANCE</button>
      <button class="filters__button">#SALES</button>
      <button class="filters__button">#TECHNOLOGY</button>
    </div>
  </div>
</template>

<script>
import Search from '../search/Search';
export default {
  components: {
    Search
  }
};
</script>

<style lang="scss" scoped></style>
