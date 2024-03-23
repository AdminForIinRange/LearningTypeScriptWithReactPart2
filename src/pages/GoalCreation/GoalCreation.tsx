import { HStack, VStack, Text, Box, Spacer } from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const GoalCreation = () => {
  return (
    <VStack p={2} px={3}>
      <Text fontFamily={"Raleway"} fontSize={"65px"} fontWeight={"700"}>
        Lets Get Started
      </Text>

      <VStack justify={"center"} w={["90%", "90%", "60%", "50%"]} align={"start"} gap={"25px"} mt={"15px"}>
        <Box
          w={"100%"}
          h={"65px"}
                 boxShadow={"0 5px 10px gray"}
          
          rounded={"xl"}
          transition="transform, 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            boxShadow: "0 5px 20px gray",
          }}
        >
          <HStack w={"100%"} h={"100%"} justify={"left"} align={"center"} px={5}>
            <Text fontSize={"20px"} textAlign={"left"} >
              Create Your Goal
            </Text>
            <Spacer/>
            <Text fontSize={"20px"} textAlign={"left"} >
            <FaArrowRightLong />
            </Text>
          </HStack>
        </Box>
        <Box
          w={"100%"}
          h={"65px"}
           boxShadow={"0 5px 10px gray"}
          rounded={"xl"}
          transition="transform, 0.3s ease-in-out"
            _hover={{
            transform: "scale(1.03)",
            boxShadow: "0 5px 20px gray",
          }}
        >
          <HStack w={"100%"} h={"100%"} justify={"left"} align={"center"} px={5} >
            <Text fontSize={"20px"} textAlign={"left"} >
            Monthly targets for your goals
            </Text>
            <Spacer/>
            <Text fontSize={"20px"} textAlign={"left"} >
            <FaArrowRightLong />
            </Text>
          </HStack>
        </Box>
        <Box
          w={"100%"}
          h={"65px"}
                  boxShadow={"0 5px 10px gray"}
          rounded={"xl"}
          transition="transform, 0.3s ease-in-out"
            _hover={{
            transform: "scale(1.03)",
            boxShadow: "0 5px 20px gray",
          }}
        >
          <HStack w={"100%"} h={"100%"} justify={"left"} align={"center"} px={5}>
            <Text fontSize={"20px"} textAlign={"left"} >
         weekly targets for your gaol
            </Text>
            <Spacer/>
            <Text fontSize={"20px"} textAlign={"left"} >
            <FaArrowRightLong />
            </Text>
          </HStack>
        </Box>
        <Box
          w={"100%"}
          h={"65px"}
                  boxShadow={"0 5px 10px gray"}
          rounded={"xl"}
          transition="transform, 0.3s ease-in-out"
            _hover={{
            transform: "scale(1.03)",
            boxShadow: "0 5px 20px gray",
          }}
        >
          <HStack w={"100%"} h={"100%"} justify={"left"} align={"center"} px={5}>
            <Text fontSize={"20px"} textAlign={"left"} >
        daily targets for your gaol
            </Text>
            <Spacer/>
            <Text fontSize={"20px"} textAlign={"left"} >
            <FaArrowRightLong />
            </Text>
          </HStack>
        </Box>
      </VStack>
    </VStack>
  );
};

export default GoalCreation;
