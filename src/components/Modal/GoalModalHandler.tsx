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
import React from "react";
 import CreateYourGoalModalProps from "../../global/index.ts";

const CreateYourGoalModal: React.FC<CreateYourGoalModalProps> = ({
  modalValue,
  isOpen,
  onClose,
  blockScrollOnMount,
}) => {
  const modalValueDisplay = () => {
    if (modalValue === "Goal") {
      return <> <ModalHeader><HStack  w={"100%"} h={"100%"} justify={'center'}>   <Text  fontFamily={"Raleway"} fontSize={"35px"} fontWeight={"700"} > Define Your Goal 
        </Text>
        </HStack></ModalHeader>
      
      
      <ModalBody w={"100%"} h={"100%"}> 

      <VStack justify={"start"} align={"left"} w={"100%"} h={"100%"} p={2}>

        <form >
       
        <FormLabel fontWeight={400} >
        Describe your goal in a few word:
        </FormLabel>

        <Input 
  
        _focus={{  borderBottom: "2px solid #EBEBEB"  }}
        px={0}
       w={"70%"}
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
       w={"70%"}
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

        <HStack>
          
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
      <Modal blockScrollOnMount={false} isOpen={isOpen} size={"4xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  h={"500px"}>
          <ModalCloseButton />

          {modalValueDisplay()}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateYourGoalModal;
