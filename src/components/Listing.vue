<template>
  <a :href="position.hostedUrl" target="_blank" class="listing__link">
    <div class="listing">
      <div class="listing__position">
        <span>{{ position.title }}</span>
      </div>
      <div class="listing__category">
        <span class="listing__category">{{ position.category }}</span>
      </div>
      <div class="listing__location">
        <span class="listing__location">{{ position.location }}</span>
      </div>
      <img
        src="../assets/icons/right-arrow.svg"
        height="20px"
        width="20px"
        class="listing__arrow"
      />
    </div>
  </a>
</template>

<script>
export default {
  props: ['position']
};
</script>

<style lang="scss" scoped></style>
