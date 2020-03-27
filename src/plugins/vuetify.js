import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';

Vue.use(Vuetify);
Vue.use(VueMoment, {
    moment,
})

export default new Vuetify({
});
