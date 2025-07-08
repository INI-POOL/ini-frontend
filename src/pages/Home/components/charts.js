import React from 'react';
import { Box,Button,Flex,Text,Grid,GridItem } from '@chakra-ui/react';
import logo from '@/assets/logo.svg'
import PoolModuleData from './pool.module.js';

const ChartData = () => {
    return (
    <Grid templateColumns="repeat(4, 1fr)" gap="6">
      <GridItem colSpan={3} className='commonBg'>
        图表
      </GridItem>
      <GridItem colSpan={1} className='commonBg'>
      <PoolModuleData />
      </GridItem>
    </Grid>
    )
}

export default ChartData;