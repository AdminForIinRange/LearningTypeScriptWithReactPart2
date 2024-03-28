import {
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Button,
  Divider,
  Text,
  Box,
  Progress,
} from "@chakra-ui/react";
import React, {

  FormEvent,

  useState,
} from "react";
import { GoogleIcon } from "../../assets/iocns/AuthIcons";
import { AppDispatch, RootState } from "../../store.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  signInWithGoogle,
  registerWithEmailAndPassword,
  sethasNotPasswordVerified,
  setweakPassword,
  setLoginForm,
} from "../../features/auth/authSlice.tsx";

const SignUp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    isLoading,

    
    emailInUse,

    hasNotPasswordVerified,

    weakPassword,
  } = useSelector((state: RootState) => state.auth);

  const [email, setEmail]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");

  const [password, setPassword]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");

  const [rePassword, setRePassword]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(password, rePassword);
    if (password === rePassword) {
      dispatch(registerWithEmailAndPassword({ email, password }));
      dispatch(sethasNotPasswordVerified(false));
    } else {
      dispatch(sethasNotPasswordVerified(true));

      console.log(password, rePassword);
    }
  };

  if (password.length > 5) {
    dispatch(setweakPassword(false));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormLabel mt={"20px"} htmlFor="email">
          {" "}
          Email
        </FormLabel>
        <Input
          id="email"
          type="email"
          w={"100%"}
          autoComplete="current-email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailInUse ? (
          <Box
            w={"100%"}
            h={"30px"}
            bg={"#FEEBC8"}
            mt={"10px"}
            border={" 2px dotted #F6AD55"}
          >
            <HStack justify={"center"}>
              <Text fontWeight={450} color={"#DD6B20"}>
                The Email you have entered is already Signed Up{" "}
                <Button
                  onClick={() => dispatch(setLoginForm(true))}
                  colorScheme="yellow.100"
                  variant="link"
                >
                  Login
                </Button>
              </Text>
            </HStack>
          </Box>
        ) : null}
        <FormLabel mt={"20px"} htmlFor="password">
          password
        </FormLabel>
        <Input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          w={"100%"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {weakPassword ? (
          <Box
            w={"100%"}
            h={"30px"}
            bg={"#FEEBC8"}
            mt={"10px"}
            border={" 2px dotted #F6AD55"}
          >
            <HStack justify={"center"}>
              <Text fontWeight={450} color={"#DD6B20"}>
                Password should be at least 6 characters
              </Text>
            </HStack>
          </Box>
        ) : (
          <></>
        )}
        <FormLabel mt={"20px"} htmlFor="password">
          Retype password
        </FormLabel>
        <Input
          id="rePassword"
          type="password"
          required
          autoComplete="current-password"
          w={"100%"}
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />

        {hasNotPasswordVerified ? (
          <>
            <Box
              w={"100%"}
              h={"30px"}
              bg={"#FEEBC8"}
              mt={"10px"}
              border={" 2px dotted #F6AD55"}
            >
              <HStack justify={"center"}>
                <Text fontWeight={450} color={"#DD6B20"}>
                  The passwords do not match
                </Text>
              </HStack>
            </Box>
          </>
        ) : (
          <></>
        )}

        <HStack mt={"15px"} justify="space-between">
          <Checkbox>Remember me</Checkbox>
        </HStack>

        <Button mt={"20px"} w={"100%"} type="submit">
          Sign Up
        </Button>

        <HStack mt={"20px"}>
          <Divider />
          <Text whiteSpace="nowrap" color="fg.muted">
            Sign Up With
          </Text>
          <Divider />
        </HStack>

        <HStack mt={"15px"} justify={"center"} align={"center"} mb={"20px"}>
          <Button
            onClick={() => {
              dispatch(signInWithGoogle());
            }}
            colorScheme="gray"
            w={"20%"}
          >
            <GoogleIcon fontSize={"xl"} />
          </Button>
         
        </HStack>
      </form>
    </>
  );
};

export default SignUp;
