<template lang="html">
  <div>
    <part-panel-white>
      <div slot="heading">
        Utilisateurs Stats
      </div>
      <div slot="subheading">
        Connectés-Actifs-Suspendus
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
      labels: ['Connectés', 'Actifs', 'Suspendus'],
      datasets: [{
        data: [5, 13, 7],
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
