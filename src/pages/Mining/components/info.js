import React from 'react';
import { Grid, GridItem, IconButton } from "@chakra-ui/react"
import "./info.scss"
import wallet from '@/assets/img/wallet.svg';
// import wallet2 from 'src/assets/img/wallet.svg';


import { Box, Input, InputGroup, InputLeftElement, Flex, VStack, Text, Button } from '@chakra-ui/react';

const BaseInfo = () => {
    return (
        <div className="baseinfo" textAlign="left">
            <Flex textAlign="left">
                <Flex gap="0.625rem" flexDirection={{ base: "column", md: "row" }}>
                    <Text> 
                        <IconButton className='wallet-wapper'>
                        <img src={wallet} />
                    </IconButton>
                    </Text>
                    <Text className='value' fontSize={["0.875rem","1.25rem"]}>0x845550c855fa64c0f4239ca474f8bb5a125e428b</Text>
                </Flex>
            </Flex>
            <div textAlign="left" style={{width:"100%"}}>
                <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(7, 1fr)" }}
  gap={{ base: 4, md: 7 }} >
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle' fontSize={{ base: "0.75rem"}} style={{textAlign:"left"}}>Total(INI)</Text>
                            <Text className='basevalue'>9154.001152</Text>
                        </VStack>
                    </GridItem>
                    <GridItem><VStack className='baseItem'>
                        <Text className='baseTitle'>Total(INI)</Text>
                        <Text className='basevalue'>9154.001152</Text>
                    </VStack></GridItem>
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle'>Total(INI)</Text>
                            <Text className='basevalue'>9154.001152</Text>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle'>Total(INI)</Text>
                            <Text className='basevalue'>9154.001152</Text>
                        </VStack></GridItem>
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle'>Total(INI)</Text>
                            <Text className='basevalue'>9154.001152</Text>
                        </VStack></GridItem>
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle'>Total(INI)</Text>
                            <Text className='basevalue'>9154.001152</Text>
                        </VStack></GridItem>
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle'>Total(INI)</Text>
                            <Text className='basevalue'>9154.001152</Text>
                        </VStack></GridItem>
                </Grid>
            </div>
        </div>
        // <Box
        //     minH="100vh"
        //     w="full" // w=full
        //     p={8}
        //     position="relative"
        // >
        //     <Flex justify="space-between" align="start">
        //         <Box flex="1">
        //             <VStack
        //                 spacing={6}
        //                 align="center"
        //                 justify="center"
        //                 h="80vh"
        //             >
        //                12121
        //             </VStack>   
        //             </Box>
        //             </Flex>
        //             </Box>
    )
}

export default BaseInfo;


