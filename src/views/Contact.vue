<template>
  <div id="content" class="site-content">
    <div id="primary" class="content-area column full">
      <main id="main" class="site-main">

        <article class="hentry">
          <header class="entry-header">
            <h1 class="entry-title">Контакт</h1>
          </header>
          <div class="entry-content">
            <p><img style="border:10px solid #f4f5f6" src="https://yt3.ggpht.com/aCqXs7ByzALfmUhGgyNeMRfyTjwEakMffpIDWzwPA3NTezvqdX9nRRC4HIf4frvVYWE_f0_h=s900-c-k-c0x00ffffff-no-rj" alt="Семен Скрепецкий" width="430" class="alignright"></p>
            <p>Здравствуй, меня зовут Семен Скрепецкий, я художник, музыкант, писатель.</p>
            <p>Работаю как в России, так и за ее пределами.</p>
            <h2 style="font-family: 'Herr Von Muellerhoff';color:#ccc;font-weight:300;">Semyon Skrepetski</h2>

            <div class="wpcmsdev-columns">
              <ComentContact />
              <div class="column column-width-one-half">
                <p><a href="https://www.youtube.com/channel/UCHbNxnZIGbsrb-1vpExUqPw" target="_blank"><h4>YouTube Семён Скрепецкий</h4></a></p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <section style="margin-bottom:33px">
        <p v-for="message in listMessages" v-bind:key="message">{{ message.name }} <a target="_blank" v-bind:href="message.web">{{ message.web }}</a> <br> {{ message.message }}</p>
      </section>
    </div>
  </div>
</template>
<script>
import ComentContact from "../components/ContactComponent/ComentContact";
import firebase from "firebase";
export default {
  components: {ComentContact},
  data(){
    return {
      listMessages : []
    }
  },
  created() {
    let contextA = this;

    firebase.firestore().collection("messages")
        .orderBy(firebase.firestore.FieldPath.documentId())
        .get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        contextA.listMessages.push(doc.data())
      });
    })



  }
}
</script>



























