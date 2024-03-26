import {
  Modal,
 
  ModalContent,
  ModalCloseButton,

} from "@chakra-ui/react";

import { GoalModalHandlerProps } from "../../global/index.ts";
import DefineYourGoal from "./ModalInputFeilds/DefineYourGoal.tsx";
import MonthlyGoal from "./ModalInputFeilds/MonthlyGoal.tsx";
import WeeklyGoal from "./ModalInputFeilds/WeeklyGoal.tsx";
import DaliyGoal from "./ModalInputFeilds/DaliyGoal.tsx";
import { FaCheck } from "react-icons/fa";

const GoalModalHandler = ({modalValue,  blockScrollOnMount, isOpen, onClose}: GoalModalHandlerProps) => {


  const modalValueDisplay = () => {
    switch (modalValue) {
      case "Goal":
        return <DefineYourGoal onClose={onClose} />;
      case "Monthly":
        return <MonthlyGoal onClose={onClose} />;
      case "Weekly":
        return <WeeklyGoal onClose={onClose} />;
      case "Daily":
        return <DaliyGoal onClose={onClose} />;
      default:
        return null; // Or handle other cases as needed
    }
  };

  return (
    <Modal
      blockScrollOnMount={blockScrollOnMount}
      isOpen={isOpen}
    size={"100%"}
      onClose={onClose}
      
    >

      <ModalContent mt={"225px"} w={["100%", "90%", "80%", "50%"]} boxShadow={"2xl"}>
        <ModalCloseButton />
        {modalValueDisplay()}

      
      </ModalContent>
    </Modal>
  );
};

export default GoalModalHandler;

