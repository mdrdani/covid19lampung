<template>
  <div class="dashboard">
    <go-top :size="50" bg-color="green" :max-width="100"></go-top>
    <v-row no-gutters>
      <v-col cols="12">
        <!-- card-utama -->
        <v-card class="mb-5 mx-auto" raised>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">Total Seluruh</v-list-item-title>
              <v-list-item-subtitle class="text--secondary">Update {{ date | moment }}</v-list-item-subtitle>
              <v-col class="float-right" cols="12" sm="4">
                <v-card style="border-radius:25px;">
                  <v-navigation-drawer dark src="../assets/emergency.jpg" width="100%" permanent>
                    <v-card-title class="white--text headline">Kasus Positif</v-card-title>
                    <p class="ml-3 white--text display-2">
                      {{totalcoronas.cases}}
                      <span class="headline">Orang</span>
                    </p>
                    <v-chip class="ma-2" color="yellow" text-color="black">
                      <v-avatar left>
                        <v-icon>mdi-account-circle</v-icon>
                      </v-avatar>Hari ini
                      <v-icon>mdi-plus-minus</v-icon>
                      {{totalcoronas.todayCases}} Orang
                    </v-chip>
                  </v-navigation-drawer>
                </v-card>
              </v-col>

              <v-col class="float-right" cols="12" sm="4">
                <v-card style="border-radius:25px;">
                  <v-navigation-drawer dark src="../assets/emergency2.jpg" width="100%" permanent>
                    <v-card-title class="white--text headline">Kasus Meninggal</v-card-title>
                    <p class="ml-3 white--text display-2">
                      {{totalcoronas.deaths}}
                      <span class="headline">Orang</span>
                    </p>
                    <v-chip class="ma-2" color="red" text-color="white">
                      <v-avatar left>
                        <v-icon>mdi-account-circle</v-icon>
                      </v-avatar>
                      Hari ini {{totalcoronas.todayDeaths}} Orang
                    </v-chip>
                  </v-navigation-drawer>
                </v-card>
              </v-col>

              <v-col class="float-right" cols="12" sm="4">
                <v-card style="border-radius:25px;">
                  <v-navigation-drawer dark src="../assets/emergency3.jpg" width="100%" permanent>
                    <v-card-title class="white--text headline">Kasus Sembuh</v-card-title>
                    <p class="ml-3 white--text display-2">
                      {{totalcoronas.recovered}}
                      <span class="headline">Orang</span>
                    </p>
                    <v-chip class="ma-2" color="teal" text-color="white">
                      <v-avatar left>
                        <v-icon>mdi-account-circle</v-icon>
                      </v-avatar>
                      {{totalcoronas.active}} Orang Masih Perawatan
                    </v-chip>
                  </v-navigation-drawer>
                </v-card>
              </v-col>
            </v-list-item-content>
          </v-list-item>
          <v-container class="grey lighten-5">
            <v-row justify="center" no-gutters>
              <v-col class="pa-2" cols="12" sm="6">
                <v-list-item-title class="title mb-4">Grafik Kasus Positif</v-list-item-title>
                <area-chart xmin="3/2/20" :colors="['#FF9800','#666']" :data="historyid.timeline.cases"></area-chart>
              </v-col>
              <v-col class="pa-2" cols="12" sm="6">
                <v-list-item-title class="title mb-3">Grafik Kasus Meninggal</v-list-item-title>
                <area-chart xmin="3/11/20" :colors="['#E91E63','#666']" :data="historyid.timeline.deaths"></area-chart>
              </v-col>
            </v-row>
          </v-container>
          <v-container class="grey lighten-5">
            <v-row justify="center" no-gutters>
              <v-col class="pa-2" cols="12" sm="6">
                <v-list-item-title class="title mb-3">Pie Chart Kasus Covid-19</v-list-item-title>
                <pie-chart :dataset="{borderWidth: 5}" class="mb-3" :data="[['Sembuh', totalcoronas.recovered], ['Meninggal', totalcoronas.deaths],['Positif', totalcoronas.cases]]"></pie-chart>
              </v-col>
              <v-col class="pa-2" cols="12" sm="6">
                <v-list-item-title class="title mb-3">Bar Chart Kasus Covid-19</v-list-item-title>
                <bar-chart :colors="['#009688']" :data="[['Sembuh', totalcoronas.recovered], ['Meninggal', totalcoronas.deaths], ['Positif', totalcoronas.cases]]"></bar-chart>
              </v-col>
            </v-row>
          </v-container>
          
        </v-card>
        <!-- end -->

        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search Provinsi"
          single-line
          hide-details
          class="mb-3"
        ></v-text-field>

        <!-- card-utama -->
        <v-card v-for="corona in filterProv" :key="corona.FID" class="mb-5 mx-auto" outlined-2>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{corona.attributes.Provinsi.toUpperCase()}}</v-list-item-title>
              <v-list-item-subtitle class="text--secondary">Update {{ date | moment }}</v-list-item-subtitle>
              <v-col class="float-right" cols="12" sm="4">
                <v-card style="border-radius:25px;">
                  <v-navigation-drawer dark src="../assets/emergency.jpg" width="100%" permanent>
                    <v-card-title class="white--text headline">Kasus Positif</v-card-title>
                    <p class="ml-3 white--text display-2">{{corona.attributes.Kasus_Posi}}</p>
                    <v-card-actions>
                      <p class="pl-2 white--text subtitle-1">Orang</p>
                    </v-card-actions>
                  </v-navigation-drawer>
                </v-card>
              </v-col>

              <v-col class="float-right" cols="12" sm="4">
                <v-card style="border-radius:25px;">
                  <v-navigation-drawer dark src="../assets/emergency2.jpg" width="100%" permanent>
                    <v-card-title class="white--text headline">Kasus Meninggal</v-card-title>
                    <p class="ml-3 white--text display-2">{{corona.attributes.Kasus_Meni}}</p>
                    <v-card-actions>
                      <p class="pl-2 white--text subtitle-1">Orang</p>
                    </v-card-actions>
                  </v-navigation-drawer>
                </v-card>
              </v-col>

              <v-col class="float-right" cols="12" sm="4">
                <v-card style="border-radius:25px;">
                  <v-navigation-drawer dark src="../assets/emergency3.jpg" width="100%" permanent>
                    <v-card-title class="white--text headline">Kasus Sembuh</v-card-title>
                    <p class="ml-3 white--text display-2">{{corona.attributes.Kasus_Semb}}</p>
                    <v-card-actions>
                      <p class="pl-2 white--text subtitle-1">Orang</p>
                    </v-card-actions>
                  </v-navigation-drawer>
                </v-card>
              </v-col>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <!-- end -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import GoTop from "@inotom/vue-go-top";
