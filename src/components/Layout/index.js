import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Container, Box } from "@chakra-ui/react"

const Layout = () => {
  return (
    <Box minH="80vh" display="flex" flexDirection="column" width="100vw">
     
      <Container 
        as="main" 
        maxWidth={{ 
          base: "container.sm",    // 移动端
          md: "container.md",      // 平板
          lg: "container.lg",      // 桌面
          xl: "container.xl"       // 大屏
        }}
        px={{ base: "2rem", md: "7.5rem" }}
        py={{ base: 0, md: 0 }}
      >
        <Header />
        
        <Outlet/>

        <Footer />
      </Container>
      
    </Box>
  );
};

export default Layout;