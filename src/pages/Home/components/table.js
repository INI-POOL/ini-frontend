
import { Table, Text } from "@chakra-ui/react"
import "./table.scss"
import {formatDate} from "@/utils/common.ts"

const DataTable = (props) => {

  return (

    <Table.ScrollArea borderWidth="0px" rounded="md" height="300px" className="table-scroll-container">
      <Table.Root size="sm" stickyHeader variant="unstyled" >
        <Table.Header>
          <Table.Row bg="#060811" py="0.9375rem" style={{ borderBottom: "0.3125rem solid #060811" }}>
            {/* <Table.ColumnHeader borderWidth="0px" textAlign="center" paddingBottom="0.9375rem" fontSize="0.875rem">
              <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Luck Value</Text>
            </Table.ColumnHeader> */}
            <Table.ColumnHeader borderWidth="0px" textAlign="center" paddingBottom="0.9375rem"  fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Block Height</Text></Table.ColumnHeader>
            <Table.ColumnHeader borderWidth="0px" textAlign="center" paddingBottom="0.9375rem"  fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Time</Text></Table.ColumnHeader>
            <Table.ColumnHeader borderWidth="0px" textAlign="center" paddingBottom="0.9375rem" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Reward (INI)</Text></Table.ColumnHeader>
            {/* <Table.ColumnHeader borderWidth="0px" textAlign="center" paddingBottom="0.9375rem" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Status</Text></Table.ColumnHeader> */}
            

          </Table.Row>
        </Table.Header>

        <Table.Body className="table-body">
          {props.data.map((item) => (
            <Table.Row key={item.id} bg="#060811" py="0.9375rem" style={{ borderTop: "0.3125rem solid #060811", background: "rgba(255, 255, 255, 0.02)" }}>
              {/* <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem"></Table.Cell> */}
              <Table.Cell   borderWidth="0px" fontSize="0.875rem">{item.height}</Table.Cell>
              
              <Table.Cell borderWidth="0px" fontSize="0.875rem">{formatDate(item.time,"M-D h:m:s")}</Table.Cell>
              <Table.Cell  borderWidth="0px" fontSize="0.875rem">{item.reward}</Table.Cell>
              {/* {/* <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.price}</Table.Cell> */}
              {/* <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{}</Table.Cell>  */}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  )
}

// const items = [
//   { id: "773.9%", name: "464817", category: "07-03 11:00", price: 999.991233, status: "Success" },
//   { id: "773.9%", name: "464817", category: "07-03 11:00", price: 649.991233, status: "Immature" },
//   { id: "773.9%", name: "464817", category: "07-03 11:00", price: 150.001233, status: "Immature" },
//   { id: "773.9%", name: "464817", category: "07-03 11:00", price: 799.991233, status: "Immature" },
//   { id: "773.9%", name: "464817", category: "07-03 11:00", price: 199.991233, status: "Success" },
// ]

export default DataTable;
