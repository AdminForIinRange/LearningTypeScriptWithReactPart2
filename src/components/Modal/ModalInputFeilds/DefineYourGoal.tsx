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
  import { Dispatch, SetStateAction, useState } from "react";
  import { FaCheck } from "react-icons/fa";
  import {onClose} from "../../../global/index.ts"
  import { AppDispatch } from "../../../store.ts";


  import { useDispatch } from "react-redux";
import { addGoals } from "../../../features/goals/goalsSlice.tsx";


const DefineYourGoal : React.FC<onClose> = ({onClose}) => {
  const dispatch = useDispatch<AppDispatch>()
    const [goalDescription, setGoalDescription]: [string, Dispatch<SetStateAction<string>>] = useState("");
    const [timeEstimate, setTimeEstimate]: [string, Dispatch<SetStateAction<string>>] = useState("");
  




  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    dispatch(addGoals({ goalDescription: goalDescription }));
 // Dispatching setGoalDescription to update goalDescription in the store
 dispatch(addGoals({ timeEstimate: timeEstimate }));
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