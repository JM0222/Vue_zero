<template>
  <div>
    <table-component :table-data="tableData" />
    <div>{{turn}}님의 턴입니다</div>
  </div>
</template>

<script>
  import TableComponent from './TableComponent'
  export default {
    components: {  // components 등록
      TableComponent,
    },
    data() {
      return {
        tableData: [  // 2차원 배열
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        turn: 'O',
      };
    },
    computed: {
     
      
    },
    methods: {
     
      },
      
    mounted() {
      
    },
    beforeDestroy() {

    },
    watch: {

    },
    
  };
</script>

<style>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>