<template lang="html">
  <div>
    <part-panel-white>
      <div slot="heading">
        Clients Stats
      </div>
      <div slot="subheading">
        Actifs-Suspendus
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
      labels: ['Actifs', 'Suspendus'],
      datasets: [{
        data: [10, 20],
        backgroundColor: [
            '#26c6da',
            '#fc4b6c',
        ]
      }],
    }
  },
}
</script>

<style lang="css">
</style>
