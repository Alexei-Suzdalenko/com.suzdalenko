<template>
  <nav class="pagination">
    <a class="page-numbers" v-for="link in arrayLinks" v-bind:key="link"
       v-on:click="showListCurrentNews(link)">{{ link }}</a>
  </nav>
</template>

<script>
import firebase from "firebase";
var currentLinkArray = [ '<<-', '-->','   ', '<--', '->>' ];
var firstGetting  = null;
var secondGetting = null;
export default {
  data(){
      return{
      }
  },
  computed: {
    arrayLinks(){
      return currentLinkArray;
    }
  },
  created() {
      this.startPage();
    },
  methods: {
    startPage(){
      var currentStore = this.$store;
      var keys = [];
      firebase.database().ref('art')
          .orderByChild('time')
          .limitToLast(99).once('value', function(snapshot) {
        snapshot.forEach(function (childSnapshot) {
          secondGetting = childSnapshot.child('time').val();
          let itemKey = childSnapshot.key;
          let itemVal = childSnapshot.val().image;
          itemVal = itemVal.replace('http://www.site101.mir915bcf08b.comcb.info/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
          itemVal = itemVal.replace('https://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
          itemVal = itemVal.replace('http://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
          let key = itemKey.replaceAll(' ', '+');
          let currentInfo = {};
          currentInfo.itemKey = itemKey;
          currentInfo.itemVal = itemVal;
          currentInfo.key = key;
          currentInfo.title = childSnapshot.val().title;
          keys.push(currentInfo);
        });
        keys = keys.reverse();
        currentStore.commit('getFirst9News', {'listNews' : keys });
      });
    },

    showListCurrentNews(link){
      var currentStore = this.$store;
      var keys = [];

      if(link === '<<-'){ firstGetting = null;  //////////// +++
        firebase.database().ref('art')
            .orderByChild('time')
            .limitToFirst(99)
            .once('value', function(snapshot) {
          snapshot.forEach(function (childSnapshot) {
            firstGetting = childSnapshot.child('time').val();
            let itemKey = childSnapshot.key;
            let itemVal = childSnapshot.val().image;
            itemVal = itemVal.replace('http://www.site101.mir915bcf08b.comcb.info/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
            itemVal = itemVal.replace('https://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
            itemVal = itemVal.replace('http://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
            let key = itemKey.replaceAll(' ', '+');
            let currentInfo = {};
            currentInfo.itemKey = itemKey;
            currentInfo.itemVal = itemVal;
            currentInfo.key = key;
            currentInfo.title = childSnapshot.val().title;
            keys.push(currentInfo);
          });
          if(keys.length !== 0) currentStore.commit('getFirst9News', {'listNews' : keys });
        });
      }

      if(link === '-->'){
        firebase.database().ref('art')
            .startAt(firstGetting)
            .orderByChild('time')
            .limitToFirst(99).once('value', function(snapshot) {
          snapshot.forEach(function (childSnapshot) {
            firstGetting = childSnapshot.child('time').val();
            let itemKey = childSnapshot.key;
            let itemVal = childSnapshot.val().image;
            itemVal = itemVal.replace('http://www.site101.mir915bcf08b.comcb.info/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
            itemVal = itemVal.replace('https://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
            itemVal = itemVal.replace('http://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
            let key = itemKey.replaceAll(' ', '+');
            let currentInfo = {};
            currentInfo.itemKey = itemKey;
            currentInfo.itemVal = itemVal;
            currentInfo.key = key;
            currentInfo.title = childSnapshot.val().title;
            keys.push(currentInfo);
          });
            if(keys.length !== 0) currentStore.commit('getFirst9News', {'listNews' : keys });
        });
      }

      if(link === '<--'){
        firebase.database().ref('art')
            .endBefore(secondGetting)
            .orderByChild('time')
            .limitToLast(99)
            .once('value', function (snapshot) {
              snapshot.forEach(function (childSnapshot) {
                secondGetting = childSnapshot.child('time').val();
                let itemKey = childSnapshot.key;
                let itemVal = childSnapshot.val().image;
                itemVal = itemVal.replace('http://www.site101.mir915bcf08b.comcb.info/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
                itemVal = itemVal.replace('https://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
                itemVal = itemVal.replace('http://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
                let key = itemKey.replaceAll(' ', '+');
                let currentInfo = {};
                currentInfo.itemKey = itemKey;
                currentInfo.itemVal = itemVal;
                currentInfo.key = key;
                currentInfo.title = childSnapshot.val().title;
                keys.push(currentInfo);
              });
              console.log(keys)
              if(keys.length !== 0) currentStore.commit('getFirst9News', {'listNews' : keys });
            });
      }

      if(link === '->>') this.startPage()
    },

  }
}
</script>

<style scoped>
.page-numbers:hover{cursor: pointer;}
</style>


