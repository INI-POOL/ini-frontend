import React from 'react';
import { Box,Button,Flex,Text,Grid,GridItem, HStack } from '@chakra-ui/react';
import logo from '@/assets/logo.svg'
import PoolModuleData from './pool.module.js';
import ChartPanel from './chart.line.js';

const ChartData = () => {
    return (
    <Grid templateColumns="repeat(4, 1fr)" gap="6">
      <GridItem colSpan={3} className='commonBg'>
        <Box p={6} style={{background:'none'}} borderRadius="md" boxShadow="md">
          <Flex gap="4" justify="space-between">
            <Text>Mining Pool Hashrate</Text>
            <HStack>
              <Text>近7天</Text>
              <Text>近30天</Text>
              <Text>近90天</Text>
            </HStack>
          </Flex>
          <ChartPanel />
        </Box>
      </GridItem>
      <GridItem colSpan={1} className='commonBg'>
      <PoolModuleData />
      </GridItem>
    </Grid>
    )
}

export default ChartData;