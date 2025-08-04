import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Box, Heading } from '@chakra-ui/react';

import * as echarts from 'echarts';
import dayjs from "dayjs"; // 推荐使用 dayjs，轻量好用

// const DataModule = (props) => {
const ChartPanel = ({ x_data, y_data }) => {
  let option = {
    title: {
      text: '',
    },
    grid:{
      left:'2%',
      right:'2%',
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
      axisLine: {
        show: false,  // 👈 隐藏X轴坐标轴线
      },
      data: x_data||[],
      boundaryGap: false,
      // axisLabel: {
      //   color: '#858585',
      //   fontSize: 10,
      // }
      axisLabel: {
        color: '#858585',
        fontSize: 10,
        formatter: function (value) {
          return dayjs(Number(value)*1000).format("HH:mm");
        },
      },
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: '#24252b', // 设置背景颜色，可使用 rgba 透明色
      borderColor: '#24252b', 
      textStyle: {
        color: '#CBCDDE', // #fff 👈 更亮的文字颜色
        fontSize: 10
      },                 // 边框颜色
      borderWidth: 0.5,    // 边框宽度
      extraCssText: 'text-align: left;', // 👈 关键设置
      formatter: function (params) {
        const time = dayjs(Number(params[0].name)*1000).format("YYYY-MM-DD HH:mm:ss");
        const value = params[0].value;
        return `${time}<br>${value} INI`;
      },
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
        name: 'Network Power',
        type: 'line',
        lineStyle: {
          type: 'dashed',  // ✅ 设置虚线
          width: 2,
          color: '#212121'
        },
        // smooth: true,
        showSymbol: false,   // 关闭所有数据点圆圈，视觉更清爽
        sampling: 'average',  // 对数据进行抽样（可选项：'average' | 'max' | 'min' | 'sum'）
        // symbol: 'none',        // ❗️隐藏数据点圆圈
        // animation: false,   // 禁用动画，防止视觉先后差异
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
        data: y_data||[],
      }
    ]
  };
  
  return (
    // <Box p={6}  borderRadius="md" boxShadow="md" padding={{base:"0.4375rem 0.625rem",md:"0.9375rem"}}>
    <Box  borderRadius="md" boxShadow="md" padding={{base:"0",md:"0"}}>
    <ReactECharts option={option} style={{ height: '300px', width: '100%' }} />
    </Box>
  );
}

export default ChartPanel