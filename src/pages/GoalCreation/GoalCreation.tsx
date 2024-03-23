import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import React from "react";

const GoalCreation = () => {
  return (
    <VStack p={2} px={3}>
      <Text fontFamily={"Raleway"} fontSize={"65px"} fontWeight={"700"}>
        Lets Get Started
      </Text>

      <VStack justify={"center"} w={"50%"} align={"start"}>
        <Box
          w={"100%"}
          h={"65px"}
          boxShadow={"2xl"}
          rounded={"xl"}
          transition="transform, 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            boxShadow: "0 0 10px black",
          }}
        >
          <HStack w={"100%"} h={"100%"} justify={"left"} align={"center"}>
            <Text fontSize={"20px"} textAlign={"left"} textIndent={"20px"}>
              Create Your Goal
            </Text>
          </HStack>
        </Box>
      </VStack>
    </VStack>
  );
};

export default GoalCreation;
