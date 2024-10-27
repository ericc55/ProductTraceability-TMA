<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column label="">
        <el-table-column
          prop="date"
          label="时间"
          width="150">
        </el-table-column>
        <el-table-column label="地址">
          <el-table-column
            prop="province"
            label="都道府县"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址详细"
            width="300">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="company"
          label="企业名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="transportStatus"
          label="运输状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="freshStatus"
          label="保鲜状态"
          width="120">
        </el-table-column>
      </el-table-column>
    </el-table>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄',
          company: '公司A',
          transportStatus: '已发货',
          freshStatus: '良好'
        }, {
          date: '2016-05-02',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄',
          company: '公司B',
          transportStatus: '运输中',
          freshStatus: '良好'
        }, {
          date: '2016-05-04',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄',
          company: '公司C',
          transportStatus: '已到达',
          freshStatus: '良好'
        }, {
          date: '2016-05-01',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄',
          company: '公司D',
          transportStatus: '已发货',
          freshStatus: '需要注意'
        }, {
          date: '2016-05-08',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄',
          company: '公司E',
          transportStatus: '已发货',
          freshStatus: '良好'
        }, {
          date: '2016-05-06',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄',
          company: '公司F',
          transportStatus: '运输中',
          freshStatus: '良好'
        }, {
          date: '2016-05-07',
          province: '上海',
          address: '上海市普陀区金沙江路 1518 弄',
          company: '公司G',
          transportStatus: '已到达',
          freshStatus: '需要注意'
        }]
      }
    }
  }
  </script>
  