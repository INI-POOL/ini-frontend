import React from 'react';
import { Box } from '@chakra-ui/react';
import './home.scss';

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
      <Box
        maxWidth="1440px"
        mx="auto"
        px={{ base: "0", md: "2.5rem", lg: "7.5rem" }}
        position="relative"
      >
        <Box 
          width="100%"
          px={{ base: "1rem", md: "0" }}
        >
          body~content
         
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
