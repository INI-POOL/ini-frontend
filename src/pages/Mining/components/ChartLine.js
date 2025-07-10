import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Box, Heading, Show } from '@chakra-ui/react';
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
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
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
            color: 'rgba(14, 156, 255, 0.6)' // 顶部颜色
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
    <Box p={6} style={{ background: 'none',width:"100%" }} borderRadius="md" boxShadow="md">
      {/* <Heading size="md" mb={4} textAlign="left">
        柱状图示例
      </Heading> */}
      <ReactECharts option={option} style={{ height: '400px', width: '100%',background:'none' }} />
    </Box>
  );
}