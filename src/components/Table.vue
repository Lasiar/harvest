<template>
  <v-card>
    <v-card-title>
      Информация по машнам
    </v-card-title>
    <v-spacer />
    <v-text-field
      v-model="search"
      append-icon="search"
      label="Поиск"
      hide-details
    >
    </v-text-field>

    <v-data-table
      :headers="headers"
      :items="filteredTable"
      :filter="HandleFilter"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.id }}</td>
        <td class="text-xs-center">{{ props.item.model }}</td>
        <td class="text-xs-center">
          <template v-for="i in props.item.Interfaces">
            {{ i.iface }} {{ i.mac }} {{ i.ip }};
          </template>
        </td>
        <td class="text-xs-center">{{ props.item.city }}</td>
        <td class="text-xs-center">{{ props.item.org }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Table",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "#",
          align: "left",
          sortable: true,
          value: "id"
        },
        { align: "center", sortable: false, text: "Модель", value: "mode" },
        {
          align: "center",
          sortable: false,
          text: "Сетевая конфигурация",
          value: "Interfaces"
        },
        { align: "center", sortable: false, text: "Город", value: "city" },
        { align: "center", sortable: false, text: "Провайдер", value: "org" }
      ]
    };
  },
  computed: {
    filteredTable() {
      if (!isNaN(this.search) && this.search !== "") {
        return this.table.filter(row => row.id === parseInt(this.search, 10));
      } else {
        return this.table.filter(
          row =>
            row.city.toLowerCase().includes(this.search.toLowerCase()) ||
            row.model.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
    ...mapState({ table: state => state.table.table.value })
  }
};
</script>

<style scoped></style>
