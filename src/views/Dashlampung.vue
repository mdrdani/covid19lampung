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
            <v-card shaped>
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
            <v-card shaped>
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
            <v-card shaped>
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
            <v-card shaped>
              <v-navigation-drawer dark src="../assets/odp.jpg" width="100%" permanent>
                <v-card-title class="white--text headline">ODP (Orang Dalam Pengawasan)</v-card-title>
                <p class="ml-3 white--text display-2">800</p>
                <v-card-actions>
                  <p class="pl-2 white--text subtitle-1">Orang</p>
                </v-card-actions>
              </v-navigation-drawer>
            </v-card>
          </v-col>

          <v-col class="float-right" cols="12" sm="4">
            <v-card shaped>
              <v-navigation-drawer dark src="../assets/pdp.jpg" width="100%" permanent>
                <v-card-title class="white--text headline">PDP (Pasien Dalam Pengawasan)</v-card-title>
                <p class="ml-3 white--text display-2">10</p>
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
          Hotline Penting Dinas Kesehatan Provinsi Lampung
          <v-icon> mdi-phone-classic </v-icon> 0812-7415-6087
        </v-col>
      </v-row>
    </v-alert>

    <div>
      <div class="text-center mb-4">
        <v-btn color="primary" @click="alert = !alert">Kontak RS Provinsi Lampung</v-btn>
      </div>

      <v-alert 
      :value="alert"
      border="right" 
      colored-border 
      type="error" 
      elevation="2"
      transition="scale-transition">
        RSUD Dr H Abdul Moeloek, Bandar Lampung.
        <v-icon>mdi-phone-classic</v-icon>(0721) 703312
      </v-alert>

      <v-alert 
      :value="alert"
      border="right" 
      colored-border 
      type="error" 
      elevation="2"
      transition="scale-transition">
        RSUD Dr H Bob Bazar SKM, Kabupaten Lampung Selatan.
        <v-icon>mdi-phone-classic</v-icon>(0727) 322159
      </v-alert>

      <v-alert 
      :value="alert"
      border="right" 
      colored-border 
      type="error" 
      elevation="2"
      transition="scale-transition">
        RSUD Jend Ahmad Yani, Kota Metro.
        <v-icon>mdi-phone-classic</v-icon>(0725) 41820
      </v-alert>

      <v-alert 
      :value="alert"
      border="right" 
      colored-border 
      type="error" 
      elevation="2"
      transition="scale-transition">
        RSD May Jend HM Ryacudu, Kotabumi
        <v-icon>mdi-phone-classic</v-icon>(0724) 22095
      </v-alert>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "Dashlampung",
  data() {
    return {
      filteredCoronas: [],
      alert: false
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