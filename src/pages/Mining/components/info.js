import React from 'react';
import { Grid, GridItem } from "@chakra-ui/react"
import "./info.scss"

// const Demo = () => {
//   return (
//     <Grid templateColumns="repeat(3, 1fr)" gap="6">
//       <DecorativeBox h="20" />
//       <DecorativeBox h="20" />
//       <DecorativeBox h="20" />
//     </Grid>
//   )
// }

import { Box, Input, InputGroup, InputLeftElement, Flex, VStack, Text, Button } from '@chakra-ui/react';

const BaseInfo = () => {
    return (
        <div className="baseinfo" textAlign="left">
            <Box textAlign="left">
                0x845550c855fa64c0f4239ca474f8bb5a125e428b
            </Box>
            <Box textAlign="left">
                <Grid templateColumns="repeat(7, 1fr)" gap="7">
                    <GridItem>
                        <VStack gap="0.5625rem">
                            <Text className='title'>Total(INI)</Text>
                            <Text className='value'>9154.001152</Text>
                        </VStack>
                    </GridItem>
                    <GridItem><VStack gap="0.5625rem">
                        <Text className='title'>Total(INI)</Text>
                        <Text className='value'>9154.001152</Text>
                    </VStack></GridItem>
                    <GridItem>
                        <VStack gap="0.5625rem">
                            <Text className='title'>Total(INI)</Text>
                            <Text className='value'>9154.001152</Text>
                        </VStack>
                    </GridItem>
                    <GridItem>                  
                        <VStack gap="0.5625rem">
                        <Text className='title'>Total(INI)</Text>
                        <Text className='value'>9154.001152</Text>
                    </VStack></GridItem>
                    <GridItem>                  
                        <VStack gap="0.5625rem">
                        <Text className='title'>Total(INI)</Text>
                        <Text className='value'>9154.001152</Text>
                    </VStack></GridItem>
                    <GridItem>                  
                        <VStack gap="0.5625rem">
                        <Text className='title'>Total(INI)</Text>
                        <Text className='value'>9154.001152</Text>
                    </VStack></GridItem>
                    <GridItem>                  
                        <VStack gap="0.5625rem">
                        <Text className='title'>Total(INI)</Text>
                        <Text className='value'>9154.001152</Text>
                    </VStack></GridItem>
                </Grid>
            </Box>
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


