import {
  HStack,

  Text,
  Input,

  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
interface InputFeildProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // ReactNode allows any valid JSX to be passed as children
}

interface ModalTitleProps {
  title: string;
}


interface ModalBTNProps {

    onClick: React.MouseEventHandler<HTMLButtonElement>
    formComplete: boolean
  }
const ModalInputFeild: React.FC<InputFeildProps> = ({ value, onChange }) => {
  return (
    <>
      <Input
      isRequired={true}
        value={value}
        onChange={onChange}
        _focus={{ border: "2px solid #B7EB8F" }}
        w={"100%"}
        fontSize={"16px"}
        mb={"25px"}
        borderRadius={"10px"}
        borderColor={"black"}
        border="2px solid #EBEBEB" // Adjust the width and color as needed
        type="text"
        placeholder="I want to learn front end development"
      />
    </>
  );
};

const ModalTitle: React.FC<ModalTitleProps> = ({ title }) => {
  return (
    <>
      <HStack w={"100%"} h={"100%"} justify={"center"} mt={"10px"}>
        {" "}
        <Text fontSize={"35px"} fontWeight={"100"}>
          {" "}
          {title}
        </Text>
      </HStack>
    </>
  );
};

const ModalBTN: React.FC<ModalBTNProps> = ({ onClick, formComplete }) => {
  return (
    <>
      <VStack w={"100%"} justify={"Center"}>
        <Button
          mb={"25px"}
          colorScheme="whatsapp"
          type="submit"
          onClick={onClick}
          w={"100%"}
          rightIcon={<FaCheck />}
        >
          Done
        </Button>
        <Box
          borderRadius={"5px"}
          display={formComplete ? "none" : "block"}
          mt={"-25px"}
          bg={"red.200"}
          textAlign={"center"}
          fontWeight={"200"}
          color={"RED"}
          w={"100%"}
        >
          Form not Complete
        </Box>
      </VStack>
    </>
  );
};



  const ModalInputFeildError: React.FC = () => {
    return (
      <>

      
      </>
    );
  };


export { ModalTitle, ModalInputFeild, ModalBTN, ModalInputFeildError};
