<template>
  <v-app id="inspire">
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          value="true"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      fixed
      clipped-left
      scroll-off-screen
      scroll-target="#scrolling-techniques"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Harvest</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      drawer: false,
      items: [{ icon: "", title: "Установка времени отображения", to: "/" }]
    };
  },
  methods: mapActions({ getTable: "getTable" }),
  created() {
    this.getTable();
  }
};
</script>
