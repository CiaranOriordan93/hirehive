<template>
  <div id="app">
    <Header></Header>
    <Results></Results>
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
      result: [],
      title: [],
      description: []
    };
  },
  method: {
    formatTitle() {
      this.title = this.result[0].title.split(' ');
    },
    formatDescription() {
      this.description = this.result[0].description.text.split(' ');
    }
  },
  created() {
    Service.getJobs().then(response => {
      this.result = response.data;
      console.log(this.result);
    });
  }
};
</script>

<style lang="scss">
@import '../src/sass/main.scss';
</style>