export default {
  name: "Dashindo",
  components: {
    GoTop
  },
  data() {
    return {
      coronas: [],
      totalcoronas: [],
      historyid: [],
      search: ""
    };
  },
  mounted() {
    this.load(), this.loadd(), this.historyind(), this.moment();
  },
  computed: {
    filterProv: function() {
      return this.coronas.filter(corona => {
        return corona.attributes.Provinsi.toUpperCase().match(
          this.search.toUpperCase()
        );
      });
    }
  },
  methods: {
    async load() {
      axios
        .get("https://api.kawalcorona.com/indonesia/provinsi/")
        .then(res => (this.coronas = res.data))
        .catch(error => console.log(error.response.data));
    },
    async loadd() {
      axios
        .get("https://corona.lmao.ninja/countries/Indonesia")
        .then(res => (this.totalcoronas = res.data))
        .catch(error => console.log(error.response.data));
    },
    async historyind() {
      axios
        .get("https://corona.lmao.ninja/v2/historical/Indonesia")
        .then(res => (this.historyid = res.data))
        .catch(error => console.log(error.response.data));
    },
    moment: function() {
      return moment();
    }
  },
  filters: {
    moment: function(date) {
      return moment(date)
        .locale("id")
        .format("D MMMM YYYY");
    }
  }
};
</script>

<style scoped>
</style>