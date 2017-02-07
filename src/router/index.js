import Vue from 'vue'
import Router from 'vue-router'
import VueResorce from 'vue-resource'

Vue.use(VueResorce);
Vue.use(Router)

import Photos from 'components/photos.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: Photos,
      component: Photos
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    }
  ]
})
