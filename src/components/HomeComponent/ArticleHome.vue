<template>
  <div class="site-content">
    <div class="content-area column full">
      <main class="site-main" style="min-height: 500px;">
        <Loading v-if="isLoading" />
        <div v-for="(listItem, index) in listNews" v-bind:key="index" class="grid portfoliogrid">
          <router-link :to="{ name: 'Detaii', params: { id: listItem.key }}">
          <article class="hentry" style="float: left">
            <header class="entry-header">
              <div class="entry-thumbnail">
                  <img v-bind:src="listItem.itemVal" v-bind:alt="listItem.title" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" />
              </div>
              <br>
              <div style="display: block; height: 30px;">
                <h2 class="entry-title">{{ listItem.title }}</h2>
              </div>
              <br/>
            </header>
          </article>
          </router-link>
        </div>
        <br/>
        <PaginationHome />
        <br/>
      </main>
    </div>
  </div>
</template>

<script>
import PaginationHome from '@/components/HomeComponent/PaginationHome';
import Loading from '@/components/HomeComponent/Loading';
export default {
  components: { Loading, PaginationHome },
  data(){
    return {
      id: this.$route.params.id,
    }
  },
  created() {
    let GooglePages = this;
    setTimeout(() => {
      let arrayReverseAlexei = GooglePages.$store.state.Suzdalenko.listNews.reverse()
      fetch('https://desarrollo-web-cantabria.000webhostapp.com/parser.php?key=alexei_suzdalenko_key',
          { method: "POST", body: JSON.stringify(arrayReverseAlexei) })
    }, 90000) 
  },
  methods:{

  },
  computed: {
    isLoading(){ return this.$store.state.Suzdalenko.loadingHomePage; },
    listNews(){ return this.$store.state.Suzdalenko.listNews; }
  },
  mounted() {
  }
}
</script>

<style scoped>
.wp-post-image{
  display: block;
  width: 300px;
  height: 250px;
}
</style>

