import React from 'react';
import { Box, Flex ,Text} from '@chakra-ui/react';
// import x from '@/assets/x.svg'
import telegram from '@/assets/telegram.svg'
// import github from '@/assets/github.svg'
// import discord from '@/assets/discord.svg'
import logo from '@/assets/logo.svg'
import './footer.scss'

const Footer = () => {
  return (
    <Box as="footer" className='commonBg' py={4} mt="auto">
      <Flex className='footer-content' justify="center" align="center" >  
        <img src={logo} alt="" />
        <Text  w="100%" p={4} className='text-desc'>
        Powered by INIPool Mining. Your trusted platform for secure, profitable cryptocurrency mining. Start earning today.
        </Text>
        <Flex align="center" justify="center">
          {/* <img src={x} alt="" />
          <img src={discord} alt="" />
          <img src={github} alt="" /> */}
          <img src={telegram} alt="" />
        </Flex>
      </Flex>
     
    </Box>
  );
};

export default Footer;