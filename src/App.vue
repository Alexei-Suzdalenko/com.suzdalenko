<template>
  <div id="page">
    <div class="container">
      <HeaderHome />
      <router-view/>
    </div>
    <FooterHome />
  </div>
</template>

<script>


import HeaderHome from '@/components/HomeComponent/HeaderHome.vue';
import ArticleHome from '@/components/HomeComponent/ArticleHome.vue';
import FooterHome from '@/components/HomeComponent/FooterHome.vue';
export default {
  components: { HeaderHome, ArticleHome, FooterHome },
  created() {
    this.$store.commit('startLoadingHomePage'); 
    this.$store.commit('situate');              
  }
}

</script>
