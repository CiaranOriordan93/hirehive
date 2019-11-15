<template>
  <div id="app">
    <Header></Header>
    <Results :jobs="result"></Results>
  </div>
</template>

<script>
import Header from '../src/components/search/Header';
import Results from '../src/components/results/Results';
import Service from '../src/services/api';

export default {
  components: {
    Header,
    Results
  },
  data() {
    return {
      result: []
    };
  },
  created() {
    Service.getJobs().then(response => {
      this.result = response.data.jobs;
      console.log(this.result);
    });
  }
};
</script>

<style lang="scss">
@import '../src/sass/main.scss';
</style>
