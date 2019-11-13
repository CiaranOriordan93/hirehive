<template>
  <main class="main">
    <div class="results">
      <div class="results__headings">
        <span class="results__position">POSITION</span>
        <span class="results__category">CATEGORY</span>
        <span class="results__location">LOCATION</span>
      </div>
      <Listing></Listing>
    </div>
  </main>
</template>

<script>
import Listing from '../results/Listing';
export default {
  components: {
    Listing
  }
};
</script>

<style lang="scss" scoped></style>
