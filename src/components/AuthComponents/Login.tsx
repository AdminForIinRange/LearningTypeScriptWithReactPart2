import {
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Button,
  Divider,
  Text,
  Box,

} from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import { GoogleIcon } from "../../assets/iocns/AuthIcons";
import {
  resetPassword,
  setForgotPassword,
  setLoginForm,
  signInWithEmailPassword,
  signInWithGoogle,
} from "../../features/auth/authSlice.tsx";
import { AppDispatch, RootState } from "../../store.ts";
import { useDispatch, useSelector } from "react-redux";
import ForgotPass from "./AuthModal/ForgotPass.tsx";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { invalidCredential } = useSelector(
    (state: RootState) => state.auth,
  );

  const [email, setEmail]: [
    string,
    React.Dispatch<React.SetStateAction<string>>,
  ] = useState<string>("");

  const [password, setPassword]: [
    string,
    React.Dispatch<React.SetStateAction<string>>,
  ] = useState<string>("");

  const [showPassword, setShowPassword]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signInWithEmailPassword({ email, password }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {invalidCredential ? (
          <>
            <Box
              w={"100%"}
              h={"30px"}
              bg={"#FED7D7"}
              mb={"15px"}
              border={" 2px dotted #FC8181"}
            >
              <HStack justify={"center"}>
                <Text fontWeight={450} color={"#9B2C2C"}>
                  Email or Password Incorrect try{" "}
                  <Button
                    colorScheme="red"
                    variant="link"
                    onClick={() => dispatch(setForgotPassword(true))}
                  >
                    Forgot password?
                  </Button>{" "}
                  or{" "}
                  <Button
                    colorScheme="orange"
                    variant="link"
                    onClick={() => dispatch(setLoginForm(false))}
                  >
                    Sign Up
                  </Button>
                </Text>
              </HStack>
            </Box>
          </>
        ) : (
          <></>
        )}
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
        <FormLabel mt={"20px"} htmlFor="password">
          password
        </FormLabel>
        <Input
          id="password"
          type={showPassword ? "text" : "password"} // Show password if showPassword is true
          required
          autoComplete="current-password"
          style={{ width: "100%" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button
          leftIcon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
          variant={"none"}
          position={"absolute"}
          right={680}
          onClick={() => setShowPassword(!showPassword)}
        ></Button>
        <HStack mt={"15px"} justify="space-between">
          <Checkbox>Remember me</Checkbox>
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              dispatch(resetPassword({ email }));
              dispatch(setForgotPassword(true));
            }}
          >
            Forgot password?
          </Button>
        </HStack>

        <ForgotPass email={email} />

        <Button colorScheme="whatsapp" mt={"20px"} w={"100%"} type="submit">
          Login
        </Button>

        <HStack mt={"20px"}>
          <Divider />
          <Text whiteSpace="nowrap" color="fg.muted">
            Sign In With
          </Text>
          <Divider />
        </HStack>

        <HStack mt={"15px"} justify={"center"} align={"center"} mb={"20px"}>
          <Button
            onClick={() => dispatch(signInWithGoogle())}
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

export default Login;
