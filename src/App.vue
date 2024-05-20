<template>
<div id="app">
    <div class="row">
        <tab></tab>
        <div class="col">
            <RouterView></RouterView>
        </div>
    </div>
</div>
</template>

<script>
import tab from './sidebar/tab.vue';

export default {
  components: {
    tab
  }
}

</script>



