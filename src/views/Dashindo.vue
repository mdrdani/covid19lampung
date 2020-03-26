<template>
    <div class="dashboard">
        <v-row no-gutters>
          <v-col cols="12">

            <!-- card-utama -->
            <v-card v-for="total in totalcoronas" :key="total.name" class="mb-5 mx-auto" outlined-2 >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">Total</v-list-item-title>
                  <v-list-item-subtitle class="text--secondary">Update {{ new Date() | moment(" D MMMM YYYY") }} </v-list-item-subtitle>
                  <v-col class="float-right" v-for="n in 1" :key="n" cols="12" sm="4">
                    <v-card>
                      <v-navigation-drawer
                        dark
                        src="../assets/emergency.jpg"
                        width="100%"
                        permanent
                      >
                      <v-card-title class="white--text headline">Kasus Positif</v-card-title>
                      <p class="ml-3 white--text display-2">{{total.positif}}</p>
                      <v-card-actions>
                        <p class="pl-2 white--text subtitle-1">Orang</p>
                      </v-card-actions>
                      </v-navigation-drawer>
                    </v-card>
                  </v-col>

                  <v-col class="float-right" v-for="n in 1" :key="n" cols="12" sm="4">
                    <v-card>
                      <v-navigation-drawer
                        dark
                        src="../assets/emergency2.jpg"
                        width="100%"
                        permanent
                      >
                      <v-card-title class="white--text headline">Kasus Meninggal</v-card-title>
                      <p class="ml-3 white--text display-2">{{total.meninggal}}</p>
                      <v-card-actions>
                        <p class="pl-2 white--text subtitle-1">Orang</p>
                      </v-card-actions>
                      </v-navigation-drawer>
                    </v-card>
                  </v-col>

                  <v-col class="float-right" v-for="n in 1" :key="n" cols="12" sm="4">
                    <v-card>
                      <v-navigation-drawer
                        dark
                        src="../assets/emergency3.jpg"
                        width="100%"
                        permanent
                      >
                      <v-card-title class="white--text headline">Kasus Sembuh</v-card-title>
                      <p class="ml-3 white--text display-2">{{total.sembuh}}</p>
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

            <!-- card-utama -->
            <v-card v-for="corona in coronas" :key="corona.FID" class="mb-5 mx-auto" outlined-2 >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">{{corona.attributes.Provinsi}}</v-list-item-title>
                  <v-list-item-subtitle class="text--secondary">Update {{ new Date() | moment(" D MMMM YYYY") }} </v-list-item-subtitle>
                  <v-col class="float-right" v-for="n in 1" :key="n" cols="12" sm="4">
                    <v-card>
                      <v-navigation-drawer
                        dark
                        src="../assets/emergency.jpg"
                        width="100%"
                        permanent
                      >
                      <v-card-title class="white--text headline">Kasus Positif</v-card-title>
                      <p class="ml-3 white--text display-2">{{corona.attributes.Kasus_Posi}}</p>
                      <v-card-actions>
                        <p class="pl-2 white--text subtitle-1">Orang</p>
                      </v-card-actions>
                      </v-navigation-drawer>
                    </v-card>
                  </v-col>

                  <v-col class="float-right" v-for="n in 1" :key="n" cols="12" sm="4">
                    <v-card>
                      <v-navigation-drawer
                        dark
                        src="../assets/emergency2.jpg"
                        width="100%"
                        permanent
                      >
                      <v-card-title class="white--text headline">Kasus Meninggal</v-card-title>
                      <p class="ml-3 white--text display-2">{{corona.attributes.Kasus_Meni}}</p>
                      <v-card-actions>
                        <p class="pl-2 white--text subtitle-1">Orang</p>
                      </v-card-actions>
                      </v-navigation-drawer>
                    </v-card>
                  </v-col>

                  <v-col class="float-right" v-for="n in 1" :key="n" cols="12" sm="4">
                    <v-card>
                      <v-navigation-drawer
                        dark
                        src="../assets/emergency3.jpg"
                        width="100%"
                        permanent
                      >
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
import axios from 'axios'
export default {
    name: "Dashindo",
    data(){
        return{
            coronas: [],
            totalcoronas: [],
        }
    },
    mounted(){
        this.load(),
        this.loadd()
    },
    methods:{
        async load() {
            axios.get('https://api.kawalcorona.com/indonesia/provinsi/')
            .then(res => this.coronas = res.data)
            .catch(error => console.log(error.response.data))
        },
        async loadd(){
            axios.get('https://api.kawalcorona.com/indonesia/')
            .then(res => this.totalcoronas = res.data)
            .catch(error => console.log(error.response.data))
        },
    }
}
</script>