import {
  HStack,
  VStack,
  Text,
  Box,
  Spacer,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import GoalModalHandlerProps from "../../global/index.ts";
import { FaArrowRightLong } from "react-icons/fa6";
import DefineYourGoal from "./ModalInputFeilds/DefineYourGoal.tsx";

import MonthlyGoal from "./ModalInputFeilds/MonthlyGoal.tsx";
import WeeklyGoal from "./ModalInputFeilds/WeeklyGoal.tsx";
import DaliyGoal from "./ModalInputFeilds/DaliyGoal.tsx";

const GoalModalHandler: React.FC<GoalModalHandlerModalProps> = ({
  modalValue,
  setModalValue,
  isOpen,
  onClose,
  blockScrollOnMount,
}) => {
 


  const modalValueDisplay = () => {
    if (modalValue === "Goal") {
      return (
        <>
          {" "}
        <DefineYourGoal  onClose={onClose} />
        </>
      );
    } else if (modalValue === "Monthly") {
      return (
        <>
          {" "}
        <MonthlyGoal onClose={onClose} />
        </>
      );
    } else if (modalValue === "Weekly") {
      return (
        <>
          {" "}
        <WeeklyGoal onClose={onClose} />
        </>
      );
    } else if (modalValue === "Daily") {
      return (
        <>
          {" "}
        <DaliyGoal onClose={onClose} />
        </>
      );
    }
  };

  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        size={"lg"}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent boxShadow={"xl"}>
          <ModalCloseButton />

          {modalValueDisplay()}
        </ModalContent>
      </Modal>
    </>
  );
};

export default GoalModalHandler;
