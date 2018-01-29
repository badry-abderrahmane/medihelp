import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props:["datasets","labels"],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets
    }, {responsive: true, maintainAspectRatio: false})
  }
}
