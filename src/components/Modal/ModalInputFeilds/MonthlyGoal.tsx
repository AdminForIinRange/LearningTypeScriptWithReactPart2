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
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateGoal } from "../../../features/goals/goalsSlice.tsx";
  
const MonthlyGoal : React.FC<onClose> = ({onClose}) => {
    const dispatch = useDispatch();
    const [MonthlyGoalOne, setMonthlyGoalOne]: [string, Dispatch<SetStateAction<string>>] = useState("");
   
    const [MonthlyGoalTwo, setMonthlyGoalTwo]: [string, Dispatch<SetStateAction<string>>] = useState("");
    const [MonthlyGoalThree, setMonthlyGoalThree]: [string, Dispatch<SetStateAction<string>>] = useState("");
   



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(updateGoal({ index: 0, field: 'MonthlyGoalOne', value: MonthlyGoalOne }));
    dispatch(updateGoal({ index: 0, field: 'MonthlyGoalTwo', value: MonthlyGoalTwo }));
    dispatch(updateGoal({ index: 0, field: 'MonthlyGoalThree', value: MonthlyGoalThree }));
      };
    
 
    return (
     <>
    
    
    <ModalHeader>
            <HStack w={"100%"} h={"100%"} justify={"center"}    mt={"10px"}>
              {" "}
              <Text fontFamily={"Raleway"} fontSize={"45px"} fontWeight={"700"}>
                {" "}
                Set 3 Monthly Goals
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
                Monthly Goal One
                </FormLabel>

                <Input
                value={MonthlyGoalOne}
                onChange={(e) => setMonthlyGoalOne(e.target.value)}
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
Monthly Goal Two
                </FormLabel>

                <Input
                value={MonthlyGoalTwo}
                onChange={(e) => setMonthlyGoalTwo(e.target.value)}
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
Monthly Goal Three
                </FormLabel>

                <Input
                value={MonthlyGoalThree}
                onChange={(e) => setMonthlyGoalThree(e.target.value)}
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

export default MonthlyGoal