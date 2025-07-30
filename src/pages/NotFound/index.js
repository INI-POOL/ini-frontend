import React from "react";
import { Box, Text, VStack,Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
const CenteredPage = () => {
const navigate = useNavigate();
  return (
    
    <Box
      height="100vh"
      width="100vw"
      className="App"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack  gap={"1.95rem"}>
        <Text fontSize="1.25rem" fontWeight="400" >
        Page not found
        </Text>
        <Text fontSize="lg" color="gray.600">
        <Button bgGradient="linear-gradient(90deg, #C9BFFF 0%, #AC9DFB 100%)"
          height={{ base: "1.5rem", md: "2.5rem" }}
          borderRadius={{ base: "0.625rem" }}
          width={{ base: "1.5rem", md: "7.5rem" }}
          fontSize={"0.875rem"}
          _hover={{
            bgGradient: "linear(90deg, #AC9DFB 0%, #C9BFFF 100%)"
          }} 
          onClick={() => {
            navigate('/home/')
          }}>
          <Text className="isMobileHide" color={"#000"}>Go back home</Text>
        </Button>
        </Text>
      </VStack>
    </Box>
  );
};

export default CenteredPage;