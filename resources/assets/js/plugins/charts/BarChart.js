import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props:["datasets","labels"],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets
    }, {responsive: true, maintainAspectRatio: false})
  }
}
