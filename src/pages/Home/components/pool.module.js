"use client"
import React, { useState } from 'react';
import { Box, Badge, Flex, Text, IconButton, Clipboard, Button } from '@chakra-ui/react';
import './pool.module.scss';
import { useNavigate } from 'react-router-dom';
import tutorial from '@/assets/img/tutorial.svg'
import { toaster } from "@/components/ui/toaster"


const PoolModuleData = (props) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  // const [hovered2, setHovered2] = useState(false);
  const handleCopy = () => {
    
    // alert('Copy successfully')
    // toaster.create({
    //   title: `Copy successfully`,
    //   type: 'success',
    // })
    toaster.create({
      title: 'Copy completed',
      type: 'success',
    });
    // console.log("Copy completed")

  }

  return (
    <Flex className='poolWapper' height={'100%'} flexDirection={"column"} style={{ textAlign: 'left' }}>
      <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" padding='0.9375rem'>
        Mining Pool Information
      </Text>

      <Box className='poolItem' padding='0.9375rem'>
        <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" fontSize='0.75rem' fontWeight='400'>
          Settlement Mode
        </Text>
        <Text className='poolDesc' fontSize='1rem' fontWeight='400'>
          {/* PPS+/ */}
          PPLNS
        </Text>
      </Box>

      <Box className='poolItem' padding='0.9375rem'>
        <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" fontSize='0.75rem' fontWeight='400'>
          Mining Pool Fee Rate
        </Text>
        <Text className='poolDesc' fontSize='1rem' fontWeight='400'>
          {props.data.feeRate}%
        </Text>
      </Box>

      <Box className='poolItem' padding='0.9375rem'>
        <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" fontSize='0.75rem' fontWeight='400'>
          Transfer Time (UTC)
        </Text>
        <Text className='poolDesc' fontSize='1rem' fontWeight='400'>
          {/* 7:30 (UTC) */}
          {props.data.paymentTime}
        </Text>
      </Box>

      <Box className='poolItem' padding='0.9375rem'>
        <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" fontSize='0.75rem' fontWeight='400'>
          Minimum Daily Payout
        </Text>
        <Text className='poolDesc' fontSize='1rem' fontWeight='400'>
          {/* 0.1 */}
          {props.data.minPayValue} INI
        </Text>
      </Box>

      <Flex className='poolItem' mt="auto" padding='0.9375rem' direction={"column"} gap={"1.25rem"}>
        <Flex direction={"row"} gap={"0.5rem"}>
          <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text" fontSize='0.75rem' fontWeight='400'>
            Mining Servers
          </Text>
          <IconButton backgroundColor={'linear-gradient(90deg, #C9BFFF 0%, #AC9DFB 100%)'}
            className="search-btn" height={{ base: "1.1875rem" }}
            width={{ base: "4rem" }} onClick={() => navigate('/')}>
            <Flex padding={"0.125rem 0.1875rem"}>
              <img src={tutorial} height={"0.9375rem"} />
              <Text fontSize={"0.75rem"} color={"#000"}>Tutorial</Text>
            </Flex>
          </IconButton>
        </Flex>
        <Flex gap={"0.625rem"} direction={"column"}>
          {/* <Clipboard textToCopy="stratum+tcp://inipool.pool.com:28888">
            <Text className='poolDesc' onClick={handleCopy} cursor={'pointer'} borderRadius={"0.3125rem"} fontSize='0.75rem' padding={"0.1875rem"} fontWeight='400' background="#252525">
              stratum+tcp://inipool.pool.com:28888
            </Text>
          </Clipboard> */}
          <Flex
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            gap={"0.625rem"} direction={"row"} alignItems={"flex-start"}>
            <Clipboard.Root
             onClick={handleCopy}
              value={`${props.data.poolServer}:${props.data.poolPort}`}>
              <Clipboard.Trigger asChild>
                <Flex className='poolDesc'  cursor={'pointer'} borderRadius={"0.3125rem"} fontSize='0.75rem' padding={"0.1875rem 0.5rem"} fontWeight='400' background="#252525">
                  {/* stratum+tcp://inipool.pool.com:28888 */}
                  {props.data.poolServer || "--"}:{props.data.poolPort||""}

                  {hovered && (
                    <Clipboard.Indicator display="inline-block" marginLeft={0.125} />
                  )}
                </Flex>
              </Clipboard.Trigger>
            </Clipboard.Root>
          </Flex>
          {/* <Badge display="inline-block" >stratum+tcp://inipool.pool.com:28888</Badge> */}
          {/* <Flex
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
            onClick={handleCopy} gap={"0.625rem"} direction={"row"} alignItems={"flex-start"}>
            <Clipboard.Root
              value="stratum+tcp://inipool.pool.com:28889">
              <Clipboard.Trigger asChild>
                <Text className='poolDesc' onClick={handleCopy} cursor={'pointer'} borderRadius={"0.3125rem"} fontSize='0.75rem' padding={"0.1875rem"} fontWeight='400' background="#252525">
                  stratum+tcp://inipool.pool.com:28889

                  {hovered2 && (
                    <Clipboard.Indicator display="inline-block" marginLeft={0.125} />

                  )}
                </Text>
              </Clipboard.Trigger>
            </Clipboard.Root>
          </Flex> */}
        </Flex>

      </Flex>
    </Flex>
  )
}
export default PoolModuleData