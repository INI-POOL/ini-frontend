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
    const [baseBasic,setBaseBasic]= useState({});

    // 调用登录接口
    const getMinersHashrate = async () => {
        try {
            const response = await poolApi.getMinersHashrate(walletAddress);
            // console.log(response.data.hash_history)
            if (response.success) {
                setBaseinfo(response.data)
                // console.log(response.data.machine_alive)
                // console.log(response.data.machine_count)
                // setAliveCount(response.data.machine_alive);
                // setTotalCount(response.data.machine_count);
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
            setBaseinfo({})
            setMinersHashrate([])
            setMinersHashrateTime([])
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
            setMachines([])
            setOnlineMachines([])
            setOfflineMachines([])
        }
    };
    const getMinersReward = async () => {
        try {
            const response = await poolApi.getMinersReward(walletAddress);
            // console.log(response.data.hash_history)
            if (response.success) {
                setReward(response.data)
                let firstDayReward = response.data.pay_details.length > 0 ? Number(response.data.pay_details[0].amount) : 0;
                let weekDayReward = response.data?.pay_details?.slice(0, 7).reduce((total, item) => {
                  return total + Number(item.amount); // 确保是数字
                }, 0);
                setBaseBasic({
                  ...baseBasic,
                  "firstDayReward":firstDayReward,
                  "weekDayReward":weekDayReward
                })
            }
            // 处理响应数据
        } catch (error) {
            setBaseBasic({})
            setReward({})
            console.log(error)
        }
    };
    
    useEffect(() => {
        getMinersHashrate()
        getMinersMachines()
        getMinersReward()
    }, [walletAddress])

    const options = [
        { key: 'all', label: `All (${machines.length})` },
        { key: 'online', label: `Online (${onlineMachines.length})` },
        { key: 'offline', label: `Offline (${offlineMachines.length})`, extraClass: 'red' }
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
                <BaseInfo walletaddress={walletAddress} baseBasic={baseBasic} reward={reward} machinesinfo={baseinfo}/>
            </div>
            <Box marginBottom={{base:'0rem',md:"1.56rem"}} marginTop={{ base: "1.25rem", sm: "3.75rem" }} className='chart-wapper'>
                <Text fontSize={{ base: '0.75rem', sm: '0.875rem' }}>12H  Hashrate</Text>
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