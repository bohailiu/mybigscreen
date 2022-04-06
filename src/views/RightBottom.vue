<template>
  <!-- 表格 -->
  <div>
    <h2>实时体验详情</h2>
    <div class="chart">
      <table  rules='rows'>
        <thead>
          <tr>
            <th>姓名</th>
            <th>使用设备</th>
            <th>成绩</th>
            <th>取证情况</th>
            <th>时间</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>张三</td>
            <td>AED</td>
            <td>已通过</td>
            <td>已取证</td>
            <td>09:04:18</td>
          </tr>
          <tr>
            <td>张三</td>
            <td>AED</td>
            <td>已通过</td>
            <td>已取证</td>
            <td>09:04:18</td>
          </tr>
          <tr>
            <td>张三</td>
            <td>AED</td>
            <td>已通过</td>
            <td>已取证</td>
            <td>09:04:18</td>
          </tr>
          <tr>
            <td>张三</td>
            <td>AED</td>
            <td>已通过</td>
            <td>已取证</td>
            <td>09:04:18</td>
          </tr>
          <tr>
            <td>张三</td>
            <td>AED</td>
            <td>已通过</td>
            <td>已取证</td>
            <td>09:04:18</td>
          </tr>
          <tr>
            <td>张三</td>
            <td>AED</td>
            <td>已通过</td>
            <td>已取证</td>
            <td>09:04:18</td>
          </tr>
          <tr>
            <td>张三</td>
            <td>AED</td>
            <td>已通过</td>
            <td>已取证</td>
            <td>09:04:18</td>
          </tr>
        </tbody>
      </table>
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

<style lang='less' scoped>
.chart{
  // border: red solid 1px;
  color: rgb(240, 234, 234);
  position: relative;
  table{
    width: 5.3875rem;
    height: 2.275rem;
    border: solid black 1px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    thead{
      color: yellow;
      background: rgba(1,176,223,.5);
      font-size: .1875rem;
      th{
        border:black 1px solid;
        width: 1.0775rem;
        height: .25rem;
      }
    }

    tbody{
      font-size: .175rem;
      background: rgba(1,176,223,.2),;
      tr{
        td{
          text-align:center;
          vertical-align:middle;
        }
      }
    }
  }
}
</style>