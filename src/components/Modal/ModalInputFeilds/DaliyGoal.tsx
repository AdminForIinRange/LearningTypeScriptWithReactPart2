import {
  HStack,
  VStack,
  Text,
  Input,
  ModalHeader,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { onClose } from "../../../global/index.ts";
import { Dispatch, SetStateAction, useState } from "react";
import { FaCheck } from "react-icons/fa";

import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../store.ts";
import { addGoals } from "../../../features/goals/goalsSlice.tsx";
import {ModalInputFeild , ModalTitle , ModalBTN} from "./ModalInputFeild.tsx";

const DailyGoal: React.FC<onClose> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [dailyGoalOne, setDailyGoalOne]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

  const [dailyGoalTwo, setDailyGoalTwo]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");
  const [dailyGoalThree, setDailyGoalThree]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(addGoals({ DailyGoalOne: dailyGoalOne }));
    dispatch(addGoals({ DailyGoalTwo: dailyGoalTwo }));
    dispatch(addGoals({ DailyGoalThree: dailyGoalThree }));
  };

  return (
    <>
      <ModalHeader>
       <ModalTitle title="Daily Goal" />
      </ModalHeader>
      <ModalBody w={"100%"} h={"100%"}>
        <VStack justify={"start"} align={"left"} w={"100%"} h={"100%"} p={2}>
          <form onSubmit={handleSubmit}>
            <ModalInputFeild
              value={dailyGoalOne}
              onChange={(e) => setDailyGoalOne(e.target.value)}
            />

            <ModalInputFeild
              value={dailyGoalTwo}
              onChange={(e) => setDailyGoalTwo(e.target.value)}
            />

            <ModalInputFeild
              value={dailyGoalThree}
              onChange={(e) => setDailyGoalThree(e.target.value)}
            />

<ModalBTN  onClick={() => {
                        onClose()
                   
                      console.log("im closed");
                    
                    }} />
          </form>
        </VStack>
      </ModalBody>{" "}
    </>
  );
};

export default DailyGoal;
