import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props:["datasets","labels"],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets
    }, {responsive: true, maintainAspectRatio: false})
  }
}
