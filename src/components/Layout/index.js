import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Container, Box } from "@chakra-ui/react"

const Layout = () => {
  
  return (
    <Box minH="80vh" display="flex" flexDirection="column" width="100vw" style={{background:"#060811"}}>
      <Container 
        as="main" 
        maxWidth={{ 
          base: "container.sm",    // 移动端
          md: "1200px",      // 平板   // 大屏
        }}
        // maxWidth={{ 
        //   base: "container.sm",    // 移动端
        //   md: "container.md",      // 平板
        //   lg: "container.lg",      // 桌面
        //   xl: "container.xl"       // 大屏
        // }}
        px={{ base: "0.75rem", md: "2rem" }}
        py={{ base: "0.625rem", md: 0 }}
      >
        <Header />
        
        <Outlet/>

        <Footer />
      </Container>
      
    </Box>
  );
};

export default Layout;