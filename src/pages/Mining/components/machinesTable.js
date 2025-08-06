
import { Table, Text, Image, Flex,Clipboard } from "@chakra-ui/react"
import './machinesTable.scss'
import Paid from "@/assets/img/paid.svg"
import Unpaid from "@/assets/img/unpaid.svg"
import React, { useState } from 'react';
import { formatDate,formatWalletAddress } from '@/utils/common.ts'
import { toaster } from "@/components/ui/toaster"

const DataTable = ({reward}) => {
  const [hovered, setHovered] = useState(false);
  // const [hovered2, setHovered2] = useState(false);
  const handleCopy = () => {
    // alert('Copy successfully')
    toaster.create({
      title: 'Copy completed',
      type: 'success',
    });
  }
  return (

    <Table.ScrollArea borderWidth="0px" rounded="md" height="300px" className="table-scroll-container">
      <Table.Root size="sm" stickyHeader variant="unstyled">
        <Table.Header>
          <Table.Row bg="#060811" py="0.9375rem">
            {/* <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem"  textAlign="center" fontSize="0.875rem">
              <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Luck Value</Text>
            </Table.ColumnHeader> */}
            <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Time</Text></Table.ColumnHeader>
            <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Reward (INI)</Text></Table.ColumnHeader>
            <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Transaction Hash</Text></Table.ColumnHeader>
            <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Status</Text></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {reward?.pay_details?.map((item,index) => (
            <Table.Row key={index} bg="#060811" py="0.9375rem" style={{ borderTop: "0.3125rem solid #060811", background: "rgba(255, 255, 255, 0.02)" }}>
              <Table.Cell textAlign="center"  borderWidth="0px" fontSize="0.875rem">{formatDate(item.date)}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.amount}</Table.Cell>

              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">
              {/* <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem" onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleCopy} gap={"0.625rem"} direction={"row"} alignItems={"flex-start"}> */}
  <Flex  cursor={'pointer'} borderRadius={"0.3125rem"}  padding={"0.1875rem 0.5rem"} fontWeight='400'   alignItems="center"           // 垂直居中
  justifyContent="center"  >
<text cursor={'pointer'} onClick={()=>{
   window.open('https://iniscan.com/tx/'+item.tx_hash, '_blank');
}}>{formatWalletAddress(item.tx_hash,5,16)}</text>
  
            <Clipboard.Root
              value={item.tx_hash}
              onClick={handleCopy}
              >
              <Clipboard.Trigger asChild>
                <Clipboard.Indicator display="inline-block" marginLeft={"0.35rem"} marginTop={"0.25rem"} />
              </Clipboard.Trigger>
            </Clipboard.Root>
            </Flex>
                </Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">
                <Flex alignItems="center" justifyContent="center" gap="0.3125rem" direction="row">
                  <Image src={item.tx_hash != "" ? Paid : Unpaid} alt="" boxSize="1rem" />
                  <Text color={item.tx_hash != "" ? "" : "red"}>{item.tx_hash != "" ? "Paid" : "Unpaid"}</Text>
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
}


export default DataTable;
