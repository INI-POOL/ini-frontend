import { Flex, Box, Text, Button } from "@chakra-ui/react";

function Dashboard() {
  return (
    <Flex h="100vh" p={8} bg="gray.50">
      {/* 左边图表区域 */}
      <Box flex="1" bg="white" boxShadow="md" borderRadius="md" p={4} mr={4}>
        {/* 这里放图表组件，比如 <Chart /> */}
        <Text fontSize="lg" fontWeight="bold" mb={4}>📊 图表区域</Text>
        <Box h="300px" bg="gray.100" borderRadius="md" />
      </Box>

      {/* 右边内容区域 */}
      <Box w="300px" bg="white" boxShadow="md" borderRadius="md" p={4}>
        <Text fontSize="lg" fontWeight="bold" mb={4}>📝 内容区域</Text>
        <Text mb={4}>这里可以放描述文字、按钮、统计信息等。</Text>
        <Button colorScheme="orange">操作按钮</Button>
      </Box>
    </Flex>
  );
}

export default Dashboard;
