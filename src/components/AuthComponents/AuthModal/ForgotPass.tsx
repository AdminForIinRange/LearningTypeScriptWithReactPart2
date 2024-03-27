import {
   
    Divider,
   
    Text,
   
    Modal,
    ModalOverlay,
    ModalContent,
   
    ModalCloseButton,
    VStack,
  
  } from "@chakra-ui/react";
  import { setForgotPassword } from "../../../features/auth/authSlice";
  import { useDispatch, useSelector } from "react-redux";
  import { AppDispatch, RootState } from "../../../store.ts";

interface ForgotPass {
    
    email: string
}
const ForgotPass : React.FC<ForgotPass> = ({email}) => {

    const {
        forgotPassword, 
     } = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch<AppDispatch>();


  return (
    <>
    
    <Modal isOpen={forgotPassword} onClose={() => dispatch(setForgotPassword(!forgotPassword))}>
    <ModalOverlay />
    <ModalContent>
      <VStack
        justify={"center"}
        align={"center"}
        p={"2%"}
        mb={"30px"}
      >
    

        <Text fontWeight={500} fontSize={"25px"}>
          Password Change Request
        </Text>

        <Text>You have sumbited a password change request</Text>
        <Divider w={"60%"} />
        <Text>We Have emailed a Rest Link to: </Text>
        <Text fontSize={"20px"} color={"teal"}>
          {email}
        </Text>
      </VStack>

      <ModalCloseButton
        onClick={() => {
          dispatch(setForgotPassword(false));
        }}
      />
    </ModalContent>
  </Modal>
  </>
  )
}

export default ForgotPass