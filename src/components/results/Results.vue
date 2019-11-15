<template>
  <main class="main">
    <div class="results">
      <div class="results__headings">
        <span class="results__position">POSITION</span>
        <span class="results__category">CATEGORY</span>
        <span class="results__location">LOCATION</span>
      </div>
      <Listing
        v-for="(job, index) in jobs"
        :key="index"
        :position="job"
      ></Listing>
    </div>
  </main>
</template>

<script>
import Listing from '../results/Listing';
export default {
  props: ['jobs'],
  components: {
    Listing
  }
};
</script>

<style lang="scss" scoped></style>
