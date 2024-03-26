import {
  HStack,
  VStack,
  Text,
  Spacer,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import GoalModalHandler from "../../components/Modal/GoalModalHandler.tsx";
import { AppDispatch, RootState } from "../../store.ts";
import CompletedBar from "../../components/GoalBar/CompletedBar.tsx";
import ModalData from "../../components/Modal/ModalData.json";
import { useDispatch, useSelector } from "react-redux";
import { NavboxCheck } from "../../features/goals/goalsSlice.tsx";
import GoalBars from "../../components/GoalBar/GoalBars.tsx";
const GoalCreation: React.FC = () => {
  const { OnNavbox, Daily, Weekly, Monthly, DefineGoal } = useSelector(
    (state: RootState) => state.goals
  );
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalValue, setModalValue]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState<string>("");
  const { Navbox } = ModalData[0];

  useEffect(() => {
    if (!isOpen) {
      dispatch(NavboxCheck("Lets Get Started"));
    }
  }, [modalValue, dispatch, isOpen]);

  return (
    <>
      <VStack p={2} px={3}>
        <Text fontFamily={"Raleway"} fontSize={"95px"} fontWeight={"700"}>
          {OnNavbox}
        </Text>

        {isOpen ? (
          <> </>
        ) : (
          <VStack
            justify={"center"}
            w={["90%", "90%", "60%", "50%"]}
            align={"start"}
            gap={"40px"}
            mt={"45px"}
          >
            {Navbox.map(({ value, title }, index) =>
              Daily === value ? (
                <CompletedBar key={index} title={title} index={index} />
              ) : (
                <GoalBars
                  onClick={() => {
                    setModalValue(value);
                    onOpen();
                    dispatch(NavboxCheck(title));
                  }}
                  key={index}
                  index={index}
                  title={title}
                />
              )
            )}
          </VStack>
        )}
      </VStack>

      <GoalModalHandler
        modalValue={modalValue}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default GoalCreation;
