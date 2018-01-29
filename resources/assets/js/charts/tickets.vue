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
        <Bar :datasets="datasets" :labels="labels"></Bar>
      </div>
    </part-panel-white>
  </div>

</template>

<script>
// LineChart.js
import Bar from './../plugins/charts/BarChart.js'

export default {
  components: {
    Bar
  },
  data () {
    return {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'May', 'Juin', 'Juillet'],
      datasets: [
        {
          label: 'Ouvert',
          backgroundColor: '#26c6da',
          data: [40, 39, 10, 40, 39, 80, 40]
        },{
          label: 'Fermé',
          backgroundColor: '#fc4b6c',
          data: [60, 55, 32, 10, 2, 12, 53]
        },{
          label: 'En cours',
          backgroundColor: '#ffb22b',
          data: [62, 11, 32, 133, 22, 11, 33]
        }
      ]
    }
  },
}
</script>

<style lang="css">
</style>
