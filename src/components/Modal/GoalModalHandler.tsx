import {
  HStack,
  VStack,
  Text,
  
  Box,
  Spacer,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";
 import GoalModalHandlerProps from "../../global/index.ts";
 import { FaArrowRightLong } from "react-icons/fa6";

const GoalModalHandler: React.FC<GoalModalHandlerModalProps> = ({
  modalValue,
  setModalValue,
  isOpen,
  onClose,
  blockScrollOnMount,
}) => {
  const [goalTitle, setTGoalTitle] : string = useState("");
  const [goalDescription, setGoalDescription]  : string = useState("");
  const [timeEstimate, setTimeEstimate] : string = useState("");


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


  }

  const modalValueDisplay = () => {


    if (modalValue === "Goal") {
      return <> <ModalHeader><HStack  w={"100%"} h={"100%"} justify={'center'}>   <Text  fontFamily={"Raleway"} fontSize={"35px"} fontWeight={"700"} > Define Your Goal 
        </Text>
        </HStack></ModalHeader>
      
      
      <ModalBody w={"100%"} h={"100%"}> 

      <VStack justify={"start"} align={"left"} w={"100%"} h={"100%"} p={2}>

        <form  onSubmit={handleSubmit}>
       
        <FormLabel fontWeight={400} >
        Describe your goal in a few word:
        </FormLabel>

        <Input 
  
        _focus={{  borderBottom: "2px solid #EBEBEB"  }}
        px={0}
       w={"100%"}
                    fontSize={"16px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    borderColor={"black"}
                    border={"0px solid black "}
                 
                    borderBottom="3px solid #EBEBEB" // Adjust the width and color as needed
                    type="First Name"
                    placeholder="To Become a Programmer"
                  />

<FormLabel fontWeight={400} >
        Describe your goal in a few word:
        </FormLabel>

        <Input 
  
        _focus={{  borderBottom: "2px solid #EBEBEB"  }}
        px={0}
       w={"100%"}
                    fontSize={"16px"}
                    mb={"50px"}
                    borderRadius={"0%"}
                    borderColor={"black"}
                    border={"0px solid black "}
                 
                    borderBottom="3px solid #EBEBEB" // Adjust the width and color as needed
                    type="First Name"
                    placeholder="To Become a Programmer"
                  />




<FormLabel fontWeight={500}    mb={"25px"} >
     Estimated time for achieving this goal?
        </FormLabel>

        <HStack w={["60%","50%","30%","30%",]} justify={"center"} >
          
       

          <Input
          w={"100%"}
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
 mb={"50px"}
/>


   
        </HStack>

        <HStack w={"100%"} justify={"right"} >
<Button  type="submit"  onClick={()=>{
      console.log("im closed")
  setModalValue("Monthly")
}} w={"100px"} rightIcon={<FaArrowRightLong />} color={"blue.400"}>
        Next
        </Button>
</HStack>



        </form>



      
      </VStack>
        
        
        
        </ModalBody> </>;
    } else if (modalValue === "Monthly") {
      return<> <ModalHeader>Monthly</ModalHeader> </>;
    } else if (modalValue === "Weekly") {
      return <> <ModalHeader>Weekly</ModalHeader> </>;
    } else if (modalValue === "Daily") {
      return <> <ModalHeader>Daily</ModalHeader> </>;
    }
  };

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} size={"3xl"}   onClose={onClose}>
        <ModalOverlay />
        <ModalContent boxShadow={"xl"} >
          <ModalCloseButton />

          {modalValueDisplay()}
        </ModalContent>
      </Modal>
    </>
  );
};

export default GoalModalHandler;
