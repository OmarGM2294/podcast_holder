import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: '#016fb9',
        secondary: '#b8c4bb',
      }
    }
  },
  icons: {
    iconfont: 'fa',
  }
});
