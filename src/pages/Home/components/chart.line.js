import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Box, Heading } from '@chakra-ui/react';

const option = {
  title: {
    text: '销售数据',
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

export default function ChartPanel() {
  return (
    <Box p={6} bg="white" borderRadius="md" boxShadow="md">
      <Heading size="md" mb={4}>
        柱状图示例
      </Heading>
      <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
    </Box>
  );
}