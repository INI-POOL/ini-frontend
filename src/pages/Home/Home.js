import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
// import SearchInput from '../components/search';
import SearchInput from './components/Search.js';

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

      <Box
        // maxWidth="1440px"
        mx="auto"
        px={{ base: "0", md: "2.5rem", lg: "7.5rem" }}
        position="relative"
        className='commonBg'
      >
        图表数据11
      </Box>

      <Box
        mx="auto"
        px={{ base: "0", md: "2.5rem", lg: "7.5rem" }}
        position="relative"
        className='commonBg'
      >
        图表数据22
      </Box>
      
    </Box>
  );
};

export default  Home;
