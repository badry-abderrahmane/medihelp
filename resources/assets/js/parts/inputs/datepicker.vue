<template lang="html">
  <div>
    <datepicker v-model="state.date" name="uniquename"></datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
      Datepicker
  }
}
</script>

<style lang="css">
</style>
