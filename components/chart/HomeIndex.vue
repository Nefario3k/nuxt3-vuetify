<template>
  <div>
    <client-only placeholder="Loading...">
      <LineChart
        :chart-options="lineChartOptions"
        :chart-data="lineChartData"
        :chart-id="`chartId`"
        :width="300"
        :height="400"
        :styles="{
          margin: '1rem auto',
          backgroundColor: 'rgba(255,255,255, .85)',
          padding: '.75rem',
        }"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineChartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "John Doe",
            backgroundColor: "#ff0099",
            borderColor: "#ff0099",
            borderWidth: "0",
            borderJoinStyle: "round",
            data: [40, 39, 10, 40, 39, 80, 40, 30, 10, 20, 30, 40],
          },
          {
            label: "Jane Doe",
            backgroundColor: "#ff9900",
            borderColor: "#ff9900",
            borderWidth: "0",
            borderJoinStyle: "round",
            data: [20, 9, 80, 90, 29, 58, 80, 20, 30, 40, 55, 75],
          },
          {
            label: "Jack Doe",
            backgroundColor: "#999999",
            borderColor: "#999999",
            borderWidth: "0",
            borderJoinStyle: "round",
            data: [10, 24, 42, 50, 69, 10, 20, 70, 89, 45, 35, 42],
          },
        ],
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>