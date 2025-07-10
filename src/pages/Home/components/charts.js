import React from 'react';
import { Box,Button,Flex,Text,Grid,GridItem, HStack } from '@chakra-ui/react';
import logo from '@/assets/logo.svg'
import PoolModuleData from './pool.module.js';
import ChartPanel from './chart.line.js';
import DataModule from './data.module.js';

const ChartData = () => {
    return (
    <Grid templateColumns="repeat(4, 1fr)" gap="6">
      <GridItem colSpan={3} className='commonBg'>
        <Box p={6} style={{background:'none'}} borderRadius="md" boxShadow="md">
          <Flex gap="4" justify="space-between">
            <Text className='chartTitle'>Mining Pool Hashrate</Text>
            <HStack gap={"0.625rem"}>
              <Text fontSize={"0.75rem"} style={{borderRadius: "0.3125rem",padding: "0.1875rem",background: "#363646"}}>近7天</Text>
              <Text fontSize={"0.75rem"} color={"#666"}>近30天</Text>
            </HStack>
          </Flex>
          <ChartPanel />
          <DataModule />
        </Box>
      </GridItem>
      <GridItem colSpan={1} className='commonBg'>
      <PoolModuleData />
      </GridItem>
    </Grid>
    )
}

export default ChartData;