import React from 'react';
import { Box,Link,Flex,Text } from '@chakra-ui/react';
import logo from '@/assets/logo.svg'
import SearchInput from './components/Search';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  // 判断是否为首页
  const isHomePage = location.pathname === '/';

  return (
    <Box as="header"  py={4} boxShadow="sm" height={"7rem"} bg="black"> 
      <Box maxWidth="container.xl" mx="auto" px={4}>
        {/* Header content */}
        <Flex 
        justify="space-between" 
        align="center" 
        p={4} 
        borderRadius="md"
      >
        <Text fontSize="lg" fontWeight="bold" color="orange.700">
          <Link href="/"> <img src={logo} alt="logo" /></Link>
        </Text>
        <Flex justify="flex-end" style={{minWidth:"40%"}} v-if={isHomePage} >
          {
            <SearchInput />
          }
        </Flex>
    
      </Flex>
      </Box>
    </Box>
  );
};

export default Header;