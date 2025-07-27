
import { Table, Text, Image, Badge, Flex } from "@chakra-ui/react"
import './machinesTable.scss'
import Paid from "@/assets/img/paid.svg"
import Unpaid from "@/assets/img/unpaid.svg"
import { formatDate } from '@/utils/common.ts'

const DataTable = ({reward}) => {
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
            <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Transaction ID</Text></Table.ColumnHeader>

            {/* <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Status</Text></Table.ColumnHeader> */}

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {reward?.pay_details?.map((item) => (
            <Table.Row key={item.data} bg="#060811" py="0.9375rem" style={{ borderTop: "0.3125rem solid #060811", background: "rgba(255, 255, 255, 0.02)" }}>
              <Table.Cell textAlign="center"  borderWidth="0px" fontSize="0.875rem">{formatDate(item.date)}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.amount}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.tx_hash}</Table.Cell>
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


const items = [
  { id: "773.9%", name: "464817", category: "07-03 11:00", price: 999.991233, status: "Paid" },
  { id: "773.9%", name: "464817", category: "07-03 11:00", price: 649.991233, status: "Unpaid" },
  { id: "773.9%", name: "464817", category: "07-03 11:00", price: 150.001233, status: "Unpaid" },
  { id: "773.9%", name: "464817", category: "07-03 11:00", price: 799.991233, status: "Unpaid" },
  { id: "773.9%", name: "464817", category: "07-03 11:00", price: 199.991233, status: "Paid" },
]

export default DataTable;
