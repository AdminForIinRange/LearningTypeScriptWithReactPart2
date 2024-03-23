import { HStack, VStack, Text, Box, Spacer, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import GoalModalHandler from "../../components/Modal/GoalModalHandler.tsx";


const GoalCreation : React.FC = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

const [modalValue, setModalValue] = useState<string>("")

  return (


    <>
    <VStack p={2} px={3}>
      <Text fontFamily={"Raleway"} fontSize={"65px"} fontWeight={"700"}>
        Lets Get Started
      </Text>

      <VStack justify={"center"} w={["90%", "90%", "60%", "50%"]} align={"start"} gap={"25px"} mt={"15px"}>
        <Button  variant={"none"} w={"100%"}   onClick={()=>{
              setModalValue("Goal")
              onOpen()
            }} 
          h={"65px"}
                 boxShadow={"0 5px 10px gray"}
          
          rounded={"xl"}
          transition="transform, 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.03)",
            boxShadow: "0 5px 20px gray",
          }}>

       
     
          <HStack w={"100%"} h={"100%"} justify={"left"} align={"center"} px={5}>
            
            <Text  fontSize={"20px"} textAlign={"left"} >
              Create Your Goal
              </Text>
            <Spacer/>
            <Text fontSize={"20px"} textAlign={"left"} >
            <FaArrowRightLong />
            </Text>
           
          </HStack>
      
        </Button>
     
      </VStack>
    </VStack>



          <GoalModalHandler modalValue={modalValue} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} />
     
 

    </>
  );
};

export default GoalCreation;
