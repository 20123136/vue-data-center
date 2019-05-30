<template>
  <div>
    <GithubLink class="githublink"/>
    <div class="hello">
      {{msg}}
    </div>
    <div id="chart1" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
// var echarts = require('echarts')
// import echarts from "echarts"
import GithubLink from './GithubLink'
export default {
  name: 'HelloWorld',
  components: {
    GithubLink,
  },
  data () {
    return {
      msg: '欢迎访问数据中心系统',
      echarts: require('echarts')
    }
  },
  methods: {
    _initCharts(){
      var myChart = this.echarts.init(document.getElementById('chart1'));
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  },
  mounted() {
    this._initCharts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .githublink{

  }
  .hello{
    color: #2c3e50;
    margin-top: 60px;
    text-align: center;
  }
</style>
