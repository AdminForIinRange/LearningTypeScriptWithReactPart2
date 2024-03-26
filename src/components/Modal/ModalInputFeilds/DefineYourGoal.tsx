import {
  HStack,
  VStack,
  Input,
  
  ModalBody,
  FormLabel,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { onClose } from "../../../global/index.ts";
import { AppDispatch } from "../../../store.ts";
import { ModalInputFeild, ModalBTN } from "./ModalInputFeild.tsx";
import { useDispatch } from "react-redux";
import { addGoals } from "../../../features/goals/goalsSlice.tsx";

const DefineYourGoal: React.FC<onClose> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [goalDescription, setGoalDescription]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");
  const [timeEstimate, setTimeEstimate]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

  const [formComplete, setFormComplete]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(addGoals({ goalDescription: goalDescription }));
    // Dispatching setGoalDescription to update goalDescription in the store
    dispatch(addGoals({ timeEstimate: timeEstimate }));
  };
  return (
    <>
      
      <ModalBody w={"100%"} h={"100%"}  mt={"20px"}>
        <VStack justify={"start"} align={"left"} w={"100%"} h={"100%"} p={2}>
          <form onSubmit={handleSubmit}>
            <FormLabel fontWeight={400} fontSize={"17px"}>
              Describe your goal
            </FormLabel>

            <ModalInputFeild
              value={goalDescription}
              onChange={(e) => setGoalDescription(e.target.value)}
            />
            <FormLabel fontWeight={400} fontSize={"17px"}>
              Estimated time for achieving this goal?
            </FormLabel>

            <HStack w={"100%"} justify={"center"}>
              <Input
                onChange={(e) => setTimeEstimate(e.target.value)}
                value={timeEstimate}
                _focus={{ border: "2px solid #B7EB8F" }}
                placeholder="Select Date"
                size="md"
                type="date" // Use type="date" to capture only the date
                mb={"40px"}
              />
            </HStack>

            <ModalBTN
              formComplete={formComplete} //maybe use a redux state, then pass it to the ModalinputFeild
              onClick={() => {
                if (!timeEstimate || !goalDescription) {
                  setFormComplete(false);
                } else {
                  onClose();
                  setFormComplete(true);

                  console.log("im closed");
                }
              }}
            />
          </form>
        </VStack>
      </ModalBody>{" "}
    </>
  );
};

export default DefineYourGoal;
