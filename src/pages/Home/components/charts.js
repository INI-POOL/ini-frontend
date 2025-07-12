import React from 'react';
import { Box,Button,Flex,Text,Grid,GridItem, HStack } from '@chakra-ui/react';
import logo from '@/assets/logo.svg'
import PoolModuleData from './pool.module.js';
import ChartPanel from './chart.line.js';
import DataModule from './data.module.js';

const ChartData = () => {
    return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap="6">
      <GridItem colSpan={{ base: 1, md: 3 }} className='commonBg'>
        <Box p={6} style={{background:'none'}} borderRadius="md" boxShadow="md" padding={{base:"0.4375rem 0.625rem",md:"0.9375rem"}}>
          <Flex direction={{ base: "column", sm: "row" }} gap="4" justify="space-between">
            <Text className='chartTitle'>Mining Pool Hashrate</Text>
            <HStack gap={"0.625rem"}          
            mt={{ base: 2, sm: 0 }}
            justify={{ base: "flex-start", sm: "flex-end" }}>
              <Text fontSize={"0.75rem"} style={{borderRadius: "0.3125rem",padding: "0.1875em",background: "#363646"}}>近7天</Text>
              <Text fontSize={"0.75rem"} color={"#666"}>近30天</Text>
            </HStack>
          </Flex>
          <ChartPanel />
          <DataModule />
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 1 }} className='commonBg'>
      <PoolModuleData />
      </GridItem>
    </Grid>
    )
}

export default ChartData;