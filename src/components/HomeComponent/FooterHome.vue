<template>
  <footer id="colophon" class="site-footer">
    
      
        <a target="blank" href="/"><h6 style="font-family: 'Herr Von Muellerhoff';color: #ccc;font-weight:300;text-align: center;margin-bottom:0;margin-top:0;line-height:1.4;font-size: 46px;">Semyon Skrepetski</h6></a><br>
        <FooterAuthor /> <br>
        <br>
        <a target="blank" href="/">&copy; Google - Cемен Скрепецкий - {{ currentData }}</a>
  
  </footer>
</template>

<script>
import FooterAuthor from '@/components/HomeComponent/FooterAuthor';
export default {
  components: {FooterAuthor},
  data(){
    return {
      currentData : ''
    }
  },
  created() {
    setInterval(this.getMiCurrentTime, 1100);
  },
  methods:{
    getMiCurrentTime(){
      var currentdate = new Date();
      let minutes = currentdate.getMinutes();
      if(minutes < 10) minutes = '0'+minutes;
      let second = currentdate.getSeconds();
      if(second < 10) second = '0'+second;
      var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + minutes + ":" + second;
      this.currentData = datetime
    }
  }
}
</script>