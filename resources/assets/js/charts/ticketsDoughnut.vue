<template lang="html">
  <div>
    <part-panel-white>
      <div slot="heading">
        Tickets Stats
      </div>
      <div slot="subheading">
        Ouverts-En cours-Fermés
      </div>
      <div slot="body">
        <Doughnut :datasets="datasets" :labels="labels"></Doughnut>
      </div>
    </part-panel-white>
  </div>

</template>

<script>
// LineChart.js
import Doughnut from './../plugins/charts/DoughnutChart.js'

export default {
  components: {
    Doughnut
  },
  data () {
    return {
      labels: ['Ouverts', 'En cours', 'Fermés'],
      datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
            '#26c6da',
            '#fc4b6c',
            '#ffb22b',
        ]
      }],
    }
  },
}
</script>

<style lang="css">
</style>
