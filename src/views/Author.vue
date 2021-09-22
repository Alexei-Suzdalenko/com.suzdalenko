 <template>
    <main class="site-main" role="main" style="min-height: 500px; margin-top: 30px;">
      <article class="post-37 page type-page status-publish hentry">
        <header class="entry-header" style="margin-bottom: 30px;">
          <h1 class="entry-title"><router-link v-bind:to="/author/ + this.$route.params.id" target="_blank">{{ nameAuthor }}</router-link></h1>
        </header>
        <div class="entry-content">
          <p v-for="(article, index) in listArticles" v-bind:key="index">
            <router-link class="list_authors" v-bind:to="/detail/ + listArticleKeys[index]">{{ article.title }}</router-link>
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
        return { nameAuthor: "", listArticleKeys: [], listArticles: [] }
      },
      created(){
        this.getNameAthor();
        this.getLiteraturaByAuthor();
      },
      methods: {
        getNameAthor(){
          let currentEnventory = this;
          let slug = this.$route.params.id;
          firebase.database().ref('author/' + slug).once('value').then(snapshot => {
              document.title = snapshot.val().name;
              currentEnventory.nameAuthor = snapshot.val().name;
              document.getElementsByTagName('meta').namedItem('description').setAttribute('content', 'Автор, журналист ' + snapshot.val().name)
          });
        },
        getLiteraturaByAuthor(){
          let slug = this.$route.params.id;
          let arrayAuthors = []; let keys = []; let currentEnviroment = this;
          firebase.database().ref('art')
             .orderByChild('autor_slug')
             .equalTo(slug)
              .once('value', function(snapshot) {
                snapshot.forEach(function (childSnapshot) {
                  keys.push(childSnapshot.key)
                  arrayAuthors.push(childSnapshot.val())
                });
                currentEnviroment.listArticleKeys = keys;
                currentEnviroment.listArticles = arrayAuthors;
              });
        }
      }
    }
  </script>
