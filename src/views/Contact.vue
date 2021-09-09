<template>
  <div id="content" class="site-content">
    <div id="primary" class="content-area column full">
      <main id="main" class="site-main">

        <article class="hentry">
          <header class="entry-header">
            <h1 class="entry-title">Контакт</h1>
          </header>
          <div class="entry-content">
            <p><img style="border:10px solid #f4f5f6" src="https://avatars.githubusercontent.com/u/75933673?v=4" alt="Alexei Suzdalenko" width="430" class="alignright"></p>
            <p>Здравствуй, меня зовут Алексей Суздаленко, я занимаюсь веб разработкой в области <b>Vue Js</b> + <b>PHP</b> (Laravel, Symfony) приложений, а также приложений <b>Aндроид</b> (Java, Kotlin, Flutter).</p>
            <p>Работаю как в России, так и за ее пределами.</p>
            <p>Примером моей работы является данный сайт, который работает на следующих технологиях: frontend - <b>Vue Js</b>, backend - <b>PHP</b>, парсер новостей - <b>Kotlin</b>.</p>
            <p>Новости на этом сайте публикует <b>парсер новостей</b> (<b>искусственный интеллект</b>), я часто не согласен с его подборкой новостей,
              но это его ответственность и право; Таким образом <b>я не несу ответственности за правдивость и достоверность</b> новостей на этом сайте,
              потому как было сказано ранее, новости парсит из глобальной сети интернет и публикует <b>ИИ</b> на базе Kotlin.</p>
            <h2 style="font-family: 'Herr Von Muellerhoff';color:#ccc;font-weight:300;">Suzdalenko Alexei</h2>

            <div class="wpcmsdev-columns">
              <ComentContact />
              <div class="column column-width-one-half">
                <a target="_blank" href="https://t.me/suzdalenko"><h4>Telegram Suzdalenko</h4></a>
                <p><a href="mailto:desarrollo.web.cantabria.penagos@gmail.com">Или просто напишите мне на почту <h4>desarrollo.web.cantabria.penagos@gmail.com</h4></a></p>
                <p>Вы всегда можете обратится ко мне за консультацией, это бесплатно.</p>
                <p>Понедельник – Пятница: 9am to 5pm<br> Суббота: 10am to 2pm<br> Воскресенье: Закрыто</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <section style="margin-bottom:33px">
        <p v-for="message in listMessages">{{ message.name }} <a target="_blank" v-bind:href="message.web">{{ message.web }}</a> <br> {{ message.message }}</p>
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



























