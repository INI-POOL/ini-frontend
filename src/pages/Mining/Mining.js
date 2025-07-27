import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Text, Stack, Badge } from '@chakra-ui/react';
import BaseInfo from './components/info';
import ChartPanel from './components/ChartLine';
import DataTable from './components/machinesTable';
import AllMachinesTable from './components/AllMachinesTable';
import OnlineMachinesTable from './components/OnlineMachinesTable';
import OfflineMachinesTable from './components/OfflineMachinesTable';
import '@/pages/common.scss';
import './mining.scss';
import { poolApi } from '@/services/api';

const Mining = () => {
    const [selected, setSelected] = useState('all');
    const { walletAddress } = useParams();
    const [minerHashrate,setMinersHashrate]= useState([]);
    const [minerHashrateTime,setMinersHashrateTime]= useState([]);
    const [baseinfo,setBaseinfo]= useState({});
    const [machines,setMachines]= useState([]);
    const [onlineMachines,setOnlineMachines]= useState([]);
    const [offlineMachines,setOfflineMachines]= useState([]);
    const [reward,setReward]= useState({});
    const [totalCount,setTotalCount]=useState(0); // 总机器数
    const [aliveCount,setAliveCount]=useState(0); // 在线机器数
    // 调用登录接口
    const getMinersHashrate = async () => {
        try {
            const response = await poolApi.getMinersHashrate(walletAddress);
            // console.log(response.data.hash_history)
            if (response.success) {
                setBaseinfo(response.data)
                // console.log(response.data.machine_alive)
                // console.log(response.data.machine_count)
                setAliveCount(response.data.machine_alive);
                setTotalCount(response.data.machine_count);
                let x_data=[]
                let y_data=[]
                response.data.hash_history.forEach(element => {
                    x_data.push(element.timestamp)
                    y_data.push(element.hashrate)
                });
                setMinersHashrate(y_data)
                setMinersHashrateTime(x_data)
            }
            // 处理响应数据
        } catch (error) {
            // 处理错误
            console.log(error)
        }
    };
    const getMinersMachines = async () => {
        try {
            const response = await poolApi.getMinersMachine(walletAddress);
            // console.log(response.data.hash_history)
            if (response.success) {
                setMachines(response.data)
                const onlineMachine=[]
                const offlineMachine=[]
                response.data.forEach(item=>{
                    if (item.is_offline === false) {
                        onlineMachine.push(item);
                      } else {
                        offlineMachine.push(item);
                      }
                })
                setOnlineMachines(onlineMachine)
                setOfflineMachines(offlineMachine)
            }
            // 处理响应数据
        } catch (error) {
            // 处理错误
        }
    };
    const getMinersReward = async () => {
        try {
            const response = await poolApi.getMinersReward(walletAddress);
            // console.log(response.data.hash_history)
            if (response.success) {
                setReward(response.data)
            }
            // 处理响应数据
        } catch (error) {
            // 处理错误
            let retdata={
                "success": true,
                "data": {
                  "address": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
                  "total_reward": "0.12345678",
                  "pay_details": [
                    {
                      "date": 1704067200,
                      "amount": "0.04567890",
                      "tx_hash": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                      "pay_time": 1704067200
                    },
                    {
                      "date": 1703980800,
                      "amount": "0.03215678",
                      "tx_hash": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
                      "pay_time": 1703980800
                    },
                    {
                      "date": 1703894400,
                      "amount": "0.02890123",
                      "tx_hash": "0x567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234",
                      "pay_time": 1703894400
                    },
                    {
                      "date": 1703808000,
                      "amount": "0.01671987",
                      "tx_hash": "0xdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abc",
                      "pay_time": 1703808000
                    },
                    {
                      "date": 1703721600,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1703635200,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1703548800,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1703462400,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1703376000,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1703289600,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1703203200,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1703116800,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1703030400,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1702944000,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1702857600,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1702771200,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1702684800,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1702598400,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1702512000,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1702425600,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1702339200,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1702252800,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1702166400,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1702080000,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1701993600,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1701907200,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1701820800,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1701734400,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1701648000,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1701561600,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1701475200,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1701388800,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    },
                    {
                      "date": 1701302400,
                      "amount": "0.00000000",
                      "tx_hash": "",
                      "pay_time": 0
                    }
                ]
            }
            }
            console.log(retdata.data.pay_details)
            setReward(retdata.data)
        }
    };
    
    useEffect(() => {
        getMinersHashrate()
        getMinersMachines()
        getMinersReward()
    }, [])

    const options = [
        { key: 'all', label: `All (${totalCount})` },
        { key: 'online', label: `Online (${aliveCount})` },
        { key: 'offline', label: `Offline (${totalCount-aliveCount})`, extraClass: 'red' }
    ];
    return (
        <Box
            minH="100vh"
            w="full" // w=full
            p={8}
            position="relative"
            className='mining'
        >
            <div>
                <BaseInfo walletaddress={walletAddress} reward={reward} machinesinfo={baseinfo}/>
            </div>
            <Box style={{ marginBottom: '1.56rem' }} marginTop={{ base: "1.25rem", sm: "3.75rem" }} className='chart-wapper'>
                <Text fontSize={{ base: '0.75rem', sm: '0.875rem' }}>24H  Hashrate</Text>
                <Flex style={{ width: "100%" }}>
                    <ChartPanel x_data={minerHashrateTime} y_data={minerHashrate}/>
                </Flex>
            </Box>
            <div className='commonBg' py={{ base: '0' }} px={{ base: '0' }} style={{ marginBottom: '1.56rem' }}>
                <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
                    <Flex className='title' flexDirection={{ base: "column", sm: "row" }} gap={{ base: "0.625rem", sm: "1.875rem" }} padding={{ base: "0rem 0.9375rem", sm: "0rem 1.875rem" }}>
                        <Text style={{ textAlign: 'left' }}>
                            Mining Machine
                        </Text>
                        <Stack direction="row" spacing={'0.625rem'} className='filter'>
                            {options.map((option) => (
                                <Badge
                                    key={option.key}
                                    className={`${selected === option.key ? 'check' : 'uncheck'} ${option.extraClass || ''}`}
                                    onClick={() => setSelected(option.key)}
                                    cursor="pointer"
                                >
                                    {option.label}
                                </Badge>
                            ))}
                        </Stack>

                    </Flex>
                    <Box className='table-wapper' gap={{ base: "0.625rem" }} padding={{ base: "0 0.9375rem" }}>
                        <div className='table-content'>
                            {selected === 'all' && (
                                <AllMachinesTable machines={machines}/>
                            )}
                            {selected === 'online' && (
                                <OnlineMachinesTable machines={onlineMachines}/>
                            )}
                            {selected === 'offline' && (
                                <OfflineMachinesTable machines={offlineMachines}/>
                            )}
                        </div>
                    </Box>
                </Flex>
            </div>
            <div className='commonBg' py={{ base: '0' }} px={{ base: '0' }} style={{ marginBottom: '1.56rem' }}>
                <Flex py={{ base: '1.25rem' }} style={{ gap: '0.625rem' }} flexDirection={"column"}>
                    <Flex className='title' padding={{ base: "0rem 0.9375rem", sm: "0rem 1.875rem" }}>
                        <Text style={{ textAlign: 'left' }}>Billing List</Text>
                    </Flex>
                    <Box className='table-wapper' gap={{ base: "0.625rem" }} padding={{ base: "0 0.9375rem" }}>
                        <div className='table-content'>
                            <DataTable reward={reward}/>
                        </div>
                    </Box>
                </Flex>
            </div>
        </Box>
    )
}

export default Mining;