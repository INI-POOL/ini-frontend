import React from 'react';
import { Box, Flex,Text } from '@chakra-ui/react';
// import SearchInput from '../components/search';
import SearchInput from './components/Search.js';
import DataTable from './components/table.js';
import ChartData from './components/charts.js';

import './home.scss';
// import {Charts} from './components/charts';

import { userApi } from '@/services/api';

const Home = () => {

  // 调用登录接口
  const login = async (values) => {
    try {
      const response = await userApi.login(values);
      // 处理响应数据
    } catch (error) {
      // 处理错误
    }
  };
  return (
    <Box className='homoPage minH'>
      <Box
        // maxWidth="1440px"
        mx="auto"
        style={{marginBottom:'1.19rem'}}
        px={{ base: "0", md: "2.5rem", lg: "7.5rem" }}
        position="relative"
      >
        {/* <Box 
          width="100%"
          px={{ base: "1rem", md: "0" }}
          className='searchBox'
        >
          搜索
        </Box> */}
        {/* <SearchInput /> */}
      </Box>

      {/* <Flex align="center" justify="center"> */}
      {/* <Charts /> */}
      {/* </Flex> */}
      <div   style={{marginBottom:'1.56rem'}}>
        <ChartData />
      </div>
    
      <div className='commonBg'  style={{marginBottom:'1.56rem'}}>
        <Flex py={{base:'1.25rem'}} style={{gap: '0.625rem'}} flexDirection={"column"}>
          <Text className='title'>MINING SERVERS</Text>
          <Box className='table-wapper'>
            <DataTable />
          </Box>
        </Flex>
      </div>

    </Box>
  );
};

export default Home;
