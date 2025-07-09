import React from 'react';
import { Box,Button,Flex,Text } from '@chakra-ui/react';
import './pool.module.scss';

const PoolModuleData = () => {
    return (
          <Flex className='poolWapper'  flexDirection={"column"} style={{textAlign:'left'}}>
            <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" padding='0.9375rem'>
            Mining Pool Information
            </Text>
            <Box className='poolItem' padding='0.9375rem'>
            <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" fontSize='0.75rem' fontWeight='400'>
            Settlement Mode
              </Text>
              <Text className='poolDesc' fontSize='1rem' fontWeight='400'>
              PPS+/PPLNS
              </Text>
            </Box>

            <Box className='poolItem' padding='0.9375rem'>
            <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" fontSize='0.75rem' fontWeight='400'>
            Mining Pool Fee Rate
              </Text>
              <Text className='poolDesc' fontSize='1rem' fontWeight='400'>
              100%
              </Text>
            </Box>

            <Box className='poolItem' padding='0.9375rem'>
            <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" fontSize='0.75rem' fontWeight='400'>
            Transfer Time (UTC)
              </Text>
              <Text className='poolDesc' fontSize='1rem' fontWeight='400'>
              7:30 (UTC)
              </Text>
            </Box>

            <Box className='poolItem' padding='0.9375rem'>
            <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" fontSize='0.75rem' fontWeight='400'>
            Minimum Daily Payout
              </Text>
              <Text className='poolDesc' fontSize='1rem' fontWeight='400'>
              0.1 INI
              </Text>
            </Box>

            <Box className='poolItem' padding='0.9375rem'>
            <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" fontSize='0.75rem' fontWeight='400'>
            Mining Servers
              </Text>
              <Text className='poolDesc' fontSize='1rem' fontWeight='400'>
              stratum+tcp://inipool.pool.com:28888
              </Text>
              <Text className='poolDesc' fontSize='1rem' fontWeight='400'>
              stratum+tcp://inipool.pool.com:28889
              </Text>
            </Box>
          </Flex>
    )
}
export default PoolModuleData