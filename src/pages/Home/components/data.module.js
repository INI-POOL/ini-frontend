import { Flex, Box, Text } from "@chakra-ui/react"
import info from "@/assets/img/info.svg"

const DataModule = () => {

    return (
        <Flex gap="4" justify="space-between">
            <Box flexBasis="20%" p="4" className="data-item">

                <Flex alignItems="start" gap={"0.3125rem"} className="data-item-title">
                    <Text className="data-item-title">Total Hashrate </Text>
                    <img src={info} alt="info" />
                </Flex>
                <Text className="data-item-value">1.23456789</Text>
            </Box>
            <Box  p="4" className="data-item">
                <Flex alignItems="start" gap={"0.3125rem"} className="data-item-title">
                    <Text>Miners</Text>
                    <img src={info} alt="info" />
                </Flex>
                <Text className="data-item-value">1.23456789</Text>
            </Box>
            <Box  p="4" className="data-item">
                
            <Flex alignItems="start" gap={"0.3125rem"} className="data-item-title">
                    <Text>Expected Earnings (1MH/s)</Text>
                    <img src={info} alt="info" />
                </Flex>
                <Text className="data-item-value">1.23456789</Text></Box>
            <Box  p="4" className="data-item">
                <Flex alignItems="start" gap={"0.3125rem"} className="data-item-title">
                    <Text>Number of Blocks Mined (24H)</Text>
                    <img src={info} alt="info" />
                </Flex>
                <Text className="data-item-value">1.23456789</Text></Box>
        </Flex>
    )
}

export default DataModule;
