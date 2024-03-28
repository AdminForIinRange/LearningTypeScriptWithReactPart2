import { VStack, ModalBody } from "@chakra-ui/react";
import { onClose } from "../../../global/index.ts";
import { Dispatch, SetStateAction, useState } from "react";

import {
  addGoals,
  CompletedBarArrayCheck,
} from "../../../features/goals/goalsSlice.tsx";

import { AppDispatch } from "../../../store.ts";
import { useDispatch } from "react-redux";
import { ModalInputFeild, ModalBTN } from "./ModalInputFeild.tsx";
const WeeklyGoal: React.FC<onClose> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [weeklyGoalOne, setWeeklyGoalOne]: [
    string,
    Dispatch<SetStateAction<string>>,
  ] = useState("");

  const [weeklyGoalTwo, setWeeklyGoalTwo]: [
    string,
    Dispatch<SetStateAction<string>>,
  ] = useState("");
  const [weeklyGoalThree, setWeeklyGoalThree]: [
    string,
    Dispatch<SetStateAction<string>>,
  ] = useState("");

  const [formComplete, setFormComplete]: [
    boolean,
    Dispatch<SetStateAction<boolean>>,
  ] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(addGoals({ WeeklyGoalOne: weeklyGoalOne }));
    dispatch(addGoals({ WeeklyGoalTwo: weeklyGoalTwo }));
    dispatch(addGoals({ WeeklyGoalThree: weeklyGoalThree }));
  };

  return (
    <>
      <ModalBody w={"100%"} h={"100%"} mt={"20px"}>
        <VStack justify={"start"} align={"left"} w={"100%"} h={"100%"} p={2}>
          <form onSubmit={handleSubmit}>
            <ModalInputFeild
              value={weeklyGoalOne}
              onChange={(e) => setWeeklyGoalOne(e.target.value)}
            />

            <ModalInputFeild
              value={weeklyGoalTwo}
              onChange={(e) => setWeeklyGoalTwo(e.target.value)}
            />

            <ModalInputFeild
              value={weeklyGoalThree}
              onChange={(e) => setWeeklyGoalThree(e.target.value)}
            />

            <ModalBTN
              formComplete={formComplete}
              onClick={() => {
                if (!weeklyGoalOne || !weeklyGoalTwo || !weeklyGoalThree) {
                  setFormComplete(false);
                } else {
                  onClose();
                  setFormComplete(true);
                  dispatch(CompletedBarArrayCheck("Weekly"));
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

export default WeeklyGoal;
