import React from 'react';
import { Box, Input, InputGroup, InputLeftElement, Flex, VStack, Text, Button } from '@chakra-ui/react';
import './mining.scss';
import BaseInfo from './components/info';
import ChartPanel from './components/ChartLine';
import DataTable from './components/machinesTable';
import '../common.scss';

const Mining = () => {

    return (
        <Box
            minH="100vh"
            w="full" // w=full
            p={8}
            position="relative"
        >
            <div>
                <BaseInfo />
            </div>
            <div style={{ marginBottom: '1.56rem' }}>
                <ChartPanel />
            </div>
            <div className='commonBg' style={{ marginBottom: '1.56rem' }}>
                <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
                    <Flex className='title'>MINING SERVERS11</Flex>
                    <Box className='table-wapper'>
                        <DataTable />
                    </Box>
                </Flex>
            </div>
            <div className='commonBg'>
                <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
                    <Flex className='title'>MINING SERVERS</Flex>
                    <Box className='table-wapper'>
                        <DataTable />
                    </Box>
                </Flex>
            </div>
        </Box>
    )
}

export default Mining;