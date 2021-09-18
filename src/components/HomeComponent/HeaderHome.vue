<template>
  <header class="site-header">
    <div class="site-branding">
      <h4 class="site-title"><a href="/" rel="home" v-on:click="resetWindowLocalStorage">Skrepetski</a></h4>
      <h1 class="site-description"><a target="_blank" href="https://play.google.com/store/apps/details?id=russia.blog.russia"> Новости которые мы заслужили</a></h1>
    </div>
    <nav id="site-navigation" class="main-navigation">
      <button class="menu-toggle" v-on:click="showHiddenMenu" id="menu_title">Меню</button>
      <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
      <div class="menu-menu-1-container">
        <ul id="menu-menu-1" class="menu" v-on:click="hiddenMiMenu" >
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/last">Последнее</router-link></li>
          <li><router-link to="/authors">Автор</router-link></li>
          <li><router-link to="/radio-all">Радио</router-link></li>
          <li><router-link to="/contact">Контакт</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    resetWindowLocalStorage(){
      window.localStorage.clear();
      window.location.reload();
      return false;
    },
    showHiddenMenu(){
      let miData = document.getElementById('menu-menu-1').style.display;
      if( !(miData) || miData == 'none' ){
        document.getElementById('menu-menu-1').style.display = 'block';
        return;
      }
      document.getElementById('menu-menu-1').style.display = 'none';
    },
    hiddenMiMenu(){
     if( document.getElementById('menu-menu-1').style.display == 'block'){
       document.getElementById('menu-menu-1').style.display = 'none';
     }
    },
  },
}
</script>