import React from 'react'
import ReactECharts from 'echarts-for-react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
import CommonBreadcrumb from 'components/CommonBreadcrumb'
import option from './option'

export default function ShadowChart () {
  const onChartReadyCallback = () => {

  }

  const EventsDict = () => {

  }

  return (
    <div>
      <CommonBreadcrumb arr={['图表', '渐变堆叠面积图']}/>
      <ReactEChartsCore
        echarts={echarts}
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        onChartReady={onChartReadyCallback}
        onEvents={EventsDict}
        opts={{}}
      />
      {/* <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        onChartReady={onChartReadyCallback}
        onEvents={EventsDict}
      /> */}
    </div>
  )
}
