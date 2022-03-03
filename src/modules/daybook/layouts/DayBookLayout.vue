<template>
  <Navbar/>
  <div class="d-flex">
    <div class="col-4">
      <EntryList/>
    </div>
    <div class="col">
      <router-view/>
    </div>
  </div>

</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  components: {
    EntryList: defineAsyncComponent(() => import('../components/EntryList')),
    Navbar: defineAsyncComponent(() => import('../components/Navbar'))
  }
}
</script>
