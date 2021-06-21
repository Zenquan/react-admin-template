import React from 'react'
import ReactECharts from 'echarts-for-react';
import CommonBreadcrumb from 'components/CommonBreadcrumb'
import option from './option'
import style from '../index.module.less'

export default function PieChart() {
  const onChartReadyCallback = () => {

  }

  const EventsDict = (e: MouseEvent) => {

  }

  return (
    <div>
      <CommonBreadcrumb arr={['图表', '基础南丁格尔玫瑰图']}/>
      <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        onChartReady={onChartReadyCallback}
        // @ts-ignore
        onEvents={(e: MouseEvent) => EventsDict(e)}
        className={style['shadow-chart']}
      />
    </div>
  )
}
