
import { Table, Text, Image, Badge, Flex } from "@chakra-ui/react"
import './machinesTable.scss'
import Paid from "@/assets/img/paid.svg"
import Unpaid from "@/assets/img/unpaid.svg"


const DataTable = () => {
  return (

    <Table.ScrollArea borderWidth="0px" rounded="md" height="300px" className="table-scroll-container">
      <Table.Root size="sm" stickyHeader variant="unstyled">
        <Table.Header>
          <Table.Row bg="#060811" py="0.9375rem">
            <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem"  textAlign="center" fontSize="0.875rem">
              <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Luck Value</Text>
            </Table.ColumnHeader>
            <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Block Height</Text></Table.ColumnHeader>
            <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Time</Text></Table.ColumnHeader>
            <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Reward (INI)</Text></Table.ColumnHeader>
            <Table.ColumnHeader borderWidth="0px" paddingBottom="0.9375rem" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Status</Text></Table.ColumnHeader>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id} bg="#060811" py="0.9375rem" style={{ borderTop: "0.3125rem solid #060811", background: "rgba(255, 255, 255, 0.02)" }}>
              <Table.Cell textAlign="center"  borderWidth="0px" fontSize="0.875rem">{item.id}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.name}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.category}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.price}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">
                <Flex alignItems="center" justifyContent="center" gap="0.3125rem" direction="row">
                  <Image src={item.status === "Paid" ? Paid : Unpaid} alt="" boxSize="1rem" />
                  <Text color={item.status === "Paid" ? "" : "red"}>{item.status}</Text>
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
          {items.map((item) => (
            <Table.Row key={item.id} bg="#060811" py="0.9375rem" style={{ borderTop: "0.3125rem solid #060811", background: "rgba(255, 255, 255, 0.02)" }}>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.id}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.name}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.category}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.price}</Table.Cell>
              <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">
                <Flex alignItems="center" justifyContent="center" gap="0.3125rem" direction="row">
                  <Image src={item.status === "Paid" ? Paid : Unpaid} alt="" boxSize="1rem" />
                  <Text color={item.status === "Paid" ? "" : "red"}>{item.status}</Text>
                </Flex>

                {/* {item.status === "Paid" ? <Image src={Paid} alt="" >{item.status}</Image> : <Image src={Unpaid} alt="" >{item.status}</Image>} */}

                {/* <Badge colorScheme={item.status === "Paid" ? "green" : "red"}>{item.status}</Badge> */}
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
