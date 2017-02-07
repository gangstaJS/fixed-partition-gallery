import Vue from 'vue'
import Router from 'vue-router'
import VueResorce from 'vue-resource'

Vue.use(VueResorce);
Vue.use(Router)

import Hello from 'components/Hello'
import Photos from 'components/photos.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/photos',
      name: 'Photos',
      component: Photos
    }
  ]
})
