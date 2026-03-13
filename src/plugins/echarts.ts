// vue-echarts
import ECharts from 'vue-echarts'
import { use } from "echarts/core"
import {
    CanvasRenderer
  } from 'echarts/renderers'
  import {
    BarChart,PieChart,MapChart,EffectScatterChart,LineChart 
  } from 'echarts/charts'
  import {
    GridComponent,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    DatasetComponent,
    VisualMapComponent,
    GeoComponent,
    MarkPointComponent
  } from 'echarts/components'

  use([
    CanvasRenderer,
    BarChart,PieChart,MapChart,EffectScatterChart,LineChart,
    GridComponent,
    LegendComponent,
    TooltipComponent,
    TitleComponent,
    DatasetComponent,
    VisualMapComponent,
    GeoComponent,
    MarkPointComponent
  ])

//   注册一个全局组件 v-char
  export const registerEcharts= (app:any)=>{
    app.component('v-chart', ECharts)
  }