<template>
    <div>   
        <h5>Комментарии</h5>
        <div v-for="(com, index) in comments" v-bind:key="index">
            <h6>{{ com.name }}</h6>
            <p>{{ com.com }}</p>
        </div>

        <input type="text" v-model="username" placeholder="Имя" class="inputname" />
        <textarea type="text" v-model="commentario" placeholder="Комментарий" class="inputmessage"></textarea>
        <input type="button" v-on:click="SaveComment" value="Сохранить" class="savecomment" />
    </div>
</template>

<script>
import comment from '@/api/comment';
export default {
    data(){
        return{
            idPage: this.$route.params.id,
            comments: [],
            username: '', commentario: ''
        }
    },
    created(){
       this.GetMeListComment(this.idPage);
    },
    methods: {
        SaveComment(){
            if(window.localStorage.getItem(this.idPage) == 'yes'){
                alert('You have already commented on this article');
                return;
            }
            if(this.username.length > 3 && this.commentario.length > 3) {
                comment.saveThisComment(this.idPage, this.username, this.commentario).then(res => {
                    this.username = '';
                    this.commentario = '';
                    window.localStorage.setItem(this.idPage, 'yes');
                    this.GetMeListComment(this.idPage);
                });
            } else {
                alert('The name or comment is very short');
            }
        },
        GetMeListComment(id){
            comment.getMeThisList(id).then(res => {
                this.comments = res;
            });
        },
    }
}
</script>