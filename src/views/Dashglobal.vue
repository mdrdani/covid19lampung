<template>
  <div class="dashboard">
    <go-top :size="50" bg-color="green" :max-width="100"></go-top>
    <v-row no-gutters>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search Country"
          single-line
          hide-details
          class="mb-3"
        ></v-text-field>

        <!-- card-utama -->
        <v-card v-for="corona in filterCount" :key="corona.OBJECTID" class="mb-5 mx-auto" outlined-2>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{corona.attributes.Country_Region.toUpperCase()}}</v-list-item-title>
              <v-list-item-subtitle class="text--secondary">Update {{ date | moment }}</v-list-item-subtitle>
              <v-col class="float-right" v-for="n in 1" :key="n" cols="12" sm="4">
                <v-card style="border-radius:25px;">
                  <v-navigation-drawer dark src="../assets/emergency.jpg" width="100%" permanent>
                    <v-card-title class="white--text headline">Kasus Positif</v-card-title>
                    <p class="ml-3 white--text display-2">{{corona.attributes.Confirmed}}</p>
                    <v-card-actions>
                      <p class="pl-2 white--text subtitle-1">Orang</p>
                    </v-card-actions>
                  </v-navigation-drawer>
                </v-card>
              </v-col>

              <v-col class="float-right" v-for="n in 1" :key="n" cols="12" sm="4">
                <v-card style="border-radius:25px;">
                  <v-navigation-drawer dark src="../assets/emergency2.jpg" width="100%" permanent>
                    <v-card-title class="white--text headline">Kasus Meninggal</v-card-title>
                    <p class="ml-3 white--text display-2">{{corona.attributes.Deaths}}</p>
                    <v-card-actions>
                      <p class="pl-2 white--text subtitle-1">Orang</p>
                    </v-card-actions>
                  </v-navigation-drawer>
                </v-card>
              </v-col>

              <v-col class="float-right" v-for="n in 1" :key="n" cols="12" sm="4">
                <v-card style="border-radius:25px;">
                  <v-navigation-drawer dark src="../assets/emergency3.jpg" width="100%" permanent>
                    <v-card-title class="white--text headline">Kasus Sembuh</v-card-title>
                    <p class="ml-3 white--text display-2">{{corona.attributes.Recovered}}</p>
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
import GoTop from '@inotom/vue-go-top';
export default {
  name: "Dashindo",
  components: {
    GoTop
  },
  data() {
    return {
      coronas: [],
      search: ""
    };
  },
  mounted() {
    this.load(), this.moment();
  },
  computed: {
    filterCount: function(){
      return this.coronas.filter(corona => {
        return corona.attributes.Country_Region.toUpperCase().match(this.search.toUpperCase())
      });
    }
  },
  methods: {
    async load() {
      axios
        .get("https://api.kawalcorona.com/")
        .then(res => (this.coronas = res.data))
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