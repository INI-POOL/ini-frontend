import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Box, Heading } from '@chakra-ui/react';

const option = {
  title: {
    text: '',
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],

  },
  yAxis: {},
  series: [
    {
      name: '',
      type: 'line',
      areaStyle: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

export default function ChartPanel() {
  return (
    <Box p={6} style={{ background: 'none' }} borderRadius="md" boxShadow="md">
      <Heading size="md" mb={4} textAlign="left">
        柱状图示例
      </Heading>
      <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
    </Box>
  );
}