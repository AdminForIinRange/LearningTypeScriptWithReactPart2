import {
    HStack,
    VStack,
    Text,
 
    Input,
    ModalHeader,
  
    ModalBody,
    Button,
    FormLabel,
  } from "@chakra-ui/react";
import onClose from "../../../global/index.ts"
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { updateGoal } from "../../../features/goals/goalsSlice.tsx";

import { useDispatch } from "react-redux";
const WeeklyGoal : React.FC<onClose> = ({onClose}) => {
    const dispatch = useDispatch();


    const [WeeklyGoalOne, setWeeklyGoalOne]: [string, Dispatch<SetStateAction<string>>] = useState("");
   
    const [WeeklyGoalTwo, setWeeklyGoalTwo]: [string, Dispatch<SetStateAction<string>>] = useState("");
    const [WeeklyGoalThree, setWeeklyGoalThree]: [string, Dispatch<SetStateAction<string>>] = useState("");
   



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       dispatch(updateGoal({ index: 0, field: 'WeeklyGoalOne', value: WeeklyGoalOne }));
    dispatch(updateGoal({ index: 0, field: 'WeeklyGoalTwo', value: WeeklyGoalTwo }));
    dispatch(updateGoal({ index: 0, field: 'WeeklyGoalThree', value: WeeklyGoalThree }));
      };
    
 
    return (
     <>
    
    
    <ModalHeader>
            <HStack w={"100%"} h={"100%"} justify={"center"}    mt={"10px"}>
              {" "}
              <Text fontFamily={"Raleway"} fontSize={"45px"} fontWeight={"700"}>
                {" "}
                Set 3 Weekly Goals
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
                Weekly Goal One
                </FormLabel>

                <Input
                value={WeeklyGoalOne}
                onChange={(e) => setWeeklyGoalOne(e.target.value)}
                  _focus={{ borderBottom: "2px solid #EBEBEB" }}
                 
                  w={"100%"}
                  
                  fontSize={"16px"}
                  mb={"25px"}
                  borderRadius={"10px"}
                  borderColor={"black"}
       
                  border="2px solid #EBEBEB" // Adjust the width and color as needed
                  type="text"
                  placeholder="I want to learn front end development"
                />

<FormLabel fontWeight={400} fontSize={"17px"}>
Weekly Goal Two
                </FormLabel>

                <Input
                value={WeeklyGoalTwo}
                onChange={(e) => setWeeklyGoalTwo(e.target.value)}
                  _focus={{ borderBottom: "2px solid #EBEBEB" }}
                 
                  w={"100%"}
                  
                  fontSize={"16px"}
                  mb={"25px"}
                  borderRadius={"10px"}
                  borderColor={"black"}
       
                  border="2px solid #EBEBEB" // Adjust the width and color as needed
                  type="text"
                  placeholder="I want Better in REACT"
                />


<FormLabel fontWeight={400} fontSize={"17px"}>
Weekly Goal Three
                </FormLabel>

                <Input
                value={WeeklyGoalThree}
                onChange={(e) => setWeeklyGoalThree(e.target.value)}
                  _focus={{ borderBottom: "2px solid #EBEBEB" }}
                 
                  w={"100%"}
                  
                  fontSize={"16px"}
                  mb={"40px"}
                  borderRadius={"10px"}
                  borderColor={"black"}
       
                  border="2px solid #EBEBEB" // Adjust the width and color as needed
                  type="text"
                  placeholder="I want to dabble in back end development"
                />

               
               

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

export default WeeklyGoal