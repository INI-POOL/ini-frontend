import React, { useState,useEffect } from 'react';
import { Box, Button, Flex, Text, Grid, GridItem, HStack, Badge } from '@chakra-ui/react';
import logo from '@/assets/logo.svg'
import PoolModuleData from './pool.module.js';
import ChartPanel from './chart.line.js';
import DataChartPanel from './7d.chart.line.js';
import DataModule from './data.module.js';
import { poolApi } from '@/services/api';

const ChartData = () => {
  const [selected, setSelected] = useState('24H'); // 默认选中 "24H"
  const [poolData,setPoolData]= useState([]);
  const [poolRewardX,setPoolRewardX]= useState([]);
  const [poolRewardData,setPoolRewardData]= useState([]);
  // const options = ['24H', '7Day'];
  const options = []
  // 调用矿池基本数据接口
  const pool_data = async (values) => {
    try {
      const response = await poolApi.getPoolStats(values);
      if(response.success){
        setPoolData(response.data)
      }
      // 处理响应数据
    } catch (error) {
      // 处理错误
    }
  };
  // 调用图表接口
  const pool_chart_data = async (values) => {
    try {
      const response = await poolApi.getPerReward(values);
      if(response.success){
        let x_data=[];
        let y_data=[];
        response.data.forEach(element => {
          x_data.push(element.recordedAt)
          y_data.push(element.rewardPerMhash)
        });
        setPoolRewardX(x_data)
        setPoolRewardData(y_data)
        // setPoolRewardData(response.data)
      }
      // 处理响应数据
    } catch (error) {
      // 处理错误
    }
  };
  
  useEffect(() => {
    pool_data();
    pool_chart_data();
  }, []);

  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap="6">
      <GridItem colSpan={{ base: 1, md: 3 }} className='commonBg'>
        <Box p={6} style={{ background: 'none' }} borderRadius="md" boxShadow="md" padding={{ base: "0.4375rem 0.625rem", md: "0.9375rem" }}>
          <Flex direction={{ base: "row", sm: "row" }} gap="4" justify="space-between">
            <Flex gap={{ base: '0.5rem' }} direction={{ base: 'column' }} fontSize={{ base: "0.75rem", sm: "0.875rem" }}>
              <Text className='chartTitle'>
                {/* Mining Pool Hashrate */}
                Real-time Eamings (Per 1MH/s)
              </Text>
              {/* <Text style={{ color: "#FFF" }} fontSize={{ base: "1.5rem", sm: "1.875rem" }} fontWeight={700}>182.01 G</Text> */}
            </Flex>
            <HStack gap={"0.625rem"}
              mt={{ base: 0, sm: 0 }}
              alignItems={{ base: "flex-start" }}
              marginRight={{ base: "0rem", sm: "0.625rem" }}
              justify={{ base: "flex-start", sm: "flex-end" }}>
              {/* <Badge fontSize={{ base: "0.75rem" }} color={"#fff"} style={{ borderRadius: "0.3125rem", padding: "0.1875em", background: "#363646" }}>24H</Badge>
              <Badge fontSize={{ base: "0.75rem" }} color={"#666"} padding={{ base: "0.1875em" }}  >7Day</Badge> */}
              {options.map((option) => (
                <Badge
                  key={option}
                  fontSize={{ base: "0.75rem" }}
                  color={selected === option ? "#fff" : "#666"}
                  style={{
                    borderRadius: "0.3125rem",
                    padding: "0.1875em",
                    background: selected === option ? "#363646" : "transparent",
                    cursor: "pointer"
                  }}
                  onClick={() => setSelected(option)}
                >
                  {option}
                </Badge>
              ))}
            </HStack>
          </Flex>
          {selected === '24H' ? (
            <ChartPanel x_data={poolRewardX} y_data={poolRewardData}/>
          ) : (
            <DataChartPanel />
          )}
          <DataModule data={poolData}/>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 1 }} className='commonBg'>

        <PoolModuleData data={poolData}/>

      </GridItem>
    </Grid>
  )
}

export default ChartData;