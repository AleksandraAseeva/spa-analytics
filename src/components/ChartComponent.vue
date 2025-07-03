<template>
  <div class="chart-component">
    <canvas ref="chartCanvas" class="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'

export default {
  name: 'ChartComponent',
  props: {
    data: {
      type: Object,
      required: true
    },
      chartType: {
      type: String,
      default: 'bar',
      validator: value => ['bar', 'pie', 'polarArea', 'line'].includes(value)
    }
  },
  mounted() {
    this.renderChart()
  },
  watch: {
    data: {
      deep: true,
      handler() {
        this.renderChart()
      }
    },
    chartType() {
      this.renderChart()
    }
  },
  methods: {
    renderChart() {
      Chart.register(...registerables)
      
      if (this.chartInstance) {
        this.chartInstance.destroy()
      }
      
      const ctx = this.$refs.chartCanvas.getContext('2d')
      this.chartInstance = new Chart(ctx, {
        type: this.chartType,
        data: this.data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
          }
        }
      })
    }
  },
  beforeUnmount() {
    if (this.chartInstance) {
      this.chartInstance.destroy()
    }
  }
}
</script>

<style scoped>
.chart-component {
  width: 100%;
  height: 100%;
}

</style>