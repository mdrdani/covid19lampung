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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      items: [
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
        }
      ]
    };
  },
  components: {}
};
</script>
