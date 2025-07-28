import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Box, Heading, Show } from '@chakra-ui/react';
import * as echarts from 'echarts';
import dayjs from "dayjs"; // 推荐使用 dayjs，轻量好用



export default function ChartPanel({ x_data, y_data }) {
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
      data: x_data||[],
      axisLabel: {
        color: '#858585',
        fontSize: 12,
        formatter: function (value) {
          return dayjs(Number(value*1000)).format("HH:mm");
        },
      },
      splitLine:{
        show:false
      }
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        const time = dayjs(Number(params[0].name)*1000).format("YYYY-MM-DD HH:mm:ss");
        const value = params[0].value;
        return `${time}<br/>data：${value}`;
      },
    },
    yAxis: {
      Show:false,
      splitLine:{
        show:false
      },
      axisLabel: {
        formatter: function (value) {
          if (value >= 1e9) return (value / 1e9).toFixed(2) + 'G';
          if (value >= 1e6) return (value / 1e6).toFixed(2) + 'M';
          if (value >= 1e3) return (value / 1e3).toFixed(2) + 'K';
          return value;
        }
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
        data: y_data||[],
      },
    ],
  };
  return (
    <Box p={6} style={{ background: 'none',width:"100%" }} borderRadius="md" boxShadow="md" >
      <ReactECharts option={option} style={{ width: '100%',background:'none' }} height={{base:"43px",md:"250px"}} />
    </Box>
  );
}
