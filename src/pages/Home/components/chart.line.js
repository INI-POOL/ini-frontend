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
    data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00'],
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
      data: [50, 100, 180, 120, 130, 160],
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
      data: [30, 50, 42, 60, 20, 30],
    },
  ],
};

export default function ChartPanel() {
  return (
    // <Box p={6}  borderRadius="md" boxShadow="md" padding={{base:"0.4375rem 0.625rem",md:"0.9375rem"}}>
    <Box p={6} borderRadius="md" boxShadow="md" padding={{base:"0",md:"0"}}>
    <ReactECharts option={option} style={{ height: '300px', width: '100%' }} />
    </Box>
  );
}