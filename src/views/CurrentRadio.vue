<template>
     <main class="site-main" role="main" style="min-height: 500px;"><br><br>
          <article class="post-37 page type-page status-publish hentry">
            <header class="entry-header">
              <h1 class="entry-title">{{ name }}</h1> 
            </header>
          </article>
          <div id="song"></div>
          <input type="button" value="Click" v-on:click="openWindowRadio">
    </main> 
</template>

<script>
var soundAlexeiSuzdalenko = document.createElement('audio');
export default{
    data(){
        return {
            name: '',
            url: '',
            isHttp: false
        }
    },
     created(){
        fetch('https://android-soft.github.io/alarm_app/stations/rus.js')
        .then((res) => res.json())
        .then((res) => {
            this.name = res.name[this.$route.params.id]
            this.url = res.uri[this.$route.params.id].trim()
            soundAlexeiSuzdalenko.src      =  this.url;
            document.title = this.name;
            document.getElementsByTagName('meta').namedItem('description').setAttribute('content', 'Радио ' + this.name)
            this.isHttp = this.url.includes('https');
        });
    },
    mounted(){
        soundAlexeiSuzdalenko.controls = 'controls';
        soundAlexeiSuzdalenko.type     = 'audio/mpeg';
        var song = document.getElementById('song');
        song.appendChild(soundAlexeiSuzdalenko);
    },
    methods: {
         openWindowRadio(){
             if(!this.isHttp){ 
                window.open(this.url);
             } else {
                 window.open('https://play.google.com/store/apps/details?id=russia.blog.russia');
             }
        }
    }
}
</script>
