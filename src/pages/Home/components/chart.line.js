import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Box, Heading } from '@chakra-ui/react';

import * as echarts from 'echarts';

const option = {
  title: {
    text: '',
  },
  grid:{
    left:0,
    right:0,
    top:0,
    bottom:'10%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line'
    }
  },
  xAxis: {
    data: ['2.6', '2.7', '2.8', '2.9', '2.10', '2.11'],
    boundaryGap: false,
    axisLabel: {
      color: '#858585',
      fontSize: 10,

    },
    splitLine:{
      show:false
    }
  },
  yAxis: {
    Show:false,
    splitLine:{
      show:false
    }
  },
  series: [
    {
      name: '',
      type: 'line',
      smooth: true,
      // symbol: 'none',        // ❗️隐藏数据点圆圈
      areaStyle: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      lineStyle: {
        color: '#0E9CFF' // #0E9CFF 设置线颜色（波线颜色）
      },
      areaStyle: {
        // 顶部到底部渐变
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(14, 156, 255, 0.2)' // 顶部颜色
          },
          {
            offset: 1,
            color: 'rgba(0, 191, 255, 0)' // 底部透明
          }
        ])
      },
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

export default function ChartPanel() {
  return (
    <Box p={6}  borderRadius="md" boxShadow="md" padding={{base:"0.4375rem 0.625rem",md:"0.9375rem"}}>
      <ReactECharts option={option} style={{ height: '250px', width: '100%' }} />
    </Box>
  );
}