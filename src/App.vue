<template>
  <div id="app">
    <Header
      @searchString="input = $event"
      @searchFilter="filter = $event"
    ></Header>
    <Results :jobs="result" :keyword="input" :filter="filter"></Results>
    <span class="error__text">{{ errorText }}</span>
  </div>
</template>

<script>
import Header from '../src/components/Header';
import Results from '../src/components/Results';
import Service from '../src/services/api';

export default {
  components: {
    Header,
    Results
  },
  data() {
    return {
      result: [],
      input: '',
      filter: '',
      errorText: ''
    };
  },
  created() {
    Service.getJobs()
      .then(response => {
        this.result = response.data.jobs;
      })
      .catch(error => {
        console.log(`there was an error: ${error.response}`);
        this.errorText = error.response;
      });
  }
};
</script>

<style lang="scss">
@import '../src/sass/main.scss';
</style>
