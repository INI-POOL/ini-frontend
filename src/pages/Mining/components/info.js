import React from 'react';
import { Grid, GridItem, IconButton } from "@chakra-ui/react"
import "./info.scss"
import wallet from '@/assets/img/wallet.svg';
// import wallet2 from 'src/assets/img/wallet.svg';


import { Box, Input, InputGroup, InputLeftElement, Flex, VStack, Text, Button } from '@chakra-ui/react';

const BaseInfo = ({walletaddress,reward,machinesinfo}) => {
    return (
        <div className="baseinfo " textAlign="left">
            <Flex textAlign="left">
                <Flex gap="0.625rem" flexDirection={{ base: "column", md: "row" }}>
                    <Text> 
                        <IconButton className='wallet-wapper'>
                        <img src={wallet} />
                    </IconButton>
                    </Text>
                    <Text className='value' fontSize={["0.875rem","1.25rem"]}>{walletaddress}</Text>
                </Flex>
            </Flex>
            <div textAlign="left" style={{width:"100%"}}>
                <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(7, 1fr)" }}
  gap={{ base: 4, md: 7 }} >
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle' fontSize={{ base: "0.75rem"}} style={{textAlign:"left"}}>Total Reward(INI)</Text>
                            <Text className='basevalue'>{reward.total_reward}</Text>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle' fontSize={{ base: "0.75rem"}} style={{textAlign:"left"}}>Total hashrate</Text>
                            <Text className='basevalue'>{machinesinfo.total_hashrate}</Text>
                        </VStack>
                    </GridItem>
                    <GridItem><VStack className='baseItem'>
                        <Text className='baseTitle'>valid Share</Text>
                        <Text className='basevalue'>{machinesinfo.valid_shares}</Text>
                    </VStack>
                    </GridItem>

                    <GridItem>
                        <VStack className='baseItem'>
                        <Text className='baseTitle'>Invalid Shares</Text>
                        <Text className='basevalue'>{machinesinfo.invalid_shares}</Text>
                    </VStack>
                    </GridItem>
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle'>Stale Share</Text>
                            <Text className='basevalue'>{machinesinfo.stale_shares}</Text>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle'>Pending Balance</Text>
                            <Text className='basevalue'>{machinesinfo.pending_balance}</Text>
                        </VStack></GridItem>
                    {/* <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle'>Real-time Hashrate</Text>
                            <Text className='basevalue'>9154.001152</Text>
                        </VStack></GridItem>
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle'>Average Daily Hashrate</Text>
                            <Text className='basevalue'>9154.001152</Text>
                        </VStack></GridItem>
                    <GridItem>
                        <VStack className='baseItem'>
                            <Text className='baseTitle'>Mining Machines</Text>
                            <Text className='basevalue'>9154.001152</Text>
                        </VStack></GridItem> */}
                </Grid>
            </div>
        </div>
    )
}

export default BaseInfo;


