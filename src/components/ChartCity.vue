<template>
  <div>
    <div class="small">
      <line-chart :chart-data="datacollection"></line-chart>
      <button @click="fillData()">Randomize</button>
    </div>
  </div> </template
>e32

<script>
import { mapGetters, mapActions } from "vuex";
import LineChart from "./LineChart.vue";

export default {
  name: "ChartCity",
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null,
      colors: [
        "#F44336",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#673AB7",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#795548",
        "#607D8B",
        "#9E9E9E"
      ]
    };
  },
  mounted() {
    this.fillData();
  },
  computed: {
    ...mapGetters("table", { listCity: "getUniqCity" })
  },
  methods: {
    ...mapActions("table", ["countCity"]),
    fillData() {
      this.datacollection = {
        labels: this.listCity.map(city => city.city),
        datasets: [
          {
            label: "Data two",
            backgroundColor: this.listCity.map(
              () => this.colors[this.getRandomInt()]
            ),
            data: this.listCity.map(city => city.count)
          }
        ]
      };
    },

    getRandomInt() {
      return Math.floor(Math.random() * (this.colors.length + 1));
    }
  }
};
</script>

<style></style>
