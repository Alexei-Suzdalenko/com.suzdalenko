<template>
  <div class="column column-width-one-half">
    <h4>Ваш комментарий, пожелание...</h4>
    <form class="wpcf7" id="contactform">
      <div class="form">
        <p><input type="text" name="name" placeholder="Ваше имя" v-model="name"></p>
        <p><input type="text" name="email" placeholder="Ваш сайт, социальная сеть (https://suzdalenko.com)" v-model="web"></p>
        <p><textarea name="comment" rows="3" placeholder="Комментарий" v-model="message"></textarea></p>
        <input type="button" class="clearfix btn" value="Отправить" v-on:click="send">
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    send(){
      if(this.name.length < 3 || this.web.length < 3 || this.message.length < 3) return;
      let message = {};
      message.name = this.name; message.web = this.web; message.message = this.message;
      firebase.firestore().collection("messages").doc().set(message).then((res) => {
        alert('Your message is added');
        location.reload();
        this.name = ''; this.web = ''; this.message = '';
      })
    }
  }
}
</script>