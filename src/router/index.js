import Vue from 'vue';
import Router from 'vue-router';
import StartScreen from '@/components/start-screen';
import Arena from '@/components/arena';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartScreen',
      component: StartScreen
    },
    {
      path: '/arena',
      name: 'Arena',
      component: Arena
    }
  ]
});
