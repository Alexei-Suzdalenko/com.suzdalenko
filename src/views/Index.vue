<template>
  <div class="site-content">
    <div class="content-area column full">
      <main class="site-main" style="min-height: 500px;">
        <Loading  v-if="isLoading" />
        <div class="grid portfoliogrid"> 
          <InputImage v-for="currentInfo in listObjectInfo" v-bind:key="currentInfo.id" v-bind:objectInfo="currentInfo" />
        </div>
        <br/>
      </main>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/HomeComponent/Loading';
import InputImage from '@/components/RuComponents/InputImageRu';
export default {
  components: { Loading, InputImage },
  data() {
        return {
          listObjectInfo: [],
          title: 'Веб разработка под ключ',
          description : 'Разработка приложений Symfony, Laravel, Vue Js, Fluter, Kotlin'
        };
    },
    mounted() {
      this.init();
    },
    computed: {
      isLoading(){
        return this.listObjectInfo.length <= 0;
      }
    },
    methods: {
      init(){
          fetch('https://desarrollo-web-cantabria.000webhostapp.com/parser.php').then(response => response.json()).then(json => {
            console.log(json)
            this.listObjectInfo = json;
          });
      }
    }
}
</script>


