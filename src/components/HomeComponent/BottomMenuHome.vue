<template>
  <section> 
  <main v-for="(listMenu, index) in listItemsMenu" v-bind:key="index">
    <div>
      <router-link v-bind:to="/detail/+listMenu.itemKey">
        <img v-bind:src="listMenu.itemVal" v-bind:alt="listMenu.title" class="image_menu">
        <span class="text_menu">{{ listMenu.title }}</span>
      </router-link>
    </div>
  </main>
  </section>
</template>

<script>
export default {
  data(){
    return{
      listItemsMenu: []
    }
  },
  computed: {
    listItemsMenu(){ return JSON.parse(window.localStorage.getItem('listNews')); }
  }
}
</script>

<style>
section{
  margin-top: 44px;
  margin-bottom: 44px;
}
.image_menu{
  width: 70px;
  height: 50px;
}
.text_menu{
  color: black;
  font-size: 18px;
  margin: 11px;
}
</style>