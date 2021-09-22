<template>
  <article class="portfolio hentry">
    <header class="entry-header">
      <router-link target="_blank" v-bind:to="'/detail/' + keyKey"><h1 class="entry-title">{{ pageTitle }}</h1></router-link>
      <div class="entry-thumbnail" style="text-align: center;">
        <router-link target="_blank" v-bind:to="'/detail/' + keyKey">
          <img width="800" height="533" v-bind:src="imageSrc" v-bind:alt="pageTitle" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" />
        </router-link>
      </div>
    </header>
    <div class="entry-content">
     <p id="description"></p>
     <comment /> 
    </div>
  </article>
  <bottomMenuHome />
</template>
<script>
import bottomMenuHome from '@/components/HomeComponent/BottomMenuHome';
import comment from '@/components/ComentComponent/Comment';
import firebase from 'firebase';
export default {
  components: { bottomMenuHome, comment },
  data(){
    return{
      pageTitle : '',
      description: '...',
      imageSrc: '/img/icons/loading.gif'
    }
  },
  computed: {
    keyKey(){
      window.scroll(0,0)
      let currentRoute = this.$route.params.id;

      let thisContext = this
      firebase.database().ref().child("art/" + currentRoute).on('value', (snapshot) => {
        if(!snapshot.val()) window.location.href = '/';
        let itemVal = snapshot.val().image;    thisContext.pageTitle = snapshot.val().title
        document.title = snapshot.val().title
        itemVal = itemVal.replace('http://www.site101.mir915bcf08b.comcb.info/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
        itemVal = itemVal.replace('https://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
        itemVal = itemVal.replace('http://www.kasparov.ru/', 'https://alexandr-shop.000webhostapp.com/images/?img=');
        thisContext.imageSrc = itemVal;
      });

      firebase.firestore().collection("art").doc(currentRoute).get().then(doc => {
        document.getElementById('description').innerHTML = doc.data().description;
        let currentDescription = doc.data().description.substring(0, 121);
        currentDescription = currentDescription.replace('<br>', '');
        document.getElementsByTagName('meta').namedItem('description').setAttribute('content',currentDescription )
      });

      return currentRoute
    },
  }
}
</script>

<style scoped>
h1{
  margin-top: 22px;
  margin-bottom: 22px;
}
#description{
  color: black;
  font-size: 18px;
  font-weight: 500;
}
</style>