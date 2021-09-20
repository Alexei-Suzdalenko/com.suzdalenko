<template>
  <main class="site-main" role="main" style="min-height: 500px; margin-top: 30px;">
    <article class="post-37 page type-page status-publish hentry">
      <header class="entry-header" style="margin-bottom: 30px;">
        <h1 class="entry-title"><a class="auth_title" href="/authors" target="_blank">Автор</a></h1>
      </header>
      <div class="entry-content">
        <p v-for="(author, index) in listAuthors" v-bind:key="index">
          <router-link class="list_authors" v-bind:to="/author/ + listAuthorsKeys[index]">{{ author.name }}</router-link>
        </p>
      </div>
    </article>
  </main>
</template>
<script>
import firebase from "firebase";
let authorsResponse = ""
export default {
  data(){
    return { listAuthorsKeys: [], listAuthors: [], shortNameAuthors: [] }
  },
  created(){
    this.getAndPutDataToServerFromFirebase();
  },
  methods: {
    getAndPutDataToServerFromFirebase(){
      let currentEnviromentData = this;
      let arrayAuthors = []; let keys = []; let currentEnviroment = this;
      firebase.database().ref('author')
          .orderByChild('name')
          .once('value', function(snapshot) {
            snapshot.forEach(function (childSnapshot) {
              keys.push(childSnapshot.key)
              arrayAuthors.push(childSnapshot.val())
            });
            currentEnviroment.listAuthorsKeys = keys;
            currentEnviroment.listAuthors = arrayAuthors;
            currentEnviromentData.putDataTo000WebhostServer();
          });
    },
    putDataTo000WebhostServer(){
       let alexeiSuzdalenko = this;
       setTimeout(() => {
          for(let i = 0; i < alexeiSuzdalenko.listAuthors.length; i++){
              let currentAuthor = {};
             currentAuthor.key = alexeiSuzdalenko.listAuthorsKeys[i];
             currentAuthor.name = alexeiSuzdalenko.listAuthors[i].name.split(' ')[1] ;
             alexeiSuzdalenko.shortNameAuthors.push(currentAuthor)
          }
          let arrayReverseAlexei = alexeiSuzdalenko.$store.state.Suzdalenko.listNews.reverse()
          fetch('https://gosimplesoft.000webhostapp.com?key=alexei_suzdalenko_key',{ method: "POST", body: JSON.stringify(
            alexeiSuzdalenko.shortNameAuthors
          ) })
        }, 90000) 
    }
  }
}
</script>