<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'entry', params: {id: 10}})">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">July</span>
      <span class="mx-1 fw-light">2022, day</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur debitis dignissimos excepturi
      fugiat illum incidunt obcaecati officia optio possimus praesentium tempore, totam vero. Adipisci animi esse illum
      placeat ratione.
    </div>
  </div>
</template>

<script>
export default {
  name: 'EntryComponent'
}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }

}
</style>
