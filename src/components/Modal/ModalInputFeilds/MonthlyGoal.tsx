import {
    HStack,
    VStack,
    Text,
    
 
    Input,
    ModalHeader,
  
    ModalBody,
    Button,
  
  } from "@chakra-ui/react";
import {onClose} from "../../../global/index.ts"
import { Dispatch, SetStateAction, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {addGoals } from "../../../features/goals/goalsSlice.tsx";
import { AppDispatch } from "../../../store.ts";
const MonthlyGoal : React.FC<onClose> = ({onClose}) => {
  const dispatch = useDispatch<AppDispatch>()
    const [monthlyGoalOne, setMonthlyGoalOne]: [string, Dispatch<SetStateAction<string>>] = useState("");
   
    const [monthlyGoalTwo, setMonthlyGoalTwo]: [string, Dispatch<SetStateAction<string>>] = useState("");
    const [monthlyGoalThree, setMonthlyGoalThree]: [string, Dispatch<SetStateAction<string>>] = useState("");
   



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addGoals({ MonthlyGoalOne: monthlyGoalOne }));
        dispatch(addGoals({ MonthlyGoalTwo: monthlyGoalTwo }));
        dispatch(addGoals({ MonthlyGoalThree: monthlyGoalThree }));
      };
    
 
    return (
     <>
    
    
    <ModalHeader>
            <HStack w={"100%"} h={"100%"} justify={"center"}    mt={"10px"}>
              {" "}
              <Text   fontSize={"35px"} fontWeight={"100"}>
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
            
           

                <Input
                value={monthlyGoalOne}
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


                <Input
                value={monthlyGoalTwo}
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




                <Input
                value={monthlyGoalThree}
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

export default MonthlyGoal