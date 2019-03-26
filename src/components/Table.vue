<template>
  <div>
    <v-data-table :headers="headers" :items="table()" class="elevation-1">
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Table",
  data() {
    return {
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
      ],
      ...mapState({ table: state => state.table.value })
    };
  }
};
</script>

<style scoped></style>
