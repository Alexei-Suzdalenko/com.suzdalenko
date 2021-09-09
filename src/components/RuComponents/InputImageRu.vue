<template>
      <article class="hentry" style="float: left">
        <header class="entry-header">
          <div class="entry-thumbnail">
              <img v-bind:src="objectInfo.itemVal" v-bind:alt="objectInfo.title" class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              v-on:click="handleSelectItem(objectInfo.key)"
              />
          </div>
          <br>
          <h4 class="entry-title"><a v-bind:href="'/detail/' + objectInfo.key">{{ objectInfo.title }}</a></h4>
          <br>
        </header>
      </article>
</template>

<script>
export default {
   props: {
       objectInfo: {
           type: Object
       }
   },
  data: function() {
     return {
       only: 1
    }
  },
  methods: {
    handleSelectItem(x){
     window.open('/detail/' + x)
    }
  }
}
</script>

<style scoped>
 h4, p{
   color: black;
 }
 .wp-post-image{
   display: block;
   width: 300px;
   height: 250px;
 }
</style>
