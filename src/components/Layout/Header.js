import React from 'react';
import { Box,Button,Flex,Text } from '@chakra-ui/react';

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
          左边的文字
        </Text>
        <Button colorScheme="orange">右边按钮</Button>
      </Flex>
      </Box>
    </Box>
  );
};

export default Header;