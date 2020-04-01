<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Pantau Covid-19</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
          <router-view></router-view>
      </v-container>
    </v-content>
    
    <v-footer color="green" app>
      <span class="text-right white--text">Lampung Dev &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';


export default {
  name: "App",
  props: {
        source: String,
    },

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
    drawer: null,
    links:[
      {icon: 'mdi-home', text: 'Home', route: '/'},
      {icon: 'mdi-access-point', text: 'Dashboard Lampung', route: '/dashlpg'},
      {icon: 'mdi-access-point', text: 'Dashboard Indonesia', route: '/dashindo'},
      {icon: 'mdi-access-point', text: 'Dashboard Global', route: '/dashglobal'},
      {icon: 'mdi-home', text: 'About', route: '/about'}
    ]
  })
};
</script>
