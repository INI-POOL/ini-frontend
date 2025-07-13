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
            <Box style={{ marginBottom: '1.56rem' }} marginTop={{base:"1.25rem",sm:"3.75rem"}} className='chart-wapper'>
                <Text fontSize={{ base: '0.75rem', sm: '0.875rem' }}>24H  Hashrate</Text>
                <Flex style={{width:"100%"}}>
                <ChartPanel />
                </Flex>
            </Box>
            <div className='commonBg' py={{ base: '0' }} px={{ base: '0' }} style={{ marginBottom: '1.56rem' }}>
                <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
                    <Flex className='title' flexDirection={{base:"column",sm:"row"}} gap={{base:"0.625rem",sm:"1.875rem"}} padding={{base:"0rem 0.9375rem",sm:"0rem 1.875rem"}}>
                        <Text style={{textAlign:'left'}}>
                        Mining Machine
                        </Text>
                        
                        <Stack direction="row" spacing={'0.625rem'} className='filter'>
                            <Badge className='check'>All (295)</Badge>
                            <Badge className='uncheck' >Online (283)</Badge>
                            <Badge className='uncheck red'>Offline (12)</Badge>
                        </Stack>

                    </Flex>
                    <Box className='table-wapper' gap={{base:"0.625rem"}} padding={{base:"0 0.9375rem"}}>
                        <div className='table-content'>
                        <DataTable />
                        </div>
                    </Box>
                </Flex>
            </div>
            <div className='commonBg'  py={{ base: '0' }} px={{ base: '0' }} style={{ marginBottom: '1.56rem' }}>
                <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
                    <Flex className='title' padding={{base:"0rem 0.9375rem",sm:"0rem 1.875rem"}}>
                    <Text style={{textAlign:'left'}}>Billing List</Text>
                    </Flex>
                    <Box className='table-wapper'  gap={{base:"0.625rem"}} padding={{base:"0 0.9375rem"}}>
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