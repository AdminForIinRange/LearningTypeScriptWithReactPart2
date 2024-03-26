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
import {onClose} from "../../../global/index.ts"
import { Dispatch, SetStateAction, useState } from "react";
import { FaCheck } from "react-icons/fa";

import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../store.ts";
import {addGoals } from "../../../features/goals/goalsSlice.tsx";


const DailyGoal : React.FC<onClose> = ({onClose}) => {
  const dispatch = useDispatch<AppDispatch>()
    const [dailyGoalOne, setDailyGoalOne]: [string, Dispatch<SetStateAction<string>>] = useState("");

   
    const [dailyGoalTwo, setDailyGoalTwo]: [string, Dispatch<SetStateAction<string>>] = useState("");
    const [dailyGoalThree, setDailyGoalThree]: [string, Dispatch<SetStateAction<string>>] = useState("");
   



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    
      dispatch(addGoals({ DailyGoalOne: dailyGoalOne }));
      dispatch(addGoals({ DailyGoalTwo: dailyGoalTwo }));
      dispatch(addGoals({ DailyGoalThree: dailyGoalThree }));
    
    };
 
    return (
     <>
    
    
    <ModalHeader>
            <HStack w={"100%"} h={"100%"} justify={"center"}    mt={"10px"}>
              {" "}
              <Text  fontSize={"45px"} fontWeight={"700"}>
                {" "}
                Set 3 Daily Goals
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
                Daily Goal One
                </FormLabel>

                <Input
                value={dailyGoalOne}
                onChange={(e) => setDailyGoalOne(e.target.value)}
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
Daily Goal Two
                </FormLabel>

                <Input
                value={dailyGoalTwo}
                onChange={(e) => setDailyGoalTwo(e.target.value)}
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
Daily Goal Three
                </FormLabel>

                <Input
                value={dailyGoalThree}
                onChange={(e) => setDailyGoalThree(e.target.value)}
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
                    w={"100%"}
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

export default DailyGoal