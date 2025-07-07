import React from 'react';
import { Box, Input, InputGroup, InputLeftElement, Flex,VStack,Text,Button } from '@chakra-ui/react';
import './mining.scss';

const data = [
  { name: '1月', value: 400 },
  { name: '2月', value: 300 },
  { name: '3月', value: 600 },
  { name: '4月', value: 800 },
  { name: '5月', value: 500 },
  { name: '6月', value: 700 },
];

const Mining = () => {


    return (
        <Box
            bg="orange.500"
            minH="100vh"
            w="full" // w=full
            p={8}
            position="relative"
        >
            <Flex justify="space-between" align="start">
                <Box flex="1">
                    <VStack
                        spacing={6}
                        align="center"
                        justify="center"
                        h="80vh"
                    >
                        <Text
                            fontSize="6xl"
                            fontWeight="bold"
                            color="white"
                            textAlign="center"
                        >
                           Unlock a whole new mining experience
                        </Text>
                        <Button
                            size="lg"
                            colorScheme="blue"
                            mt={4}
                        >
                            开始挖矿
                        </Button>
                        <Text
                            textAlign="center"
                            className='text-desc'
                        >
                            Yates Pool, incubated by InitVerse, is the exclusive operator of the A/B mining pools for the INI token and plays a key role in maintaining the computing power ecosystem of the INIChain network.
                        </Text>
                    </VStack>
                </Box>
               
            </Flex>
        </Box>
    )
}

export default Mining;