import React from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import logo from '@/assets/logo.svg'
import SearchInput from './components/Search';
import { useLocation,useNavigate } from 'react-router-dom';
import "./header.scss"

const Header = () => {
  const location = useLocation();
  const navigate=useNavigate()
  // 判断是否为首页
  const isHomePage = location.pathname === '/';
  // console.log("isHomePage", isHomePage);

  return (
    <Box as="header" py={4} boxShadow="sm" minheight={["5rem"]} bg="black">
      <Box maxWidth="container.xl" mx="auto" px={0}>
        <Flex
        direction={{ base: "column", sm: "row" }} 
          justify="space-between"
          // align="left"
          p={0}
          borderRadius="md"
        >
          <Text fontSize="lg" fontWeight="bold" color="orange.700" style={{ textAlign: 'left' }}>
            {/* <Link href="/">  */}
            <Image style={{ cursor: 'pointer' }}  src={logo} alt="logo"  onClick={()=>{
               navigate('/')
            }}/>
            {/* </Link> */}
          </Text>
          <Flex justify="flex-end" style={{ minWidth: "40%" }}>
            {!isHomePage &&
              <SearchInput />
            }
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;