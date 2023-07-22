<template>
  <div class="container">
    <Table
      :data="dataTable"
    />
  </div>
</template>

<script>
import Table from "../components/Table.vue";

export default {
  name: 'IndexPage',
  components: {Table},
  data() {
    return{
      dataTable: []
    }
  },
  methods: {
    async getComments() {
      try {
        const response = await this.$api.posts.all();
        this.dataTable = response.data
      }
      catch (e) {
        console.error(e)
        this.dataTable = [];
      }
    }
  },
  async created() {
    await this.getComments()
  }
}
</script>
