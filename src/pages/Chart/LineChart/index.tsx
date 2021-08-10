import React from 'react'
import ReactECharts from 'echarts-for-react';
import CommonBreadcrumb from 'components/CommonBreadcrumb'
import option from './option'
import style from '../index.module.less'
import { useChangeLang } from 'hooks';

export default function LineChart () {
  const { t } = useChangeLang();
  const onChartReadyCallback = () => {

  }

  const EventsDict = (e: MouseEvent) => {

  }

  return (
    <div>
      <CommonBreadcrumb arr={[
        t('chart.lineChart.menu'),
        t('chart.lineChart.subMenu')
      ]}/>
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
