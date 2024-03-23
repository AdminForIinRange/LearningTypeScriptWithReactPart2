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
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import React from "react";
 import CreateYourGoalModalProps from "../../global/index.ts";

const CreateYourGoalModal: React.FC<CreateYourGoalModalProps> = ({
  modalValue,
  isOpen,
  onClose,
  blockScrollOnMount,
}) => {
  const modalValueDisplay = () => {
    if (modalValue === "Goal") {
      return <> <ModalHeader>Goal</ModalHeader> </>;
    } else if (modalValue === "Monthly") {
      return<> <ModalHeader>Monthly</ModalHeader> </>;
    } else if (modalValue === "Weekly") {
      return <> <ModalHeader>Weekly</ModalHeader> </>;
    } else if (modalValue === "Daily") {
      return <> <ModalHeader>Daily</ModalHeader> </>;
    }
  };

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          {modalValueDisplay()}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateYourGoalModal;
