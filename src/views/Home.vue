<template>
  <div class="home">
    <v-carousel>
      <v-carousel-item
        height="125"
        contain
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <br>
    <v-alert
      dense
      text
      type="success"
    >
      Sumber Data : kawalcorona.com. Update Terakhir : {{ date | moment }}
    </v-alert>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "Home",
  data(){
    return{
      items: [
        {
          src:
            "https://asset.kompas.com/data/photo/special-page/infographic/32003201110456.jpeg"
        },
        {
          src:
            "https://www.covid19.go.id/wp-content/uploads/2020/03/Cara-Memakai-masker-yang-benar.jpg"
        },
        {
          src:
            "https://www.covid19.go.id/wp-content/uploads/2020/03/Flyer-2020-etika-batuk.jpg"
        },
        {
          src:
            "https://www.covid19.go.id/wp-content/uploads/2020/03/FLYER-CTPS_COVID-19-cuci-tangan-pakai-sabun.jpg"
        },
        {
          src:
            "https://www.covid19.go.id/wp-content/uploads/2020/03/Flyer-2020-coronavirus-masyarakat.jpg"
        },
      ]
    }
  },
  mounted(){
    this.moment()
  },
  methods: {
    moment: function(){
      return moment();
    }
  },
  filters: {
    moment: function(date){
      return moment(date).locale('id').format('D MMMM YYYY, h:mm:ss a');
    }
  }
}
</script>
