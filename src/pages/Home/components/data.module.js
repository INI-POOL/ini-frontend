
import { Wrap, WrapItem, Box, Flex, Text,Image} from "@chakra-ui/react";
import info from "@/assets/img/info.svg" // 请根据你的路径调整

const DataModule = (props) => {
    let poolData=[
        {title:"Mining Machines",value:props.data.workersCount},
        {title:"Miners",value:props.data.minersCount},
        {title:"Expected Earnings (1MH/s)",value:props.data.rewardPerMhash+" INI"},
        {title:"Number of Blocks Mined (24H)",value:props.data.blockCount_24h}
    ]

    return (
        <Wrap spacing="0.625rem" justify="space-between" >
            {poolData.map((item, index) => (
                <WrapItem
                    key={index}
                    // flexBasis={{ base: "48%", sm: "48%", md: "24%" }}
                    className="data-item"
                    p="4"
                    w={{ base: "100%", sm: "50%", md: "50%",xl:"auto" }}
                >
                    <Box w="full">
                        <Flex alignItems="start" gap="0.3125rem" className="data-item-title" textAlign={"left"}  fontSize={{base:"0.75rem",md:"0.875rem"}}>
                            <Text className="data-item-title" textAlign={"left"}>{item.title}</Text>
                            {/* <Tooltip label="Total Hashrate is the combined hash power of all active miners on the network."> */}
                                {/* <img src={info} alt="info" /> */}
                            {/* </Tooltip> */}
                            {/* <Image src={info} alt="info" /> */}
                        </Flex>
                        <Text className="data-item-value" textAlign={"left"}>{item.value}</Text>
                    </Box>
                </WrapItem>
            ))}
        </Wrap>
        )}

    export default DataModule;