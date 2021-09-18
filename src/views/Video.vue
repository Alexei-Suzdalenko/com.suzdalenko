<template>
    <iframe width="989" height="556" v-bind:src="'https://www.youtube.com/embed/'+currentUrl" title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
</template>
<script>
export default {
    data(){
        return {
            currentUrl :  this.$route.params.id
        }
    },
    created() {
      
        
    },
    methods: {
        
    }
}
</script>
