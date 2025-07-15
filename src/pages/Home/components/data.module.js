
import { Wrap, WrapItem, Box, Flex, Text,Image,Tooltip } from "@chakra-ui/react";
import info from "@/assets/img/info.svg" // 请根据你的路径调整

const DataModule = () => {
    return (
        <Wrap spacing="4" justify="space-between">
            {[
                "Total Hashrate",
                "Miners",
                "Expected Earnings (1MH/s)",
                "Number of Blocks Mined (24H)",
            ].map((title, index) => (
                <WrapItem
                    key={index}
                    // flexBasis={{ base: "48%", sm: "48%", md: "24%" }}
                    className="data-item"
                    p="4"
                >
                    <Box w="full">
                        <Flex alignItems="start" gap="0.3125rem" className="data-item-title" textAlign={"left"}  fontSize={{base:"0.75rem",md:"0.875rem"}}>
                            <Text className="data-item-title" textAlign={"left"}>{title}</Text>
                            {/* <Tooltip label="Total Hashrate is the combined hash power of all active miners on the network."> */}
                                {/* <img src={info} alt="info" /> */}
                            {/* </Tooltip> */}
                            <Image src={info} alt="info" />
                        </Flex>
                        <Text className="data-item-value" textAlign={"left"}>1.23456789</Text>
                    </Box>
                </WrapItem>
            ))}
        </Wrap>
        )}

    export default DataModule;