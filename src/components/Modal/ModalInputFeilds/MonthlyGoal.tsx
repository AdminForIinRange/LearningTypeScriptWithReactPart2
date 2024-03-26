import { VStack, ModalHeader, ModalBody } from "@chakra-ui/react";
import { onClose } from "../../../global/index.ts";
import { Dispatch, SetStateAction, useState } from "react";

import { useDispatch } from "react-redux";
import { addGoals } from "../../../features/goals/goalsSlice.tsx";
import { AppDispatch } from "../../../store.ts";
import { ModalInputFeild, ModalTitle, ModalBTN, ModalInputFeildError } from "./ModalInputFeild.tsx";
const MonthlyGoal: React.FC<onClose> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [monthlyGoalOne, setMonthlyGoalOne]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

  const [monthlyGoalTwo, setMonthlyGoalTwo]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");
  const [monthlyGoalThree, setMonthlyGoalThree]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");


    const [formComplete, setFormComplete]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(true);
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
        <VStack justify={"start"} align={"left"} w={"100%"} h={"100%"} p={2}>
          <form onSubmit={handleSubmit}>
            <ModalInputFeild
              value={monthlyGoalOne}
              onChange={(e) => setMonthlyGoalOne(e.target.value)}
            />
            <ModalInputFeild
              value={monthlyGoalTwo}
              onChange={(e) => setMonthlyGoalTwo(e.target.value)}
            />
            <ModalInputFeild
              value={monthlyGoalThree}
              onChange={(e) => setMonthlyGoalThree(e.target.value)}
            />

            <ModalBTN
            formComplete={formComplete}
              onClick={() => {
                if (!monthlyGoalOne || !monthlyGoalTwo || !monthlyGoalThree) {
        
                  setFormComplete(false)
  
                } else {
                  onClose();
                  setFormComplete(true)

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

export default MonthlyGoal;
