<template>
    <span v-for="(listItem, index) in listAuthors" v-bind:key="index" class="articule_authors"    >
      <router-link v-bind:to="'/author/' + listItem.key" target="_blank">{{ listItem.name }}</router-link>
    </span>
</template>

<script>
export default {
  data() {
    return {
      listAuthors: [],
    };
  },
  beforeMount() {
    this.getListAuthors000WebHost();
  },
  methods: {
    getListAuthors000WebHost() {
      let currentContext = this;
      fetch("https://gosimplesoft.000webhostapp.com/")
        .then((res) => res.json())
        .then((res) => {
          currentContext.listAuthors = res;
        });
    },
  },
};
</script>

<style scoped>
.articule_authors, .articule_authors>a{
    display: inline-block;
    width: 33%;
    font-size: 11px;
}
@media only screen and (min-width: 1131px) {
 .articule_authors, .articule_authors>a{
    width: 25%;
 }
}
@media only screen and (max-width: 750px) {
  .articule_authors, .articule_authors>a{
    width: 50%;
    }
}
</style>