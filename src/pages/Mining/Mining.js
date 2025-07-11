import React from 'react';
import { Box, Flex, Text, Stack, Badge } from '@chakra-ui/react';
import BaseInfo from './components/info';
import ChartPanel from './components/ChartLine';
import DataTable from './components/machinesTable';
import '@/pages/common.scss';
import './mining.scss';

const Mining = () => {

    return (
        <Box
            minH="100vh"
            w="full" // w=full
            p={8}
            position="relative"
            className='mining'

        >
            <div>
                <BaseInfo />
            </div>
            <div style={{ marginBottom: '1.56rem' }} marginTop={{base:"1.25rem",sm:"3.75rem"}} className='chart-wapper'>
                <Text>24H  Hashrate</Text>
                <Flex style={{width:"100%"}}>
                <ChartPanel />
                </Flex>
            </div>
            <div className='commonBg' py={{ base: '0' }} px={{ base: '0' }} style={{ marginBottom: '1.56rem' }}>
                <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
                    <Flex className='title'>
                        <Text>
                        Mining Machine
                        </Text>
                        
                        <Stack direction="row" spacing={'0.625rem'} className='filter'>
                            <Badge className='check'>All (295)</Badge>
                            <Badge className='uncheck' >Online (283)</Badge>
                            <Badge className='uncheck red'>Offline (12)</Badge>
                        </Stack>

                    </Flex>
                    <Box className='table-wapper'>
                        <div className='table-content'>
                        <DataTable />
                        </div>
                    </Box>
                </Flex>
            </div>
            <div className='commonBg'  py={{ base: '0' }} px={{ base: '0' }} style={{ marginBottom: '1.56rem' }}>
                <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
                    <Flex className='title'>Billing List</Flex>
                    <Box className='table-wapper'>
                    <div className='table-content'>
                        <DataTable />
                    </div>
                    </Box>
                </Flex>
            </div>
        </Box>
    )
}

export default Mining;