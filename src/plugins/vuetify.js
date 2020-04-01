import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import { firestorePlugin } from 'vuefire';


Vue.use(firestorePlugin)
Vue.use(Chartkick.use(Chart))
Vue.use(Vuetify);
Vue.use(VueMoment, {
    moment,
})


export default new Vuetify({
});
