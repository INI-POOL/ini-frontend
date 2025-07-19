import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Box, Heading, Show } from '@chakra-ui/react';
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
  tooltip: {},
  xAxis: {
    boundaryGap: false,
    axisTick: {
      show: false,
    },
    data: ['2.3', '2.4', '2.5', '2.6', '2.7', '2.8'],
    axisLabel: {
      color: '#858585',
      fontSize: 12,
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
    <Box p={6} style={{ background: 'none',width:"100%" }} borderRadius="md" boxShadow="md" >
      <ReactECharts option={option} style={{ width: '100%',background:'none' }} height={{base:"43px",md:"250px"}} />
    </Box>
  );
}
