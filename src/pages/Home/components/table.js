
import { Table,Text } from "@chakra-ui/react"
import "./table.scss"

const DataTable = () => {
  return (
    
    <Table.ScrollArea borderWidth="0px" rounded="md" height="300px" className="table-scroll-container">
    <Table.Root size="sm" stickyHeader variant="unstyled">
      <Table.Header>
        <Table.Row bg="#060811" py="0.9375rem">
          <Table.ColumnHeader  borderWidth="0px" textAlign="center" fontSize="0.875rem">
            <Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Product</Text>
            </Table.ColumnHeader>
          <Table.ColumnHeader borderWidth="0px" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Category</Text></Table.ColumnHeader>
          <Table.ColumnHeader borderWidth="0px" textAlign="center" fontSize="0.875rem"><Text bgGradient="linear-gradient(90deg, #CBCDDE 0%, #6E6F78 100%)" bgClip="text">Price</Text></Table.ColumnHeader>
        </Table.Row>
      </Table.Header>

      <Table.Body className="table-body">
        {items.map((item) => (
          <Table.Row key={item.id} bg="#060811" py="0.9375rem">
            <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.name}</Table.Cell>
            <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.category}</Table.Cell>
            <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.price}</Table.Cell>
          </Table.Row>
        ))}
         {items.map((item) => (
          <Table.Row key={item.id} bg="#060811" py="0.9375rem">
            <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.name}</Table.Cell>
            <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.category}</Table.Cell>
            <Table.Cell textAlign="center" borderWidth="0px" fontSize="0.875rem">{item.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  </Table.ScrollArea>
  )
}

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
]

export default DataTable;
