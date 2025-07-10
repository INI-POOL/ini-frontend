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
        >
            <div>
                <BaseInfo />
            </div>
            <div style={{ marginBottom: '1.56rem' }}>
                <ChartPanel />
            </div>
            <div className='commonBg' style={{ marginBottom: '1.56rem' }}>
                <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
                    <Flex className='title'>
                        <Text>
                        Mining Machine
                        </Text>
                        
                        <Stack direction="row" spacing={'0.625rem'}>
                            <Badge fontSize={'0.75rem'}>All (295)</Badge>
                            <Badge fontSize={'0.75rem'} colorPalette="green">Success</Badge>
                            <Badge fontSize={'0.75rem'} colorPalette="red">Removed</Badge>
                        </Stack>

                    </Flex>
                    <Box className='table-wapper'>
                        <DataTable />
                    </Box>
                </Flex>
            </div>
            <div className='commonBg'>
                <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
                    <Flex className='title'>Billing List</Flex>
                    <Box className='table-wapper'>
                        <DataTable />
                    </Box>
                </Flex>
            </div>
        </Box>
    )
}

export default Mining;