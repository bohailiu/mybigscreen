<template>
  <!-- 表格 -->
  <div>
    <h2>实时体验详情</h2>
    <div class="chart">
      <el-table :data="tableData">
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="use_equipment" label="使用设备">
        </el-table-column>
        <el-table-column prop="achievement" label="成绩"></el-table-column>
        <el-table-column prop="evidence" label="取证情况"></el-table-column>
        <el-table-column prop="times" label="时间"></el-table-column>
      </el-table>
    </div>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
export default {
  name: "RightBottom",
  data() {
    return {
      tableData: [
        {
          id:1,
          name:'张三',
          use_equipment:'AED',
          achievement:'已通过',
          evidence:'已取证',
          times:'09:04:18'
        },
        {
          id:2,
          name:'张三',
          use_equipment:'AED',
          achievement:'已通过',
          evidence:'已取证',
          times:'09:04:18'
        },
        {
          id:3,
          name:'张三',
          use_equipment:'AED',
          achievement:'已通过',
          evidence:'已取证',
          times:'09:04:18'
        },
        {
          id:4,
          name:'张三',
          use_equipment:'AED',
          achievement:'已通过',
          evidence:'已取证',
          times:'09:04:18'
        },
        {
          id:5,
          name:'张三',
          use_equipment:'AED',
          achievement:'已通过',
          evidence:'已取证',
          times:'09:04:18'
        },
        {
          id:6,
          name:'张三',
          use_equipment:'AED',
          achievement:'已通过',
          evidence:'已取证',
          times:'09:04:18'
        },
        {
          id:7,
          name:'张三',
          use_equipment:'AED',
          achievement:'已通过',
          evidence:'已取证',
          times:'09:04:18'
        },
      ],
    };
  },
};
</script>

<style>
.el-table{
  height:2.375rem ;
  margin-top: .3125rem;
}
</style>