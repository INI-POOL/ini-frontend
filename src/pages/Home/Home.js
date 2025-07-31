import React ,{useEffect, useState} from 'react';
import { Box, Flex, Text, Dialog } from '@chakra-ui/react';
// import SearchInput from '@/components/Layout/components/Search.js';
import SearchInput from './components/Search.js';
import DataTable from './components/table.js';
import ChartData from './components/charts.js';


import './home.scss';
import '../common.scss';
// import {Charts} from './components/charts';

import { poolApi } from '@/services/api';

const Home = () => {
  const [rewardList,setRewardList]= useState([]);
  // 调用登录接口
  const getRewardList = async () => {
    try {
      const response = await poolApi.getBlockReward();
      // console.log(response.data)
      if(response.success){
        setRewardList(response.data)
      }
      // 处理响应数据
    } catch (error) {
      // 处理错误
    }
  };
  useEffect(()=>{
    getRewardList()
  },[])
  return (
    <Box className='homoPage'>
      <div style={{ marginBottom: '1.56rem' }}>
        <SearchInput />
      </div>
      <div style={{ marginBottom: '1.56rem' }}>
        <ChartData />
      </div>

      <div className='commonBg' style={{ marginBottom: '1.56rem' }}>
        <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
        <Flex className='title' padding={{base:"0rem 0.9375rem",sm:"0rem 1.875rem"}}>
          <Text className='title'>MINING SERVERS</Text>
          </Flex>
          <Box className='table-wapper' gap={{base:"0.625rem"}} padding={{base:"0 0.9375rem"}}>
            <div className='table-content'>
             <DataTable data={rewardList} />
            </div>
          </Box>
        </Flex>
      </div>

    </Box>
  );
};

export default Home;
