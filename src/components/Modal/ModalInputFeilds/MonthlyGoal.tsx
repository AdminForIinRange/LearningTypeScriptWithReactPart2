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
import { ModalInputFeild, ModalTitle } from "./ModalInputFeild.tsx";
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
           <ModalTitle title="Monthly Goal" />
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
            
           
              <ModalInputFeild
              value={monthlyGoalOne}
              onChange={(e) => setMonthlyGoalOne(e.target.value)}
            />
 <ModalInputFeild
              value={monthlyGoalTwo}
              onChange={(e) =>  setMonthlyGoalTwo(e.target.value)}
            />
 <ModalInputFeild
              value={monthlyGoalThree}
              onChange={(e) =>  setMonthlyGoalThree(e.target.value)}
            />

               
               

                <HStack w={"100%"} justify={"Center"}>
                  <Button   mb={"25px"}
                  
                  colorScheme="whatsapp"
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