import {
  HStack,
  Button,
  useBreakpointValue,
  Text,
  MenuButton,

  Menu,
  Avatar,
  MenuList,
  MenuItem,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaCog } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GoGoal } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {

  const dispatch = useDispatch<AppDispatch>();
  const isSmallScreen = useBreakpointValue({ base: true, sm: false });
  const { user } =
    useSelector((state: RootState) => state.auth);


    
  return (
    <HStack
      fontFamily={"Raleway"}
      h={"60px"}
      w={"100%"}
      justify={"center"}
      align={"center"}
      boxShadow={"xl"}
      px={20}
    >
      <Avatar size={"sm"} name="" />
<Text fontWeight={500}>
{user?.name}
</Text>
      <Spacer />
      <HStack fontWeight={500}>
        {isSmallScreen ? ( //custom comp and pass as chlidren tsx
          <Menu>
            <MenuButton as={Button} color={"black"} variant="outline">
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              <MenuItem gap={"10px"}>
                {" "}
                <FaPen size={"23px"} /> Create
              </MenuItem>
              <MenuItem gap={"10px"}>
                {" "}
                <GoGoal size={"23px"} />
                Goals
              </MenuItem>
              <MenuItem gap={"10px"}>
                {" "}
                <FaCog size={"23px"} />
                Setting
              </MenuItem>
            </MenuList>
          </Menu>
        ) : ( //custom comp and pass as chlidren as well tsx
          <ButtonGroup gap={"25px"}> 
            <Button variant={"link"} color={"balck"} leftIcon={<FaPen />}>
              <Text color={"BLACK"}>Create</Text>
            </Button>

            <Button variant={"link"} color={"balck"} leftIcon={<GoGoal />}>
              <Text color={"BLACK"}>Goals</Text>
            </Button>

            <Button variant={"link"} color={"balck"} leftIcon={<FaCog />}>
              <Text color={"BLACK"}>Setting</Text>
            </Button>
          </ButtonGroup>
        )}
      </HStack>
    </HStack>
  );
}
