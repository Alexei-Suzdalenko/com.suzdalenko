<template>
    <main class="site-main" role="main" style="min-height: 500px; margin-top:30px;">
          <article class="post-37 page type-page status-publish hentry">
            <header class="entry-header" style="margin-bottom:30px;">
              <h1 class="entry-title">Радио</h1>
            </header>
            <div class="entry-content" v-for="(item, index) in listRadios" v-bind:key="index">
            <p><router-link class="list_authors" v-bind:to="'/radio/' + index">{{ item.name }} </router-link></p>
            </div>
          </article>
    </main>
</template>

<script>
export default{
    data(){
        return{
            listRadios: [],
            objectRadio: {},
            thisIdListRadios: ''
        }
    },
    methods: {
        seteatListRadios(x){
            console.log('x', x);
            for(let i = 0; i < x.name.length; i++){
                let currentObject = {};
                    currentObject.name = x.name[i];
                    currentObject.uri = x.uri[i];
                this.listRadios.push(currentObject);    
            }
        }
    },
    created(){
        fetch('https://android-soft.github.io/alarm_app/stations/rus.js')
        .then((res) => res.json())
        .then((res) => {
            this.seteatListRadios(res);
        });
    }
}
</script>
