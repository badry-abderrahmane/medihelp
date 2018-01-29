<template lang="html">
  <div>
    <div class="row">
      <div class="col-md-6">
        <chart-clients></chart-clients>
      </div>
      <div class="col-md-6">
        <chart-tickets></chart-tickets>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <chart-tickets-doughnut></chart-tickets-doughnut>
      </div>
      <div class="col-md-4">
        <chart-clients-doughnut></chart-clients-doughnut>
      </div>
      <div class="col-md-4">
        <chart-users-doughnut></chart-users-doughnut>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <last-clients></last-clients>
      </div>
      <div class="col-md-8">
        <last-tickets v-if="$store.state.role < 4"></last-tickets>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user:'',
    }
  },
  created(){
    axios.get('/wayway')
      .then(response => {
        this.user = response.data;
    });
  }
}
</script>

<style lang="css">
</style>
