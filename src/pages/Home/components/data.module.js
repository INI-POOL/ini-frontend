// import { Flex, Box, Text } from "@chakra-ui/react"
// import info from "@/assets/img/info.svg"

// const DataModule = () => {

//     return (
//         <Flex gap="4" justify="space-between">
//             <Box  p="4" className="data-item">

//                 <Flex alignItems="start" gap={"0.3125rem"} className="data-item-title">
//                     <Text className="data-item-title">Total Hashrate </Text>
//                     <img src={info} alt="info" />
//                 </Flex>
//                 <Text className="data-item-value">1.23456789</Text>
//             </Box>
//             <Box  p="4" className="data-item">
//                 <Flex alignItems="start" gap={"0.3125rem"} className="data-item-title">
//                     <Text>Miners</Text>
//                     <img src={info} alt="info" />
//                 </Flex>
//                 <Text className="data-item-value">1.23456789</Text>
//             </Box>
//             <Box  p="4" className="data-item">

//             <Flex alignItems="start" gap={"0.3125rem"} className="data-item-title">
//                     <Text>Expected Earnings (1MH/s)</Text>
//                     <img src={info} alt="info" />
//                 </Flex>
//                 <Text className="data-item-value">1.23456789</Text></Box>
//             <Box  p="4" className="data-item">
//                 <Flex alignItems="start" gap={"0.3125rem"} className="data-item-title">
//                     <Text>Number of Blocks Mined (24H)</Text>
//                     <img src={info} alt="info" />
//                 </Flex>
//                 <Text className="data-item-value">1.23456789</Text></Box>
//         </Flex>
//     )
// }

// export default DataModule;

import { Wrap, WrapItem, Box, Flex, Text } from "@chakra-ui/react";
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
                    flexBasis={{ base: "48%", sm: "48%", md: "24%" }}
                    className="data-item"
                    p="4"
                >
                    <Box w="full">
                        <Flex alignItems="start" gap="0.3125rem" className="data-item-title" padding={{base:"0.625rem",md:"0.9375rem 0.85rem"}} fontSize={{base:"0.75rem",md:"0.875rem"}}>
                            <Text className="data-item-title">{title}</Text>
                            <img src={info} alt="info" />
                        </Flex>
                        <Text className="data-item-value">1.23456789</Text>
                    </Box>
                </WrapItem>
            ))}
        </Wrap>
        )}

    export default DataModule;