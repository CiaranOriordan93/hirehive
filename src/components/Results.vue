<template>
  <div class="container">
    <div class="results">
      <div class="results__headings">
        <span class="results__position">POSITION</span>
        <span class="results__category">CATEGORY</span>
        <span class="results__location">LOCATION</span>
      </div>
      <div v-if="filteredListings.length > 0">
        <Listing
          v-for="(job, index) in filteredListings"
          :key="index"
          :position="job"
        ></Listing>
      </div>
      <div v-else>
        <h1 class="results__error">{{ errorMessage }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Listing from '../components/Listing';
export default {
  props: ['jobs', 'keyword', 'filter'],
  components: {
    Listing
  },
  data() {
    return {
      errorMessage: 'No matches to your search. Please try a different keyword'
    };
  },
  computed: {
    filteredListings() {
      // see if keyword matches a title
      const filteredTitles = this.jobs.filter(job => {
        return job.title.toLowerCase().includes(this.keyword.toLowerCase());
      });

      // if keyword matches no titles check for matches in the descriptions
      if (filteredTitles.length === 0) {
        const filteredDescriptions = this.jobs.filter(job => {
          return job.description.text
            .toLowerCase()
            .includes(this.keyword.toLowerCase());
        });
        return filteredDescriptions;
      }

      // see if filter matches any categorys
      if (this.filter.length > 0) {
        const filteredCategorys = this.jobs.filter(job => {
          return job.category.toLowerCase().includes(this.filter.toLowerCase());
        });
        return filteredCategorys;
      }

      return filteredTitles;
    }
  }
};
</script>

<style lang="scss" scoped></style>
