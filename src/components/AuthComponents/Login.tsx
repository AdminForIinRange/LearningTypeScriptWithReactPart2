import { FormLabel, Input, HStack, Checkbox, Button, Divider, Text} from '@chakra-ui/react'
import React from 'react'
import { GoogleIcon } from '../../assets/iocns/AuthIcons'
import { AppDispatch } from "../../store.ts";
import { useDispatch } from "react-redux";
import { signInWithGoogle } from '../../features/auth/authSlice.tsx';

const Login : React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
    
    <form onSubmit={(e) => e.preventDefault()}>
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
            />
            <FormLabel mt={"20px"} htmlFor="password">
              password
            </FormLabel>
            <Input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              w={"100%"}
            />

            <HStack mt={"15px"} justify="space-between">
              <Checkbox>Remember me</Checkbox>
              <Button variant="link" size="sm">
                Forgot password?
              </Button>
            </HStack>

            <Button  colorScheme="whatsapp" mt={"20px"} w={"100%"} type="submit">
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
              <Button  onClick={() => dispatch(signInWithGoogle())} colorScheme="gray" w={"20%"}>
                <GoogleIcon fontSize={"xl"} />
              </Button>
            </HStack>
          </form>
          
          </>
  )
}

export default Login