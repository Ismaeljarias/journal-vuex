<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">July</span>
      <span class="mx02 fs-4 fw-light">2022, Monday</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-primary">
        Upload photo
        <i class="fa fa-upload"></i>
      </button>
    </div>

  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="What happened today?"></textarea>
  </div>

  <Fab icon="fa-save"/>

  <img src="https://as01.epimg.net/meristation/imagenes/2018/09/05/header_image/152083491536142468.jpg"
       alt="entry-picture" class="img-thumbnail">

</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab'))
  }
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgb($color: #000000, $alpha: 0.2);
}

</style>
