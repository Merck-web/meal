<template>
  <div class="detail_wrapper container">
    <button class="btn_back" @click="$router.go(-1)">Вернуться назад</button>
    <h2>Данные по записи</h2>
    <ul>
      <li> <b>postId данного комментария: </b> {{dataPost.postId}}</li>
      <li> <b>id данного комментария:     </b> {{dataPost.id}}</li>
      <li> <b>name данного комментария:   </b> {{dataPost.name}}</li>
      <li> <b>email данного комментария:  </b> {{dataPost.email}}</li>
      <li> <b>body данного комментария:   </b> {{dataPost.body}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return{
      dataPost: {}
    }
  },
  methods: {
    async getCommentById(id) {
      try {
        const response = await this.$api.posts.findById(id);
        this.dataPost = response.data
      }
      catch (e) {
        console.error(e)
        this.dataPost = {};
      }
    }
  },
  async created() {
    await this.getCommentById(this.$route.params.id)
  }
}
</script>

<style scoped lang="scss">
.detail_wrapper{
  .btn_back{
    background-color: #09bbff;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    color: white;
  }
}
</style>
