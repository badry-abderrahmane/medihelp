<template lang="html">
  <div>
    <part-panel-white>
      <div slot="heading">
        Clients Stats
      </div>
      <div slot="subheading">
        Clients-Tickets
      </div>
      <div slot="body">
        <line-example :datasets="datasets" :labels="labels"></line-example>
      </div>
    </part-panel-white>
  </div>

</template>

<script>
// LineChart.js
import LineExample from './../plugins/charts/LineChart.js'

export default {
  components: {
    LineExample
  },
  data () {
    return {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'May', 'Juin', 'Juillet'],
      datasets: [
        {
          label: 'Clients',
          backgroundColor: '#7460ee',
          data: [40, 39, 10, 40, 39, 80, 40]
        },{
          label: 'Tickets',
          backgroundColor: '#fc4b6c',
          data: [60, 55, 32, 10, 2, 12, 53]
        }
      ]
    }
  },
}
</script>

<style lang="css">
</style>
