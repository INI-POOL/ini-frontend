import React from 'react';
import { Box,Button,Flex,Text } from '@chakra-ui/react';
import logo from '@/assets/logo.svg'

const ChartData = () => {
    return (
        <Flex justify="space-between" align="center" p={4} borderRadius="md">
          <div className='commonBg'>222</div>
          <Flex className='commonBg poolWapper'  flexDirection={"column"}>
            <Text className='poolTitle'>
            Mining Pool Information
            </Text>
            <Box>
              
            </Box>

          </Flex>
            {/* <Text fontSize="lg" fontWeight="bold" color="orange.700">
            <img src={logo} alt="logo" />
            </Text>
            <Button colorScheme="orange">右边按钮</Button> */}
        </Flex>
    )
}

export default ChartData;