import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
// http://46.180.137.182:8080/e.reading/1940/N44_mart.pdf
const routes = [{
    path: '/',
    name: 'Index',
    component: () => import('../views/Index'),
    meta: { title: 'Семен Скрепецкий' }
  }, {
    path: '/last',
    name: 'Home',
    component: Home,
    meta: { title: 'Последние события | Семен Скрепецкий' }
  }, {
    path: '/authors',
    component: () => import('../views/Authors.vue'), meta: { title: 'Автор' }
  }, {
    path: '/author/:id',
    component: () => import('../views/Author.vue'), meta: { title: 'Автор' }
  },{
    path: '/radio-all', 
    component: () => import('../views/RadioAll.vue'), meta: { title: 'Радио России' }
  }, {
    path: '/radio/:id', component: () => import('../views/CurrentRadio.vue')
  },
   {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: { title: 'Контакт, Семен Скрепецкий' }
  },
   {
    path: '/detail/:id',
    name: 'Detaii',
    component: () => import('../views/Detail.vue'),
  },  {
    path: '/video/:id',
    name: 'Video',
    component: () => import('../views/Video.vue'),
  },  {
    path: '/:catchAll(.*)', redirect: '/'
  }];

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes });

router.beforeEach((to) => {
  if(to.meta.title){
    document.title = to.meta.title;
    document.getElementsByTagName('meta').namedItem('description').setAttribute('content', to.meta.title)
  }
});

export default router;
