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


interface CreateYourGoalModalProps {
  modalValue: string
  blockScrollOnMount: boolean
  isOpen : boolean
  onClose : () => void


}








const CreateYourGoalModal  : React.FC<CreateYourGoalModalProps> = ({ modalValue, isOpen, onClose, blockScrollOnMount}) => {



  return (
    <>
     <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
        <ModalCloseButton />
        
        <ModalHeader>Modal Title</ModalHeader>
         
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateYourGoalModal;
