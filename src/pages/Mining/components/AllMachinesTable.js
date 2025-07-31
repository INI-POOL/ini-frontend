
import { Table, Text } from "@chakra-ui/react"
import './machinesTable.scss'
import { formatDate,formatLargeNumber } from '@/utils/common.ts'

const AllMachinesTable = ({ machines }) => {
  return (
    <Table.ScrollArea borderWidth="0px" rounded="md" height="300px" className="table-scroll-container">
      <Table.Root size="sm" stickyHeader variant="unstyled">
        <Table.Header>
          <Table.Row bg="#060811" py="0.9375rem">
            <Table.ColumnHeader paddingBottom="0.9375rem" borderWidth="0px" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Mining Machine</Text></Table.ColumnHeader>
            <Table.ColumnHeader paddingBottom="0.9375rem" borderWidth="0px" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Hashrate</Text></Table.ColumnHeader>
            <Table.ColumnHeader paddingBottom="0.9375rem" borderWidth="0px" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Stale Rate</Text></Table.ColumnHeader>
            <Table.ColumnHeader paddingBottom="0.9375rem" borderWidth="0px" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Invalid Rate</Text></Table.ColumnHeader>
            <Table.ColumnHeader paddingBottom="0.9375rem" borderWidth="0px" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Last Update</Text></Table.ColumnHeader>
            <Table.ColumnHeader paddingBottom="0.9375rem" borderWidth="0px" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Status</Text></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body key="allmachines">
          {machines.map((item) => (
            <Table.Row key={item.machine_name} bg="#060811" py="0.9375rem" style={{ borderTop: "0.3125rem solid #060811", background: "rgba(255, 255, 255, 0.02)" }}>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.machine_name}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{formatLargeNumber(item.hashrate)}h/s</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{formatLargeNumber(item.stale_rate)}h/s</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{formatLargeNumber(item.invalid_rate)}h/s</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{formatDate(item.last_submit_time, "Y-M-D H:i:s")}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">
                <Text as="span" color={item.is_offline === false ? "green" : "red"}>{!item.is_offline? "Online" : "Offline"}</Text>
              </Table.Cell>
            </Table.Row>
          ))}
      
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
}


const items = [
  { title: "inibox001", id: "773.9%", name: "464817", category: "07-03 11:00", price: 999.991233, status: "Immature" },
  { title: "inibox002", id: "773.9%", name: "464817", category: "07-03 11:00", price: 649.991233, status: "Success" },
  { title: "inibox003", id: "773.9%", name: "464817", category: "07-03 11:00", price: 150.001233, status: "Success" },
  { title: "inibox004", id: "773.9%", name: "464817", category: "07-03 11:00", price: 799.991233, status: "Success" },
  { title: "inibox005", id: "773.9%", name: "464817", category: "07-03 11:00", price: 199.991233, status: "Immature" },
]

export default AllMachinesTable;
