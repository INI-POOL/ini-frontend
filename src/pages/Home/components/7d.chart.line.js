import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Box, Heading } from '@chakra-ui/react';

import * as echarts from 'echarts';

const option = {
  title: {
    text: '',
  },
  grid:{
    left:'0.8%',
    right:'0.9%',
    // top:0,
    top:'1%',
    bottom:'10%',
    containLabel: true  // ✅ 确保标签在 grid 内部
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line'
    }
  },
  xAxis: {
    type: 'category',
    // show:false,
    axisTick: {
      show: false,
    },
    splitLine:{
      show:false
    },
    data: ['2.6', '2.7', '2.8', '2.9', '2.10', '2.11'],
    boundaryGap: false,
    axisLabel: {
      color: '#858585',
      fontSize: 10,
    }
  },
  yAxis: {
    type: 'value',
    axisTick: {
      show: false,
    },
    // Show:false,
    splitLine:{
      show:false
    },
    axisLabel: {
      show:false,
      color: '#858585',
      fontSize: 10,
    }
  },
  series: [
    {
      name: 'Network Power',
      type: 'line',
      lineStyle: {
        type: 'dashed',  // ✅ 设置虚线
        width: 2,
        color: '#212121'
      },
      smooth: true,
      // symbol: 'none',        // ❗️隐藏数据点圆圈

      areaStyle: {
        // 顶部到底部渐变
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(103, 78, 87, 0.4)'  // #674E57 顶部颜色
          },
          {
            offset: 1,
            color: 'rgba(103, 78, 87, 0)' // #000000 底部透明
          }
        ])
      },
      data: [50, 200, 360, 100, 100, 200],
    },
    {
      name: 'Mining Pool',
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
      data: [10, 40, 72, 40, 60, 70],
    },
  ],
};

export default function DataChartPanel() {
  return (
    // <Box p={6}  borderRadius="md" boxShadow="md" padding={{base:"0.4375rem 0.625rem",md:"0.9375rem"}}>
    <Box p={6} borderRadius="md" boxShadow="md" padding={{base:"0",md:"0"}}>
    <ReactECharts option={option} style={{ height: '250px', width: '100%' }} />
    </Box>
  );
}