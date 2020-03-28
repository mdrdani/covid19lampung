<template>
  <div class="dashboard">
    <v-alert
      dense
      text
      type="success"
    >Sumber Data : dinkes.lampungprov.go.id Update Terakhir : {{ date | moment }}</v-alert>
    <!-- card-utama -->
    <v-card v-for="corona in filteredCoronas" :key="corona.FID" class="mb-5 mx-auto" outline-4>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Provinsi Lampung</v-list-item-title>
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

          <v-col class="float-right" cols="12" sm="4">
            <v-card style="border-radius:25px;">
              <v-navigation-drawer dark src="../assets/odp.jpg" width="100%" permanent>
                <v-card-title class="white--text headline">ODP (Orang Dalam Pengawasan)</v-card-title>
                <p class="ml-3 white--text display-2">431</p>
                <v-card-actions>
                  <p class="pl-2 white--text subtitle-1">Orang</p>
                </v-card-actions>
              </v-navigation-drawer>
            </v-card>
          </v-col>

          <v-col class="float-right" cols="12" sm="4">
            <v-card style="border-radius:25px;">
              <v-navigation-drawer dark src="../assets/pdp.jpg" width="100%" permanent>
                <v-card-title class="white--text headline">PDP (Pasien Dalam Pengawasan)</v-card-title>
                <p class="ml-3 white--text display-2">13</p>
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
    <v-alert prominent type="error">
      <v-row align="center">
        <v-col class="grow">
          Hotline Penting Dinas Kesehatan Provinsi Lampung  <v-icon> mdi-phone-classic </v-icon> 0812-7415-6087
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "Dashlampung",
  data() {
    return {
      filteredCoronas: []
    };
  },
  mounted() {
    this.moment(), this.load();
  },
  methods: {
    moment: function() {
      return moment();
    },
    async load() {
      axios
        .get("https://api.kawalcorona.com/indonesia/provinsi/")
        .then(response => {
          const coronas = response.data;

          this.filteredCoronas = coronas.filter(corona =>
            corona.attributes.Provinsi.includes("Lampung")
          );
        });
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