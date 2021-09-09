import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
// import store2 from './store/index2'
import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyApE5jUX0XWMIjCU1Kv7e2HFUW5xUzjSHU",
    authDomain: "russia-blog-russia.firebaseapp.com",
    databaseURL: "https://russia-blog-russia-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "russia-blog-russia",
    storageBucket: "russia-blog-russia.appspot.com",
    messagingSenderId: "29380007650",
    appId: "1:29380007650:web:cea34c1e4cd7872c86f0bb",
    measurementId: "G-RZ31YMC12S"
};
firebase.initializeApp(firebaseConfig);

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
