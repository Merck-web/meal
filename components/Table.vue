<template>
  <div class="table_wrapper">
    <table>
      <thead>
        <tr>
          <th>
            ID
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              class="chevron"
              @click="sortedById = !sortedById"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
          </th>
          <th>Имя</th>
          <th>Почта</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in sortData"
          :key="item.id"
          @click="goToPage(item.id)"
        >
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.email}}</td>
        </tr>
      </tbody>
    </table>

    <Pagination
      :current-page="currentPage"
      :max-page="data.length / perPage"
      @changePage="changePage"
    />

  </div>
</template>

<script>

import Pagination from "./Pagination.vue";

export default {
  name: "Table",
  components: {Pagination},
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      startPaginateIndex: 0,
      endPaginateIndex: 10,
      currentPage: 1,
      perPage: 10,
      sortedById: false
    }
  },
  methods: {
    changePage(method){
      if (method === 'next' && this.currentPage < (this.data.length / this.perPage)){
        this.currentPage++
      }
      else if (method === 'prev' && this.currentPage > 1){
        this.currentPage--
      }
      else return
      this.endPaginateIndex = this.perPage * this.currentPage;
      this.startPaginateIndex = this.endPaginateIndex - this.perPage;
    },
    goToPage(id){
      this.$router.push(`detail/${id}`)
    }
  },
  computed: {
    sortData() {
      const data = this.data.slice(this.startPaginateIndex, this.endPaginateIndex);
      if (this.sortedById) data.sort((a,b) => b.id - a.id);
      return data
    }
  }
}
</script>

<style lang="scss" scoped>
.table_wrapper{
  table {
    width: 100%;
    border-spacing: 0;

    thead, tbody{
      tr{
        th:first-child, td:first-child{
          border-left: 1px solid black;
          background-color: #dcffff;
        }
      }
    }

    thead{
      tr th:first-child{
        border-radius: 10px 0 0;
      }
      tr th:last-child{
        border-radius: 0 10px 0 0;
      }
      tr th{
        border-right: 1px solid black;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
      }
    }

    tbody{
      tr:last-child td:first-child{
        border-radius: 0 0 0 10px;
      }
      tr:last-child td:last-child{
        border-radius: 0 0 10px 0;
      }
      tr td{
        border-right: 1px solid black;
        border-bottom: 1px solid black;
      }
      tr td:first-child{
        text-align: center;
      }
      td:nth-child(2){
        padding: 0 20px;
      }
    }
  }

  .chevron{
    cursor: pointer;
    width: 10px;
    height: 10px;
  }
}
</style>
