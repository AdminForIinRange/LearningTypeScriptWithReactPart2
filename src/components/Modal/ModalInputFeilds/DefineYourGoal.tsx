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
  import { FaArrowRightLong } from "react-icons/fa6";
  import { FaCheck } from "react-icons/fa";
  import onClose from "../../../global/index.ts"


  import { useDispatch, useSelector } from "react-redux";
  
const DefineYourGoal : React.FC<onClose> = ({onClose}) => {
    const dispatch = useDispatch();
    const [goalDescription, setGoalDescription]: [string, Dispatch<SetStateAction<string>>] = useState("");
    const [timeEstimate, setTimeEstimate]: [string, Dispatch<SetStateAction<string>>] = useState("");
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(goalDescription, timeEstimate);
  };

  return (
    <>
    
    
    <ModalHeader>
            <HStack w={"100%"} h={"100%"} justify={"center"}    mt={"10px"}>
              {" "}
              <Text fontFamily={"Raleway"} fontSize={"45px"} fontWeight={"700"}>
                {" "}
                Define Your Goal
              </Text>
            </HStack>
          </ModalHeader>
          <ModalBody w={"100%"} h={"100%"}>
            <VStack
              justify={"start"}
              align={"left"}
              w={"100%"}
              h={"100%"}
              p={2}
            >
              <form onSubmit={handleSubmit}>
            
              
                <FormLabel fontWeight={400} fontSize={"17px"}>
                  Describe your goal
                </FormLabel>

                <Input
                value={goalDescription}
                onChange={(e) => setGoalDescription(e.target.value)}
                  _focus={{ borderBottom: "2px solid #EBEBEB" }}
                 
                  w={"100%"}
                  
                  fontSize={"16px"}
                  mb={"25px"}
                  borderRadius={"10px"}
                  borderColor={"black"}
       
                  border="2px solid #EBEBEB" // Adjust the width and color as needed
                  type="text"
                  placeholder="I want To Become a full stack web developer "
                />

                <FormLabel  fontWeight={400} fontSize={"17px"}>
                  Estimated time for achieving this goal?
                </FormLabel>

                <HStack w={"100%"} justify={"center"}>
                  <Input
                                  onChange={(e) => setTimeEstimate(e.target.value)}
                  value={timeEstimate}
                  
                    placeholder="Select Date"
                    size="md"
                    type="date" // Use type="date" to capture only the date
                    mb={"40px"}
                  />
                </HStack>

                <HStack w={"100%"} justify={"Center"}>
                  <Button   mb={"25px"}
                  
                  colorScheme="green"
                    type="submit"
                    onClick={() => {
                        onClose()
                   
                      console.log("im closed");
                    
                    }}
                    w={"225px"}
                    rightIcon={<FaCheck />}
                   
                  >
                    Done
                  </Button>
                </HStack>
              </form>
            </VStack>
          </ModalBody>{" "}</>
  )
}

export default DefineYourGoal