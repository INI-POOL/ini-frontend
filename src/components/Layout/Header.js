import React from 'react';
import { Box,Button,Flex,Text } from '@chakra-ui/react';
import logo from '@/assets/logo.svg'

const Header = () => {
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
          <img src={logo} alt="logo" />
        </Text>
        {/* <Button colorScheme="orange">右边按钮</Button> */}
      </Flex>
      </Box>
    </Box>
  );
};

export default Header;