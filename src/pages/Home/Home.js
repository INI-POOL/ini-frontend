import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
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
    <Box className='homoPage'>
      <div style={{ marginBottom: '1.56rem' }}>
        <SearchInput />
      </div>
      <div style={{ marginBottom: '1.56rem' }}>
        <ChartData />
      </div>

      <div className='commonBg' style={{ marginBottom: '1.56rem' }}>
        <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
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
